// Click tracking for GoatCounter (loaded via the count.js tag in each page).
//
// Privacy-friendly by design: no cookies, no localStorage, no cross-site
// identifiers. IP addresses are only used transiently to derive a country and
// are never stored. Because nothing is stored on the visitor's device and no
// personal data is retained, no cookie consent banner is required.
//
// Tracks navigation interest: which sections visitors jump to from the nav bar,
// and which language they switch to. Sent as events, so they stay separate from
// the pageview numbers in the dashboard.
document.addEventListener('click', function (e) {
  var link = e.target.closest('a');
  if (!link || !window.goatcounter || typeof window.goatcounter.count !== 'function') return;

  var name, title;
  if (link.closest('.lang-switch')) {
    var lang = (link.getAttribute('href') || '').match(/index\.(\w\w)\.html/);
    name = 'lang-' + (lang ? lang[1] : 'en');
    title = 'Language switch: ' + name.slice(5).toUpperCase();
  } else if (link.closest('nav') && (link.getAttribute('href') || '').charAt(0) === '#') {
    name = 'nav-' + link.getAttribute('href').slice(1);
    // The logo link has no text, so fall back to the anchor name.
    title = 'Nav: ' + (link.textContent.trim() || link.getAttribute('href').slice(1));
  } else {
    return;
  }

  window.goatcounter.count({ path: name, title: title, event: true });
});

// Track the easter-egg songs. The toggles always restart playback from 0, so
// every 'play' event is one deliberate trigger and never a resume-after-pause.
// Media events do not bubble, hence the capture-phase listener on document.
// Named after the audio file, so the language-specific hero songs stay apart
// while AMPLIFY totals across all three language versions.
document.addEventListener('play', function (e) {
  var el = e.target;
  if (!el || el.tagName !== 'AUDIO') return;
  if (!window.goatcounter || typeof window.goatcounter.count !== 'function') return;

  var song = (el.getAttribute('src') || '').split('/').pop().replace(/\.[^.]+$/, '');
  if (!song) return;

  window.goatcounter.count({
    path: 'song-' + song,
    title: 'Song played: ' + song,
    event: true
  });
}, true);

