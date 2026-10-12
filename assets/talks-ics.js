/* Client-side .ics export for the FuSo Talks column.
   Reads the upcoming talks straight from the DOM so it stays in sync with the
   markup — and works unchanged across the English, German and French pages,
   whose only difference here is the localized month abbreviation. */
(function () {
  "use strict";

  // Month abbreviations as rendered in en / de / fr (see .talk-month spans).
  var MONTHS = {
    jan: 0, janv: 0,
    feb: 1, fev: 1, "févr": 1, fevr: 1,
    mar: 2, "mär": 2, maer: 2, mars: 2,
    apr: 3, avr: 3,
    may: 4, mai: 4,
    jun: 5, juin: 5,
    jul: 6, juil: 6,
    aug: 7, "août": 7, aout: 7,
    sep: 8, sept: 8,
    oct: 9, okt: 9,
    nov: 10,
    dec: 11, dez: 11, "déc": 11
  };

  function monthIndex(raw) {
    var key = (raw || "").trim().toLowerCase().replace(/\.$/, "");
    if (key in MONTHS) return MONTHS[key];
    return -1;
  }

  // Fold to 75 octets per line as required by RFC 5545.
  function fold(line) {
    var out = "";
    var chunk = line;
    while (chunk.length > 74) {
      out += chunk.slice(0, 74) + "\r\n ";
      chunk = chunk.slice(74);
    }
    return out + chunk;
  }

  function esc(text) {
    return String(text)
      .replace(/\\/g, "\\\\")
      .replace(/;/g, "\\;")
      .replace(/,/g, "\\,")
      .replace(/\r?\n/g, "\\n");
  }

  function pad(n) { return (n < 10 ? "0" : "") + n; }

  function dateStamp(d) {
    return d.getUTCFullYear() +
      pad(d.getUTCMonth() + 1) +
      pad(d.getUTCDate()) + "T" +
      pad(d.getUTCHours()) +
      pad(d.getUTCMinutes()) +
      pad(d.getUTCSeconds()) + "Z";
  }

  function localStamp(y, m, day, hh, mm) {
    return y + pad(m + 1) + pad(day) + "T" + pad(hh) + pad(mm) + "00";
  }

  // Text of the .meta element that holds a given icon (e.g. clock, pin),
  // stripped of the (empty, mask-based) icon span itself.
  function metaText(item, iconClass) {
    var icon = item.querySelector("." + iconClass);
    if (!icon) return "";
    var host = icon.closest(".meta") || icon.parentNode;
    return (host.textContent || "").replace(/\s+/g, " ").trim();
  }

  // Parse a "12:15–13:15" style range (en dash or hyphen) into [h,m] pairs.
  function parseTimeRange(text) {
    var m = text.match(/(\d{1,2}):(\d{2})\s*[–—-]\s*(\d{1,2}):(\d{2})/);
    if (!m) return null;
    return {
      start: [parseInt(m[1], 10), parseInt(m[2], 10)],
      end: [parseInt(m[3], 10), parseInt(m[4], 10)]
    };
  }

  function collectTalks(box) {
    // Direct child .talk-list only — the Past Talks archive is nested inside
    // <details class="event-archive"> and is intentionally excluded.
    var list = box.querySelector(":scope > .talk-list");
    if (!list) return [];
    var items = list.querySelectorAll(":scope > .talk-item");
    var talks = [];

    items.forEach(function (item) {
      var dayEl = item.querySelector(".talk-day");
      var monEl = item.querySelector(".talk-month");
      var yrEl = item.querySelector(".talk-year");
      if (!dayEl || !monEl || !yrEl) return;

      // Take the first number for date ranges like "7–8"; talks are single-day.
      var day = parseInt((dayEl.textContent || "").match(/\d+/), 10);
      var month = monthIndex(monEl.textContent);
      var year = parseInt((yrEl.textContent || "").match(/\d+/), 10);
      if (isNaN(day) || month < 0 || isNaN(year)) return;

      var titleEl = item.querySelector(".talk-title");
      var title = titleEl ? titleEl.textContent.trim() : "";

      var kickerEl = item.querySelector(".talk-kicker");
      var kicker = kickerEl ? kickerEl.textContent.replace(/\s+/g, " ").trim() : "";

      var speakerEl = item.querySelector(".event-speaker");
      var speaker = speakerEl ? speakerEl.textContent.replace(/\s+/g, " ").trim() : "";

      var time = parseTimeRange(metaText(item, "ph-clock"));
      var location = metaText(item, "ph-map-pin");

      var streamEl = item.querySelector(".talk-stream");
      var stream = streamEl ? streamEl.href : "";

      talks.push({
        day: day, month: month, year: year,
        title: title, kicker: kicker, speaker: speaker,
        time: time, location: location, stream: stream
      });
    });

    return talks;
  }

  function buildICS(talks) {
    var now = new Date();
    var stamp = dateStamp(now);
    var lines = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//Future Society (FuSo)//Talks//EN",
      "CALSCALE:GREGORIAN",
      "METHOD:PUBLISH",
      "X-WR-CALNAME:FuSo Talks",
      // Europe/Zurich (CET/CEST) so times land correctly for subscribers.
      "BEGIN:VTIMEZONE",
      "TZID:Europe/Zurich",
      "BEGIN:DAYLIGHT",
      "TZOFFSETFROM:+0100",
      "TZOFFSETTO:+0200",
      "TZNAME:CEST",
      "DTSTART:19700329T020000",
      "RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU",
      "END:DAYLIGHT",
      "BEGIN:STANDARD",
      "TZOFFSETFROM:+0200",
      "TZOFFSETTO:+0100",
      "TZNAME:CET",
      "DTSTART:19701025T030000",
      "RRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU",
      "END:STANDARD",
      "END:VTIMEZONE"
    ];

    talks.forEach(function (t, i) {
      var uid = t.year + pad(t.month + 1) + pad(t.day) + "-" + i +
        "@future-society.github.io";
      var summary = "FuSo Talk" + (t.title ? ": " + t.title : "");
      var descParts = [];
      if (t.kicker) descParts.push(t.kicker);
      if (t.speaker) descParts.push(t.speaker);
      var desc = descParts.join(" — ");
      if (t.stream) desc += (desc ? "\n\n" : "") + "Livestream: " + t.stream;

      lines.push("BEGIN:VEVENT");
      lines.push("UID:" + uid);
      lines.push("DTSTAMP:" + stamp);

      if (t.time) {
        lines.push("DTSTART;TZID=Europe/Zurich:" +
          localStamp(t.year, t.month, t.day, t.time.start[0], t.time.start[1]));
        lines.push("DTEND;TZID=Europe/Zurich:" +
          localStamp(t.year, t.month, t.day, t.time.end[0], t.time.end[1]));
      } else {
        // All-day event when no time is given.
        var d = new Date(Date.UTC(t.year, t.month, t.day));
        var next = new Date(Date.UTC(t.year, t.month, t.day + 1));
        lines.push("DTSTART;VALUE=DATE:" + d.getUTCFullYear() +
          pad(d.getUTCMonth() + 1) + pad(d.getUTCDate()));
        lines.push("DTEND;VALUE=DATE:" + next.getUTCFullYear() +
          pad(next.getUTCMonth() + 1) + pad(next.getUTCDate()));
      }

      lines.push("SUMMARY:" + esc(summary));
      if (desc) lines.push("DESCRIPTION:" + esc(desc));
      if (t.location) lines.push("LOCATION:" + esc(t.location));
      lines.push("URL:" + (location.origin + location.pathname));
      lines.push("END:VEVENT");
    });

    lines.push("END:VCALENDAR");
    return lines.map(fold).join("\r\n");
  }

  function download(box) {
    var talks = collectTalks(box);
    if (!talks.length) return;
    var blob = new Blob([buildICS(talks)], { type: "text/calendar;charset=utf-8" });
    var url = URL.createObjectURL(blob);
    var a = document.createElement("a");
    a.href = url;
    a.download = "fuso-talks.ics";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(function () { URL.revokeObjectURL(url); }, 1000);
  }

  document.addEventListener("click", function (e) {
    var trigger = e.target.closest(".talk-ics-export");
    if (!trigger) return;
    e.preventDefault();
    var box = trigger.closest(".event-box");
    if (box) download(box);
  });
})();
