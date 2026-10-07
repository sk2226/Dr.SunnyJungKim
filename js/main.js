/* Rendering logic — you should not need to edit this file.
   All content comes from data.js. */
(function () {
  const $ = (sel, root) => (root || document).querySelector(sel);
  const el = (tag, cls, html) => {
    const n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html != null) n.innerHTML = html;
    return n;
  };
  const esc = (s) => String(s == null ? "" : s)
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  const isFilled = (s) => s && !/^\[.*\]$/.test(String(s).trim()) && String(s).trim() !== "";
  // Keep obvious placeholders visible but flagged in amber so they are easy to spot.
  const ph = (s) => `<span class="placeholder" title="Placeholder — edit data.js">${esc(s)}</span>`;
  const val = (s) => (isFilled(s) ? esc(s) : ph(s));

  const page = document.body.dataset.page || "";

  /* ---------- Shared: header / nav / footer ---------- */
  const header = $("#site-header");
  if (header) {
    header.innerHTML = `
      <div class="wrap nav-row">
        <a class="brand" href="index.html">
          ${SITE.logoUrl ? `<img src="${SITE.logoUrl}" alt="lab logo" class="logo">` : ""}
          <span class="brand-text">${val(SITE.shortName)} <small>${esc(SITE.university)}</small></span>
        </a>
        <nav id="site-nav" aria-label="Main navigation">
          <a href="index.html" class="${page === "home" ? "active" : ""}">Home</a>
          <a href="research.html" class="${page === "research" ? "active" : ""}">Research</a>
          <a href="people.html" class="${page === "people" ? "active" : ""}">People</a>
          <a href="publications.html" class="${page === "publications" ? "active" : ""}">Publications</a>
          <a href="news.html" class="${page === "news" ? "active" : ""}">News</a>
          <a href="contact.html" class="${page === "contact" ? "active" : ""}">Contact</a>
        </nav>
        <button id="nav-toggle" aria-label="Toggle menu">☰</button>
      </div>`;
    $("#nav-toggle").addEventListener("click", () => header.classList.toggle("nav-open"));
  }
  const footer = $("#site-footer");
  if (footer) {
    const social = [];
    if (SITE.twitter) social.push(`<a href="${esc(SITE.twitter)}">X / Twitter</a>`);
    if (SITE.github) social.push(`<a href="${esc(SITE.github)}">GitHub</a>`);
    footer.innerHTML = `<div class="wrap footer-grid">
      <div>
        <strong>${val(SITE.labName)}</strong><br>
        ${esc(SITE.department)}, <a href="${esc(SITE.universityUrl)}">${esc(SITE.university)}</a><br>
        ${val(SITE.address)}
      </div>
      <div>
        <strong>Contact</strong><br>
        <a href="mailto:${esc(SITE.email)}">${val(SITE.email)}</a><br>
        ${social.join(" · ") || ""}
      </div>
      <div class="footer-fine">
        © ${new Date().getFullYear()} ${val(SITE.labName)} · Last updated ${val(SITE.lastUpdated)}
      </div>
    </div>`;
  }

  /* ---------- Home ---------- */
  if (page === "home") {
    $("#home-hero").innerHTML = `
      <div class="hero-text">
        <p class="kicker">${esc(SITE.department)} · ${esc(SITE.university)}</p>
        <h1>${val(SITE.labName)}</h1>
        <p class="tagline">${val(SITE.tagline)}</p>
        <p>${val(PROFESSOR.bio[0] || "")}</p>
        <div class="hero-actions">
          <a class="btn" href="research.html">Explore our research</a>
          <a class="btn ghost" href="people.html">Meet the team</a>
        </div>
      </div>
      <div class="hero-photo">
        ${PROFESSOR.photo
          ? `<img src="${PROFESSOR.photo}" alt="${esc(PROFESSOR.name)}">`
          : `<div class="photo-fallback">📷<br><span>Add a photo in data.js<br>(PROFESSOR.photo)</span></div>`}
      </div>`;
    const latest = NEWS.slice(0, 4);
    $("#home-news").innerHTML = `<h2>Latest news</h2>` +
      (latest.length
        ? `<ul class="news-list">` + latest.map((n) =>
            `<li><span class="news-date">${val(n.date)}</span><span>${val(n.text)}</span></li>`).join("") + `</ul>
            <a class="more" href="news.html">All news →</a>`
        : `<p class="placeholder">Add news items in data.js</p>`);
    $("#home-areas").innerHTML = `<h2>Research areas</h2><div class="card-grid">` +
      RESEARCH.areas.map((a) =>
        `<div class="card"><h3>${val(a.name)}</h3><p>${val(a.description)}</p></div>`).join("") +
      `</div><a class="more" href="research.html">All research →</a>`;
    $("#home-stats").innerHTML = OUTCOMES.stats.map((s) =>
      `<div class="stat"><span class="stat-value">${val(s.value)}</span><span class="stat-label">${val(s.label)}</span></div>`).join("");
    const pubsHome = PUBLICATIONS.slice(0, 3);
    $("#home-pubs").innerHTML = `<h2>Selected publications</h2>` +
      (pubsHome.length
        ? `<ul class="pub-list">` + pubsHome.map((p) =>
            `<li><span class="pub-title">${val(p.title)}</span><br>
             <span class="pub-meta">${val(p.authors)} · ${val(p.venue)} ${val(p.year)}</span></li>`).join("") +
          `</ul><a class="more" href="publications.html">All publications →</a>`
        : `<p class="placeholder">Add publications in data.js</p>`);
  }

  /* ---------- Research ---------- */
  if (page === "research") {
    $("#research-overview").innerHTML =
      `<h1>Research</h1><p class="lead">${val(RESEARCH.overview)}</p>`;
    $("#research-areas").innerHTML = `<h2>Research areas</h2><div class="card-grid">` +
      RESEARCH.areas.map((a, i) =>
        `<div class="card"><span class="badge">Area ${i + 1}</span><h3>${val(a.name)}</h3><p>${val(a.description)}</p></div>`).join("") +
      `</div>`;
    const project = (p, past) => `
      <article class="project">
        ${p.image ? `<img class="project-img" src="${p.image}" alt="">` : ""}
        <div class="project-body">
          <div class="project-head">
            <h3>${val(p.title)}</h3>
            <span class="badge ${past ? "badge-past" : "badge-current"}">${past ? "Past project" : "Current project"}</span>
          </div>
          <p class="pub-meta">${val(p.period)} · ${val(p.funding)}</p>
          <p>${val(p.description)}</p>
          ${(p.outcomes || []).length ? `<p class="outcomes"><strong>Outcomes:</strong> ${p.outcomes.map(val).join(" · ")}</p>` : ""}
        </div>
      </article>`;
    $("#research-current").innerHTML = `<h2>Current projects</h2>` +
      (RESEARCH.current.length ? RESEARCH.current.map((p) => project(p, false)).join("")
        : `<p class="placeholder">Add current projects in data.js (RESEARCH.current)</p>`);
    $("#research-past").innerHTML = `<h2>Past projects</h2>` +
      (RESEARCH.past.length ? RESEARCH.past.map((p) => project(p, true)).join("")
        : `<p class="placeholder">Add past projects in data.js (RESEARCH.past)</p>`);
  }

  /* ---------- People ---------- */
  if (page === "people") {
    $("#people-pi").innerHTML = `
      <div class="pi-photo">
        ${PROFESSOR.photo ? `<img src="${PROFESSOR.photo}" alt="${esc(PROFESSOR.name)}">`
          : `<div class="photo-fallback">📷<br><span>Add photo in data.js</span></div>`}
      </div>
      <div class="pi-body">
        <h1>${val(PROFESSOR.name)}</h1>
        <p class="kicker">${val(PROFESSOR.title)} · ${esc(SITE.department)}</p>
        ${PROFESSOR.bio.map((b) => `<p>${val(b)}</p>`).join("")}
        ${PROFESSOR.education.length ? `<h3>Education</h3><ul class="plain">` +
          PROFESSOR.education.map((e) => `<li>${val(e.degree)}, ${val(e.school)} (${val(e.year)})</li>`).join("") + `</ul>` : ""}
        <p class="contact-line">
          ${PROFESSOR.email ? `✉ <a href="mailto:${esc(PROFESSOR.email)}">${val(PROFESSOR.email)}</a>` : ""}
          ${PROFESSOR.office ? ` · 📍 ${val(PROFESSOR.office)}` : ""}
          ${PROFESSOR.scholar ? ` · <a href="${esc(PROFESSOR.scholar)}">Google Scholar</a>` : ""}
          ${PROFESSOR.cv ? ` · <a href="${esc(PROFESSOR.cv)}">CV (PDF)</a>` : ""}
        </p>
      </div>`;
    const personCard = (m) => `
      <div class="person card">
        ${m.photo ? `<img class="avatar" src="${m.photo}" alt="">`
          : `<div class="avatar avatar-fallback">${esc((m.name || "?").trim()[0])}</div>`}
        <div>
          <h3>${m.website ? `<a href="${esc(m.website)}">${val(m.name)}</a>` : val(m.name)}</h3>
          <p class="pub-meta">${val(m.role)}${m.since ? ` · since ${val(m.since)}` : ""}</p>
          ${m.topic ? `<p>${val(m.topic)}</p>` : ""}
        </div>
      </div>`;
    const section = (title, arr, hint) => arr && arr.length
      ? `<h2>${title}</h2><div class="card-grid people-grid">${arr.map(personCard).join("")}</div>`
      : `<h2>${title}</h2><p class="placeholder">${hint}</p>`;
    $("#people-current").innerHTML =
      section("Current members", PEOPLE.students, "Add students in data.js (PEOPLE.students)") +
      (PEOPLE.staff.length ? section("Staff", PEOPLE.staff) : "") +
      (PEOPLE.visitors.length ? section("Visitors", PEOPLE.visitors) : "");
    $("#people-alumni").innerHTML = `<h2>Alumni</h2>` +
      (PEOPLE.alumni.length
        ? `<ul class="alumni-list">` + PEOPLE.alumni.map((a) =>
            `<li><strong>${val(a.name)}</strong> — ${val(a.role)} · ${val(a.now)}</li>`).join("") + `</ul>`
        : `<p class="placeholder">Add alumni in data.js (PEOPLE.alumni)</p>`);
  }

  /* ---------- Publications ---------- */
  if (page === "publications") {
    const sorted = [...PUBLICATIONS].sort((a, b) => String(b.year).localeCompare(String(a.year)));
    const byYear = {};
    sorted.forEach((p) => (byYear[p.year] = byYear[p.year] || []).push(p));
    const linksHtml = (p) => {
      const bits = [];
      if (p.links && isFilled(p.links.pdf)) bits.push(`<a href="${esc(p.links.pdf)}">PDF</a>`);
      if (p.links && isFilled(p.links.code)) bits.push(`<a href="${esc(p.links.code)}">Code</a>`);
      if (p.links && isFilled(p.links.doi)) bits.push(`<a href="${esc(p.links.doi)}">DOI</a>`);
      return bits.length ? `<span class="pub-links">${bits.join(" · ")}</span>` : "";
    };
    $("#pubs-by-year").innerHTML = Object.keys(byYear).map((year) => `
      <section class="pub-year"><h2>${isFilled(year) ? esc(year) : "[Year]"}</h2>
        <ul class="pub-list">
          ${byYear[year].map((p) => `<li>
            <span class="pub-title">${val(p.title)}</span>
            ${isFilled(p.award) ? `<span class="badge badge-award">🏆 ${esc(p.award)}</span>` : ""}
            <br><span class="pub-meta">${val(p.authors)}</span><br>
            <span class="pub-venue">${val(p.venue)}</span> ${linksHtml(p)}
            ${isFilled(p.abstract) ? `<details><summary>Abstract</summary><p>${val(p.abstract)}</p></details>` : ""}
          </li>`).join("")}
        </ul>
      </section>`).join("") || `<p class="placeholder">Add publications in data.js (PUBLICATIONS)</p>`;
    $("#pubs-outcomes").innerHTML = `
      <div class="stats-row">${OUTCOMES.stats.map((s) =>
        `<div class="stat"><span class="stat-value">${val(s.value)}</span><span class="stat-label">${val(s.label)}</span></div>`).join("")}</div>
      ${OUTCOMES.grants.length ? `<h2>Grants &amp; funding</h2><ul class="plain">` +
        OUTCOMES.grants.map((g) => `<li><strong>${val(g.title)}</strong> — ${val(g.funder)}, ${val(g.amount)}, ${val(g.period)} (${val(g.role)})</li>`).join("") + `</ul>` : ""}
      ${OUTCOMES.talks.length ? `<h2>Invited talks</h2><ul class="plain">` +
        OUTCOMES.talks.map((t) => `<li><strong>${val(t.title)}</strong> — ${val(t.event)}, ${val(t.date)}</li>`).join("") + `</ul>` : ""}
      ${OUTCOMES.software.length ? `<h2>Software &amp; datasets</h2><ul class="plain">` +
        OUTCOMES.software.map((s) => `<li><strong>${s.url ? `<a href="${esc(s.url)}">${esc(s.name)}</a>` : val(s.name)}</strong> — ${val(s.description)}</li>`).join("") + `</ul>` : ""}`;
  }

  /* ---------- News ---------- */
  if (page === "news") {
    const sorted = [...NEWS].sort((a, b) => String(b.date).localeCompare(String(a.date)));
    $("#news-list").innerHTML = sorted.length
      ? `<ul class="news-list big">` + sorted.map((n) =>
          `<li><span class="news-date">${val(n.date)}</span><span>${val(n.text)}</span></li>`).join("") + `</ul>`
      : `<p class="placeholder">Add news items in data.js (NEWS)</p>`;
  }

  /* ---------- Contact ---------- */
  if (page === "contact") {
    $("#contact-info").innerHTML = `
      <h1>Contact</h1>
      <p class="lead">We are always happy to hear from students and collaborators.</p>
      <div class="contact-grid">
        <div class="card"><h3>📍 Address</h3><p>${val(SITE.address)}</p></div>
        <div class="card"><h3>✉ Email</h3><p><a href="mailto:${esc(SITE.email)}">${val(SITE.email)}</a></p></div>
        <div class="card"><h3>🧑‍🏫 Professor</h3><p>${val(PROFESSOR.name)}<br><a href="mailto:${esc(PROFESSOR.email)}">${val(PROFESSOR.email)}</a></p></div>
        <div class="card"><h3>🤝 Joining the lab</h3><p>[Describe how students can join: openings, application process, what to include in an email.]</p></div>
      </div>`;
  }
})();
