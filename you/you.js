// Personalized site: renders ./?as=<persona> from personas.js, or the
// perspective picker when no (known) persona is given. ?as=standard shows the
// main page itself, 1:1, with only the language switch swapped for the
// perspective switcher. Events, publications, supporting network, funders and
// structured data are read from ../index.html at load time so they never
// drift from the main site.
(function () {
  'use strict';

  const PERSONAS = window.YOU_PERSONAS || [];
  const STORE = 'fuso-you-persona';
  const MAIL = 'fuso@unisg.ch';
  const app = document.getElementById('app');
  const requested = new URLSearchParams(location.search).get('as');
  const persona = PERSONAS.find(p => p.id === requested) || null;

  // Main-page URLs are relative to the site root; this page lives one level
  // down. Anything that is not absolute, root-relative, a fragment, a query
  // or a mailto/tel link gets a "../" prefix.
  const isRelative = v => v && !/^([a-z][a-z0-9+.-]*:|\/|#|\?)/i.test(v);
  const up = v => (isRelative(v) ? '../' + v : v);
  function rebase(root) {
    root.querySelectorAll('[src],[href],[data-song]').forEach(el => {
      ['src', 'href', 'data-song'].forEach(attr => {
        const v = el.getAttribute(attr);
        if (isRelative(v)) el.setAttribute(attr, '../' + v);
      });
    });
  }
  // assets/team.js stores photo paths relative to the site root as well.
  if (typeof teamMembers !== 'undefined') teamMembers.forEach(m => { m.photo = up(m.photo); });
  if (typeof formerMembers !== 'undefined') formerMembers.forEach(m => { m.photo = up(m.photo); });

  const store = {
    get() { try { return localStorage.getItem(STORE); } catch (e) { return null; } },
    set(v) { try { localStorage.setItem(STORE, v); } catch (e) {} },
  };

  function count(path, title) {
    const send = () => {
      if (window.goatcounter && typeof window.goatcounter.count === 'function') {
        window.goatcounter.count({ path, title, event: true });
        return true;
      }
      return false;
    };
    if (!send()) window.addEventListener('load', () => setTimeout(send, 300), { once: true });
  }

  const escapeHtml = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const shortLabel = p => (p ? p.short || p.label : 'Choose');

  // ─── Main-site data ───
  const main = { ok: false };

  async function loadMain() {
    try {
      const res = await fetch('../index.html', { cache: 'no-cache' });
      if (!res.ok) throw new Error(res.status);
      const doc = new DOMParser().parseFromString(await res.text(), 'text/html');
      rebase(doc.body);
      main.doc = doc;
      const boxes = doc.querySelectorAll('#events .event-box');
      main.events = boxes[0] ? Array.from(boxes[0].querySelectorAll(':scope > .ev-list > .event-item')) : [];
      main.talks = boxes[1] ? Array.from(boxes[1].querySelectorAll(':scope > .talk-list > .event-item')) : [];
      main.focus = Array.from(doc.querySelectorAll('#focus .focus-card')).map(card => ({
        num: (card.querySelector('.focus-num') || {}).textContent || '',
        title: (card.querySelector('h3') || {}).textContent || '',
        text: (card.querySelector(':scope > p:not(.focus-num)') || {}).textContent || '',
        pubs: Array.from(card.querySelectorAll('.focus-pub-list > li')),
      }));
      main.allPubs = main.focus.flatMap(f => f.pubs);
      const ld = doc.querySelector('script[type="application/ld+json"]');
      try { main.ld = ld ? JSON.parse(ld.textContent) : null; } catch (e) { main.ld = null; }
      main.ok = true;
    } catch (e) {
      main.ok = false;
    }
  }

  const MONTHS = { jan: 0, feb: 1, mar: 2, apr: 3, may: 4, jun: 5, jul: 6, aug: 7, sep: 8, oct: 9, nov: 10, dec: 11 };
  function itemDates(item) {
    const d = item.querySelector('.talk-day'), m = item.querySelector('.talk-month'), y = item.querySelector('.talk-year');
    if (!d || !m || !y) return null;
    const days = d.textContent.match(/\d+/g);
    const mi = MONTHS[m.textContent.trim().slice(0, 3).toLowerCase()];
    if (!days || mi === undefined) return null;
    const year = +y.textContent.trim();
    return { start: new Date(year, mi, +days[0]), end: new Date(year, mi, +days[days.length - 1], 23, 59) };
  }
  // The main page moves events to "Past" by hand; here anything that has
  // ended is dropped automatically.
  const upcoming = items => {
    const now = new Date();
    return items.filter(it => { const d = itemDates(it); return !d || d.end >= now; });
  };

  // ─── Shared chrome ───
  function switcher(current) {
    const link = p => `<li><a href="?as=${p.id}"${current && current.id === p.id ? ' class="active" aria-current="page"' : ''}><i class="ph-bold ph-${p.icon}" aria-hidden="true"></i>${p.label}</a></li>`;
    const group = (name, title) => `<li class="you-switch-group">${title}</li>` + PERSONAS.filter(p => p.group === name).map(link).join('');
    return `<div class="you-switch">
      <button type="button" class="you-switch-btn" id="youSwitchBtn" aria-expanded="false" aria-controls="youSwitchMenu" aria-label="Perspective: ${current ? current.label : 'none chosen'}. Change perspective">
        <i class="ph-bold ph-user-switch" aria-hidden="true"></i><span>${shortLabel(current)}</span><i class="ph-bold ph-caret-down you-switch-caret" aria-hidden="true"></i>
      </button>
      <ul class="you-switch-menu" id="youSwitchMenu" hidden>
        ${group('standard', 'Not tailored')}
        ${group('serious', 'Tailored for')}
        ${group('creative', 'Other lenses')}
        <li class="you-switch-all"><a href="./"><i class="ph-bold ph-squares-four" aria-hidden="true"></i>All perspectives</a></li>
      </ul>
    </div>`;
  }

  function bindSwitcher() {
    const btn = document.getElementById('youSwitchBtn');
    const menu = document.getElementById('youSwitchMenu');
    if (!btn || !menu) return;
    const open = state => { menu.hidden = !state; btn.setAttribute('aria-expanded', String(state)); };
    btn.addEventListener('click', () => open(menu.hidden));
    document.addEventListener('click', e => { if (!menu.hidden && !e.target.closest('.you-switch')) open(false); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape' && !menu.hidden) { open(false); btn.focus(); } });
  }

  function nav(links, current) {
    return `<nav>
  <div class="container">
    <a class="nav-logo" href="#hero"><span class="nav-wordmark">Fu<span class="accent-text">So</span></span></a>
    <ul id="navMenu">
      ${links.map(l => `<li><a href="#${l.id}">${l.nav}</a></li>`).join('')}
      <li class="nav-extras">
        <a class="nav-extras-social" href="https://www.linkedin.com/company/future-society-hub" target="_blank" rel="noopener" aria-label="FuSo on LinkedIn"><i class="ph-bold ph-linkedin-logo" aria-hidden="true"></i></a>
        <a class="nav-extras-social" href="https://mu.social/profile/fuso.eurosky.social" target="_blank" rel="noopener" aria-label="FuSo on BlueSky"><i class="ph-bold ph-butterfly" aria-hidden="true"></i></a>
        <button class="theme-switch" type="button" role="switch" aria-checked="false" aria-label="Dark mode" data-theme-toggle>
          <span class="theme-switch-track" aria-hidden="true"><span class="theme-switch-thumb"><i class="ph-bold ph-sun icon-sun" aria-hidden="true"></i><i class="ph-bold ph-moon icon-moon" aria-hidden="true"></i></span></span>
        </button>
      </li>
    </ul>
    ${switcher(current)}
    <a class="nav-social" href="https://www.linkedin.com/company/future-society-hub" target="_blank" rel="noopener" aria-label="FuSo on LinkedIn"><i class="ph-bold ph-linkedin-logo" aria-hidden="true"></i></a>
    <button class="nav-toggle" id="navToggle" aria-label="Toggle menu" aria-expanded="false" aria-controls="navMenu"><span></span><span></span><span></span></button>
  </div>
</nav>`;
  }

  function hero(h, bar) {
    let chain = '';
    if (h.chainText) chain = h.chainText;
    else if (h.chain) {
      const [first, ...rest] = h.chain.steps;
      chain = (h.chain.prefix ? h.chain.prefix + ' ' : '') + first + ' ' +
        rest.map(s => `<span class="chain-step"><span class="chain-arrow">&rsaquo;</span> ${s}</span>`).join(' ');
    }
    return `<div id="hero">
  <div class="hero-text">
    ${bar || ''}
    <p class="hero-label">${h.label || 'University of St.Gallen'}</p>
    <h1><span class="hero-line">Future</span> <span class="hero-line"><span class="accent-text">Society</span> Hub</span></h1>
    <p class="hero-slogan">where tech and society fuse</p>
    <p class="hero-sub">${h.sub}</p>
    ${chain ? `<p class="hero-sub hero-chain">${chain}</p>` : ''}
    <p class="hero-meta">${h.meta || 'Technology &nbsp;&times;&nbsp; Society'}</p>
  </div>
  <div class="hero-image"><div class="hero-logo"><img src="../assets/fuso-logo.svg" alt="FuSo logo"></div></div>
</div>`;
  }

  const intro = html => `<div class="intro-standalone"><div class="container grid"><div class="about-intro">
    <i class="ph-bold ph-caret-right intro-caret" aria-hidden="true"></i><p>${html}</p></div></div></div>`;

  const footer = () => `<footer>
  <div class="container">
    <div class="footer-logo">
      <img src="../assets/fuso-logo-white-green_thick_lines.svg" alt="FuSo logo">
      <div><p class="footer-wordmark">Future Society Hub</p><p class="footer-tagline">where tech and society fuse</p></div>
    </div>
    <img class="footer-hsg" loading="lazy" src="../assets/images/HSG_Logo_EN_RGB.png" alt="University of St.Gallen">
    <p class="footer-privacy">We measure visits with <a href="https://www.goatcounter.com/help/privacy" target="_blank" rel="noopener">GoatCounter</a>: cookieless and anonymous, storing no personal data. This page remembers the perspective you picked on your device only.</p>
  </div>
</footer>`;

  // ─── Section renderers ───
  const head = s => `<div class="focus-label"><p class="section-label">${s.label}</p></div>
    <div class="focus-intro"><h2>${s.title}</h2>${s.lede ? `<p class="you-lede">${s.lede}</p>` : ''}</div>`;
  const wrap = (s, inner, withHead = true) => `<section id="${s.id}"><div class="container"><div class="grid">${withHead ? head(s) : ''}${inner}</div></div></section>`;
  const unavailable = () => `<div class="participate-body"><p class="participate-contact">This part is loaded from the main site, which could not be reached. See it on <a href="../">futuresociety.ch</a>.</p></div>`;

  function pubsFor(spec) {
    if (!main.ok || !spec) return [];
    if (spec.focus) {
      const f = main.focus.find(x => x.num.trim() === spec.focus);
      return f ? f.pubs : [];
    }
    const out = [];
    spec.forEach(needle => {
      const n = needle.toLowerCase();
      main.allPubs.forEach(li => { if (li.textContent.toLowerCase().includes(n) && !out.includes(li)) out.push(li); });
    });
    return out;
  }

  function pubToggle(label, items) {
    if (!items.length) return '<div></div>';
    return `<div class="focus-publications">
      <button type="button" class="focus-pub-toggle" aria-expanded="false" onclick="toggleFocusPubs(this)">${label || 'More'}<i class="ph-bold ph-plus toggle-icon" aria-hidden="true"></i></button>
      <div class="focus-pub-body"><div class="focus-pub-inner"><ul class="focus-pub-list">${items.map(li => li.outerHTML).join('')}</ul></div></div>
    </div>`;
  }

  // Fills the last row so the grid's 1px black "gap lines" never show as an
  // empty black cell (cols = 3 unless the grid is two-up).
  const fillers = (n, cols) => '<div class="focus-card you-filler" aria-hidden="true"></div>'.repeat((cols - (n % cols)) % cols);
  const grid = (cards, cols) => `<div class="focus-grid${cols === 2 ? ' you-grid-2' : ''}">${cards.join('')}${fillers(cards.length, cols)}</div>`;

  const R = {
    split(s) {
      return wrap(s, `<div class="focus-label"><p class="section-label">${s.label}</p></div>
        <div class="about-headline"><h2>${s.title}</h2></div>
        <div class="about-body">${s.body.map(p => `<p>${p}</p>`).join('')}</div>
        ${s.wide ? `<div class="about-fullstack"><h3>${s.wide.title}</h3><p>${s.wide.text}</p></div>` : ''}`, false);
    },

    list(s) {
      const items = s.items.map((it, i) => `<div class="project-item${s.open === i ? ' open' : ''}">
        <div class="project-header" role="button" tabindex="0" aria-expanded="${s.open === i}">
          <span class="project-num">${String(i + 1).padStart(2, '0')}</span>
          <p class="project-title">${it.title}</p>
          <span class="project-toggle">+</span>
        </div>
        <div class="project-body"><div class="project-body-inner">${it.how}</div></div>
      </div>`).join('');
      return wrap(s, `<div class="projects-container"><div class="projects-list">${items}</div></div>`);
    },

    lines(s) {
      const lines = s.lines.map((l, i) => `<li class="you-line"><span class="way-num">${String(i + 1).padStart(2, '0')}</span><p>${l}</p></li>`).join('');
      return wrap(s, `<div class="projects-container"><ol class="you-lines">${lines}</ol></div>`);
    },

    cards(s) {
      const cards = s.cards.map(c => `<div class="focus-card">
        <p class="focus-num">${c.num}</p><h3>${c.title}</h3><p>${c.text}</p>${pubToggle(s.more, pubsFor(c.pubs))}
      </div>`);
      return wrap(s, grid(cards, s.cols || 3));
    },

    songs(s) {
      const cards = s.tracks.map(t => `<div class="focus-card you-track">
        <p class="focus-num">${t.num}</p><h3>${t.title}</h3><p>${t.text}</p>
        ${t.src ? `<audio controls preload="none" src="${t.src}"></audio>` : '<div></div>'}
      </div>`);
      return wrap(s, grid(cards, 3));
    },

    events(s) {
      if (!main.ok) return wrap(s, unavailable());
      const mark = item => {
        const c = item.cloneNode(true);
        if (s.highlight && s.highlight.test(c.textContent)) {
          c.classList.add('you-pick');
          const body = c.querySelector('.talk-body');
          if (body) body.insertAdjacentHTML('afterbegin', '<p class="you-pick-tag"><i class="ph-bold ph-star" aria-hidden="true"></i>Suggested for you</p>');
        }
        return c.outerHTML;
      };
      const empty = '<p class="you-note">No dates announced right now.</p>';
      const box = (heading, items, kind, ics) => `<div class="event-box">
        <p class="event-box-heading">${heading}</p>
        ${items.length ? `<div class="event-list ${kind}">${items.map(mark).join('')}</div>` : empty}
        ${ics && items.length ? '<button type="button" class="talk-ics-export"><i class="ph-bold ph-calendar-plus event-icon" aria-hidden="true"></i>Add talks to calendar (.ics)</button>' : ''}
      </div>`;

      const evs = upcoming(main.events), talks = upcoming(main.talks);
      if (s.merge) {
        const start = it => { const d = itemDates(it); return d ? d.start.getTime() : Infinity; };
        const all = evs.concat(talks).sort((a, b) => start(a) - start(b)).slice(0, s.limit || 3);
        return wrap(s, `<div class="events-body you-events-single">${box(s.heading || 'Upcoming', all, 'ev-list')}</div>`);
      }
      const boxes = {
        events: box(s.eventsHeading || 'Upcoming Events', evs, 'ev-list'),
        talks: box(s.talksHeading || 'FuSo Talks', talks, 'talk-list', true),
      };
      return wrap(s, `<div class="events-body"><div class="events-columns">${(s.order || ['events', 'talks']).map(k => boxes[k]).join('')}</div>
        <p class="event-contact">Reach out to us for more information: <a href="mailto:${MAIL}" class="event-link">${MAIL}</a></p></div>`);
    },

    team(s) {
      return wrap(s, '<div class="team-bricks-wrap"><div class="team-bricks" id="teamBricks"></div><div id="teamFormer"></div></div>');
    },

    experts(s) {
      const people = typeof teamMembers !== 'undefined' ? teamMembers : [];
      const cards = s.groups.map(g => {
        const found = g.names.map(n => people.find(m => m.name === n)).filter(Boolean);
        if (!found.length) return '';
        const li = found.map(m => `<li class="you-person">
          ${m.photo ? `<img src="${m.photo}" alt="" loading="lazy">` : '<span class="you-person-ph" aria-hidden="true"></span>'}
          <span><span class="you-person-name">${m.link ? `<a href="${m.link}" target="_blank" rel="noopener">${m.name}</a>` : m.name}</span>
          <span class="you-person-detail">${[TEAM_ROLES[m.role], typeof m.detail === 'string' ? m.detail : ''].filter(Boolean).join(' · ')}</span></span>
        </li>`).join('');
        return `<div class="focus-card"><p class="focus-num">Topic</p><h3>${g.topic}</h3><ul class="you-people">${li}</ul><div></div></div>`;
      }).filter(Boolean);
      return wrap(s, grid(cards, 3));
    },

    network(s) {
      const el = main.ok && main.doc.querySelector('#supporting-network .team-bricks-wrap');
      return wrap(s, el ? el.outerHTML : unavailable());
    },

    funders(s) {
      const el = main.ok && main.doc.querySelector('#funders .funders-wrap');
      return wrap(s, el ? el.outerHTML : unavailable());
    },

    pubs(s) {
      if (!main.ok) return wrap(s, unavailable());
      const groups = main.focus.filter(f => f.pubs.length).map(f => `<div class="you-pubgroup">
        <p class="focus-num">${f.num}</p><h3>${f.title}</h3>
        <ul class="focus-pub-list">${f.pubs.map(li => li.outerHTML).join('')}</ul></div>`).join('');
      const books = `<div class="you-pubgroup"><p class="focus-num">Books</p><h3>Monographs</h3><ul class="focus-pub-list">
        <li><i class="ph-bold ph-book pub-icon" aria-hidden="true"></i><span>AI and Law: How Automation is Changing the Law</span><span class="focus-pub-meta">Routledge · 2024</span></li>
        <li><i class="ph-bold ph-book pub-icon" aria-hidden="true"></i><span>Designing for Privacy and its Legal Framework</span><span class="focus-pub-meta">Springer · 2018</span></li>
      </ul></div>`;
      return wrap(s, `<div class="projects-container"><div class="you-pubs">${groups}${books}</div></div>`);
    },

    data(s) {
      if (!main.ok) return wrap(s, unavailable());
      const json = JSON.stringify(buildData(), null, 2);
      return wrap(s, `<div class="projects-container">
        <div class="you-data-actions">
          <button type="button" class="you-btn" data-you-copy><i class="ph-bold ph-copy" aria-hidden="true"></i><span>Copy JSON</span></button>
          <button type="button" class="you-btn" data-you-download><i class="ph-bold ph-download-simple" aria-hidden="true"></i><span>Download</span></button>
        </div>
        <pre class="you-data"><code id="youData">${escapeHtml(json)}</code></pre></div>`);
    },

    contact(s) {
      const subject = s.subject ? `?subject=${encodeURIComponent(s.subject)}` : '';
      const address = s.address === false ? '' : `<p style="margin-top:1rem;"><strong>University of St.Gallen</strong><br>
        Institute of Computer Science and Institute of Law and Economics<br>Rosenbergstrasse 30<br>St. Gallen, Switzerland</p>`;
      return wrap(s, `<div class="contact-label"><p class="section-label">${s.label}</p></div>
        <div class="contact-head"><h2>${s.title}</h2></div>
        <div class="contact-body">${s.body.map(p => `<p>${p}</p>`).join('')}${address}</div>
        <div class="contact-social">
          <a href="mailto:${MAIL}${subject}"><i class="ph-bold ph-envelope-simple" aria-hidden="true"></i><span>${MAIL}</span></a>
          <a href="https://www.linkedin.com/company/future-society-hub/" target="_blank" rel="noopener"><i class="ph-bold ph-linkedin-logo" aria-hidden="true"></i><span>LinkedIn</span></a>
          <a href="https://mu.social/profile/fuso.eurosky.social" target="_blank" rel="noopener"><i class="ph-bold ph-butterfly" aria-hidden="true"></i><span>Bluesky</span></a>
          <a href="https://soundcloud.com/interactions-research" target="_blank" rel="noopener"><i class="ph-bold ph-soundcloud-logo" aria-hidden="true"></i><span>SoundCloud</span></a>
        </div>`, false);
    },
  };

  function buildData() {
    const text = el => (el ? el.textContent.replace(/\s+/g, ' ').trim() : undefined);
    const dateOf = it => { const d = itemDates(it); return d ? d.start.toISOString().slice(0, 10) : text(it.querySelector('.talk-date')); };
    const pub = li => { const a = li.querySelector('a'); return { title: text(a || li.querySelector('span')), url: a ? a.href : null, venue: text(li.querySelector('.focus-pub-meta')) }; };
    const org = main.ld && main.ld['@graph'] ? main.ld['@graph'][0] : main.ld;
    return {
      source: new URL('../', location.href).href,
      generated: new Date().toISOString(),
      organization: org,
      focusAreas: main.focus.map(f => ({ number: f.num, title: f.title, description: f.text.trim(), publications: f.pubs.map(pub) })),
      upcomingEvents: upcoming(main.events).map(it => ({
        date: dateOf(it), name: text(it.querySelector('.event-name')), host: text(it.querySelector('.ev-host')),
        location: text(it.querySelector('.ph-map-pin') && it.querySelector('.ph-map-pin').parentElement),
        url: (it.querySelector('a.meta') || {}).href || null,
      })),
      upcomingTalks: upcoming(main.talks).map(it => ({
        date: dateOf(it), title: text(it.querySelector('.talk-title')), series: text(it.querySelector('.talk-kicker')),
        speaker: text(it.querySelector('.event-speaker')), details: text(it.querySelector('.event-meta-row')),
      })),
      team: (typeof teamMembers !== 'undefined' ? teamMembers : []).map(m => ({
        name: m.name, role: TEAM_ROLES[m.role] || m.role,
        title: typeof m.detail === 'string' ? m.detail : undefined,
        affiliation: typeof m.affiliation === 'string' ? m.affiliation : undefined,
        url: m.link, bio: m.bio && m.bio.en ? m.bio.en.replace(/&amp;/g, '&') : undefined,
      })),
      contact: { email: MAIL, address: 'University of St.Gallen, Rosenbergstrasse 30, St. Gallen, Switzerland' },
      llms: new URL('../llms.txt', location.href).href,
    };
  }

  // ─── Pages ───
  function renderPicker() {
    document.title = 'FuSo for you | Future Society Hub | University of St.Gallen';
    const last = PERSONAS.find(p => p.id === store.get());
    const bar = last ? `<p class="you-bar"><i class="ph-bold ph-clock-counter-clockwise" aria-hidden="true"></i>Last time: <strong>${last.label}</strong><a href="?as=${last.id}">Continue</a></p>` : '';
    const tile = p => `<a class="focus-card you-tile" href="?as=${p.id}">
      <p class="focus-num"><i class="ph-bold ph-${p.icon}" aria-hidden="true"></i>${p.tag ? 'For ' + p.tag : 'Lens'}</p>
      <h3>${p.label}</h3><p>${p.tile}</p>
      <p class="you-tile-go">Open<i class="ph-bold ph-arrow-right" aria-hidden="true"></i></p></a>`;
    const serious = PERSONAS.filter(p => p.group === 'serious');
    const creative = PERSONAS.filter(p => p.group === 'creative');
    const sections = [
      { id: 'choose', nav: 'Perspectives', label: 'Perspective', title: 'Choose your <span class="accent-text">perspective</span>' },
      { id: 'other', nav: 'Other lenses', label: 'Other lenses', title: 'Or try a different <span class="accent-text">lens</span>', lede: 'The same content, adapted for less conventional visitors.' },
      { id: 'standard', nav: 'Standard', label: 'Standard', title: 'No <span class="accent-text">tailoring</span>' },
    ];
    app.innerHTML = nav(sections, null) + hero({
      sub: 'This version of the site adapts its text and structure to you. Pick the perspective you are visiting from. You can switch at any time in the top bar.',
      meta: 'Personalized view',
    }, bar) +
      wrap(sections[0], grid(serious.map(tile), 2)) +
      wrap(sections[1], grid(creative.map(tile), 3)) +
      wrap(sections[2], `<div class="participate-body"><p class="participate-contact">The <a href="?as=standard">standard version</a> is the full site exactly as on the main page, with every section for every audience.</p></div>`) +
      footer();
    bindChrome();
  }

  function renderPersona(p) {
    document.title = `FuSo for ${p.tag || p.label.toLowerCase()} | Future Society Hub`;
    const bar = `<p class="you-bar"><i class="ph-bold ph-${p.icon}" aria-hidden="true"></i>Tailored for <strong>${p.tag || p.label}</strong><a href="./">All perspectives</a></p>`;
    const body = p.sections.map(s => (R[s.type] ? R[s.type](s) : '')).join('');
    app.innerHTML = nav(p.sections.filter(s => s.nav), p) + hero(p.hero, bar) + (p.intro ? intro(p.intro) : '') + body + footer();
    if (document.getElementById('teamBricks') && typeof renderTeam === 'function') renderTeam('en');
    bindChrome();
    bindContent();
  }

  // Standard: the main page's body, unchanged except that the EN/DE/FR switch
  // becomes the perspective switcher. Its inline script (projects, ways, team,
  // theme, nav, easter eggs) is re-run here, since scripts inserted via
  // innerHTML never execute.
  function renderStandard(p) {
    if (!main.ok) {
      location.replace('../' + location.hash);
      return;
    }
    const doc = main.doc;
    document.title = doc.title;
    const desc = doc.querySelector('meta[name="description"]');
    if (desc) document.querySelector('meta[name="description"]').setAttribute('content', desc.content);
    const lang = doc.querySelector('.lang-switch');
    if (lang) lang.outerHTML = switcher(p);
    const scripts = Array.from(doc.body.querySelectorAll('script'));
    const inline = scripts.filter(s => !s.src && (!s.type || s.type === 'text/javascript')).map(s => s.textContent);
    scripts.forEach(s => s.remove());
    app.innerHTML = doc.body.innerHTML;
    inline.forEach(code => {
      const s = document.createElement('script');
      s.textContent = code;
      document.body.appendChild(s);
    });
    bindSwitcher();
    if (location.hash && location.hash.indexOf('#participate-') !== 0) {
      const target = document.getElementById(location.hash.slice(1));
      if (target) target.scrollIntoView();
    }
  }

  // ─── Behaviour (persona and picker pages) ───
  function bindChrome() {
    bindSwitcher();

    // Light/dark toggle, as on the main site.
    (function () {
      const KEY = 'fuso-theme';
      const toggles = document.querySelectorAll('[data-theme-toggle]');
      const root = document.documentElement;
      const LABEL = { light: 'Switch to dark mode', dark: 'Switch to light mode' };
      function apply(theme) {
        if (theme === 'dark') root.setAttribute('data-theme', 'dark');
        else root.removeAttribute('data-theme');
        toggles.forEach(t => {
          if (t.getAttribute('role') === 'switch') t.setAttribute('aria-checked', String(theme === 'dark'));
          else { t.setAttribute('aria-pressed', String(theme === 'dark')); t.setAttribute('aria-label', LABEL[theme]); }
        });
      }
      apply(root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light');
      toggles.forEach(t => t.addEventListener('click', () => {
        const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        try { localStorage.setItem(KEY, next); } catch (e) {}
        apply(next);
      }));
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
        let stored = null;
        try { stored = localStorage.getItem(KEY); } catch (err) {}
        if (!stored) apply(e.matches ? 'dark' : 'light');
      });
    })();

    // Mobile nav.
    (function () {
      const toggle = document.getElementById('navToggle');
      const menu = document.getElementById('navMenu');
      if (!toggle || !menu) return;
      const close = () => { menu.classList.remove('open'); toggle.classList.remove('open'); toggle.setAttribute('aria-expanded', 'false'); };
      toggle.addEventListener('click', () => {
        const open = menu.classList.toggle('open');
        toggle.classList.toggle('open', open);
        toggle.setAttribute('aria-expanded', String(open));
      });
      menu.querySelectorAll('a').forEach(a => a.addEventListener('click', close));
    })();

    if (location.hash) {
      const target = document.getElementById(location.hash.slice(1));
      if (target) target.scrollIntoView();
    }
  }

  function bindContent() {
    // Accordions (same one-open-at-a-time behaviour as the main site).
    const toggle = header => {
      const item = header.closest('.project-item');
      const list = item.parentElement;
      list.querySelectorAll('.project-item').forEach(other => {
        const open = other === item ? !other.classList.contains('open') : false;
        other.classList.toggle('open', open);
        other.querySelector('.project-header').setAttribute('aria-expanded', String(open));
      });
    };
    app.addEventListener('click', e => { const h = e.target.closest('.project-header'); if (h) toggle(h); });
    app.addEventListener('keydown', e => {
      const h = e.target.closest('.project-header');
      if (h && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); toggle(h); }
    });

    // Funder logos that fail to load fall back to their alt text.
    app.querySelectorAll('.funder-logo').forEach(img => {
      const fallback = () => { const span = document.createElement('span'); span.className = 'funder-wordmark'; span.textContent = img.alt; img.replaceWith(span); };
      if (img.complete && !img.naturalWidth) fallback(); else img.addEventListener('error', fallback);
    });

    // Agent view: copy and download.
    const data = document.getElementById('youData');
    if (data) {
      app.querySelector('[data-you-copy]').addEventListener('click', e => {
        const label = e.currentTarget.querySelector('span');
        navigator.clipboard.writeText(data.textContent).then(() => { label.textContent = 'Copied'; }, () => { label.textContent = 'Copy failed'; });
        setTimeout(() => { label.textContent = 'Copy JSON'; }, 2000);
      });
      app.querySelector('[data-you-download]').addEventListener('click', () => {
        const url = URL.createObjectURL(new Blob([data.textContent], { type: 'application/json' }));
        const a = document.createElement('a');
        a.href = url; a.download = 'fuso.json';
        document.body.appendChild(a); a.click(); a.remove();
        setTimeout(() => URL.revokeObjectURL(url), 1000);
      });
    }
  }

  // Global, because the focus-card and team-bio toggles call it inline.
  window.toggleFocusPubs = window.toggleFocusPubs || function (btn) {
    const open = btn.parentElement.classList.toggle('open');
    btn.setAttribute('aria-expanded', String(open));
  };

  loadMain().then(() => {
    if (!persona) { renderPicker(); return; }
    store.set(persona.id);
    count('you-as-' + persona.id, 'Perspective: ' + persona.label);
    if (persona.id === 'standard') renderStandard(persona);
    else renderPersona(persona);
  });
})();
