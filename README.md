# Research Lab Website

A clean, multi-page static website for showcasing your research lab:
**Home · Research · People · Publications & Outcomes · News · Contact**

No build tools, no framework, no database. Plain HTML + one stylesheet + one
JavaScript file. It works offline, on GitHub Pages, or on any web server.

---

## 1. Edit your content (the ONLY file you need to touch)

Open **`data.js`** in any text editor. Everything on the website is driven by
this file. Anything shown in `[BRACKETS]` on the site is a placeholder —
amber-highlighted on the page so you can spot what's left to fill in.

| What to edit | Where in `data.js` |
|---|---|
| Lab name, university, address, email, social links | `SITE` |
| Your name, title, bio, education, photo, CV link | `PROFESSOR` |
| Announcements (new paper, new student, grant) | `NEWS` |
| Research overview + research areas | `RESEARCH.overview`, `RESEARCH.areas` |
| Current & past projects (title, funding, outcomes) | `RESEARCH.current`, `RESEARCH.past` |
| Students, staff, visitors, alumni | `PEOPLE` |
| Publications (grouped by year automatically) | `PUBLICATIONS` |
| Stats, grants, invited talks, software/datasets | `OUTCOMES` |

Tips:
- **Add an item**: copy an existing `{ ... }` block, paste it, and change the text.
- **Remove a section**: set the array to empty, e.g. `visitors: []`.
- **Photos**: put image files in an `assets/` folder and reference them like
  `"assets/prof.jpg"`, or paste any public image URL.
- **Links**: fill `links: { pdf: "...", code: "...", doi: "..." }` on a
  publication — empty ones are hidden automatically.
- You should NOT need to edit `index.html`, `js/main.js`, or `css/style.css`
  (colors and fonts can be tweaked in `css/style.css` if you want).

## 2. Preview locally

Just double-click `index.html` — it opens in your browser. No server needed.

## 3. Publish for free with GitHub Pages

1. Create a free account at [github.com](https://github.com) (if you don't have one).
2. Create a new repository, e.g. `my-lab-website` (or `yourusername.github.io` for a personal site).
3. Upload **all files and folders** in this package (via the web uploader or `git push`).
4. Go to **Settings → Pages**, choose branch `main` and folder `/ (root)`, click Save.
5. Your site is live in 1–2 minutes at:
   - `https://yourusername.github.io/my-lab-website/`
   - or `https://yourusername.github.io/` if you used the `.github.io` repo name.

Alternatives that work the same way with these plain files:
**Netlify Drop** (drag-and-drop the folder at app.netlify.com/drop),
**Cloudflare Pages**, or your university's personal web space
(often `https://pages.university.edu/~yourname/` — just upload via SFTP).

## 4. Optional: register a custom domain

On GitHub Pages: Settings → Pages → Custom domain, then add a CNAME record
pointing to `yourusername.github.io` at your domain registrar.

## 5. File structure

```
lab-website/
├── index.html          Home
├── research.html       Research overview, areas, current & past projects
├── people.html         Professor, students, staff, visitors, alumni
├── publications.html   Publications by year + grants, talks, software, stats
├── news.html           All news items
├── contact.html        Address, email, how to join
├── data.js             ★ ALL CONTENT LIVES HERE — edit this
├── css/
│   └── style.css       Styles (colors, spacing, mobile layout)
├── js/
│   └── main.js         Rendering logic (no need to edit)
└── assets/             (create this; put photos, CV PDF, logos here)
```

## 6. Checklist of placeholders to fill in

- [ ] `SITE`: lab name, short name, tagline, university, department, address, email
- [ ] `PROFESSOR`: name, title, photo, email, office, CV link, Google Scholar link, bio, education
- [ ] `NEWS`: at least a few dated items
- [ ] `RESEARCH`: overview paragraph, 2–4 research areas
- [ ] `RESEARCH.current` / `RESEARCH.past`: project titles, funders, periods, outcomes
- [ ] `PEOPLE`: current students (with roles/topics), alumni and where they are now
- [ ] `PUBLICATIONS`: your real papers (title, authors, venue, year, links)
- [ ] `OUTCOMES`: headline stats, grants, invited talks, software/datasets
- [ ] `contact.html` "Joining the lab" card text (in `js/main.js`, contact section) — describe your application process

Remember: anything still shown in amber on the site is an unfilled placeholder.
