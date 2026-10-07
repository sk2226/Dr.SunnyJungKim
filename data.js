/* ============================================================
   LAB WEBSITE — SINGLE EDITING FILE
   Edit ONLY this file (data.js) to update the whole website.
   Anything wrapped in [BRACKETS] is a PLACEHOLDER you must replace.
   Delete unused array items, or add more by copying a { } block.
   ============================================================ */

const SITE = {
  labName: "[Digital Health Communication]",
  shortName: "[Digital Health Communication Lab]",
  tagline: "[One-line description of what your lab studies, e.g. 'Machine learning for healthcare']",
  university: "[University Name]",
  department: "[Department Name]",
  universityUrl: "https://[university-website.edu]",
  logoUrl: "",               // optional: URL or local path to your lab logo
  address: "[Building & Room, Street Address, City, Country]",
  email: "[lab-email@university.edu]",
  twitter: "",               // e.g. "https://x.com/yourhandle" — leave "" to hide
  github: "",                // e.g. "https://github.com/yourlab" — leave "" to hide
  lastUpdated: "[Month Year]",
};

const PROFESSOR = {
  name: "[Prof. First Last]",
  title: "[Professor / Associate Professor]",
  pronouns: "",              // optional
  photo: "",                 // URL or local path to a headshot, e.g. "assets/prof.jpg"
  office: "[Building, Room 000]",
  email: "[professor@university.edu]",
  cv: "",                    // link to CV PDF, e.g. "assets/cv.pdf" — leave "" to hide
  scholar: "",               // Google Scholar URL
  bio: [
    "[Replace with a short 2–3 sentence bio. Who are you, what do you study, and what methods do you use?]",
    "[Optional second paragraph: prior positions, PhD institution, and anything else you want students to know.]",
  ],
  education: [
    { degree: "[Ph.D. in Field]", school: "[University]", year: "[YYYY]" },
    { degree: "[B.S. in Field]", school: "[University]", year: "[YYYY]" },
  ],
};

/* ---------------- NEWS ---------------- */
const NEWS = [
  { date: "[YYYY-MM-DD]", text: "[Recent highlight, e.g. 'Our paper was accepted to [Conference Name]']" },
  { date: "[YYYY-MM-DD]", text: "[Another item, e.g. 'Welcome new Ph.D. student [Name]' or 'Received [Grant] funding']" },
  // add more: { date: "...", text: "..." },
];

/* ---------------- RESEARCH ---------------- */
const RESEARCH = {
  overview:
    "[1–2 paragraphs describing the lab's mission and research themes. What big questions do you tackle? What approaches do you use?]",
  areas: [
    { name: "[Research Area 1]", description: "[2–3 sentences on this theme and its goals.]" },
    { name: "[Research Area 2]", description: "[2–3 sentences on this theme.]" },
    { name: "[Research Area 3]", description: "[2–3 sentences on this theme.]" },
  ],
  current: [
    {
      title: "[Current Project Title]",
      area: "[Related research area]",
      period: "[2025–2028]",
      funding: "[Funding source, e.g. NSF Grant #000000 / University startup]",
      image: "",   // optional image URL
      description:
        "[What the project does, its approach, and expected outcomes. 2–4 sentences.]",
      outcomes: ["[Key outcome or milestone 1]", "[Key outcome or milestone 2]"],
    },
    // add more current projects by copying this block
  ],
  past: [
    {
      title: "[Past Project Title]",
      period: "[2019–2024]",
      funding: "[Funding source]",
      image: "",
      description: "[Summary of the completed project and its final outcome.]",
      outcomes: ["[Result, e.g. 'Published 5 papers', 'Tool released: link]"],
    },
    // add more past projects by copying this block
  ],
};

/* ---------------- PEOPLE ---------------- */
const PEOPLE = {
  students: [
    { name: "[Student Name]", role: "[Ph.D. Student]", topic: "[Thesis topic]", since: "[YYYY]", photo: "", website: "" },
    { name: "[Student Name]", role: "[M.S. Student]", topic: "[Project topic]", since: "[YYYY]", photo: "", website: "" },
    { name: "[Student Name]", role: "[Undergraduate Researcher]", topic: "[Project topic]", since: "[YYYY]", photo: "", website: "" },
    // copy a block to add more; an empty array [] removes this section
  ],
  visitors: [],   // optional: { name, role, affiliation, period }
  staff: [],      // optional: { name, role, topic }
  alumni: [
    { name: "[Alumni Name]", role: "[Ph.D. 2023]", now: "[Now: Postdoc at University X / Engineer at Company Y]" },
    // copy a block to add more; an empty array [] removes this section
  ],
};

/* ---------------- PUBLICATIONS & OUTCOMES ---------------- */
/* type: "conference" | "journal" | "workshop" | "preprint" | "other" */
const PUBLICATIONS = [
  {
    year: "[YYYY]",
    type: "conference",
    authors: "[A. Author], [B. Author], [Prof. Name]*",   // * = your lab's author
    title: "[Full Paper Title]",
    venue: "[Conference/Journal Name]",
    award: "",        // e.g. "Best Paper Award" — leave "" to hide
    links: { pdf: "", code: "", doi: "" },   // fill any you have; empty ones are hidden
    abstract: "[Optional: 2–3 sentence abstract. Leave '' to hide.]",
  },
  // copy this block to add more publications (they are grouped by year automatically)
];

const OUTCOMES = {
  stats: [
    { label: "[Publications]", value: "[##]" },
    { label: "[Grants funded]", value: "[##]" },
    { label: "[Ph.D. graduates]", value: "[##]" },
    { label: "[Total funding]", value: "[$ #.#M]" },
  ],
  grants: [
    { title: "[Grant / Award Title]", funder: "[Agency]", amount: "[$ ###,###]", period: "[YYYY–YYYY]", role: "[PI / Co-PI]" },
    // copy to add more; empty array [] hides this section
  ],
  talks: [
    { title: "[Invited talk title]", event: "[Event / Venue]", date: "[Month YYYY]" },
  ],
  software: [
    { name: "[Tool / Dataset Name]", description: "[What it does]", url: "" },
  ],
};
