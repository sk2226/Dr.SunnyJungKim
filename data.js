/* ============================================================
   LAB WEBSITE — SINGLE EDITING FILE
   Edit ONLY this file (data.js) to update the whole website.
   Anything wrapped in [BRACKETS] is a PLACEHOLDER you must replace.
   Delete unused array items, or add more by copying a { } block.
   ============================================================ */

const SITE = {
  labName: "Digital Health Communication",
  shortName: "Digital Health Communication Lab",
  tagline: "Innovative & Rigorous Digital Health Communication Research for Public Health",
  university: "Dr. Sunny Jung Kim",
  department: "",
  universityUrl: "https://sph.vcu.edu/about/portfolio/details/sjkim2/",
  logoUrl: "dhc_Logo1.png",               // optional: URL or local path to your lab logo
  address: "Richmond VA, USA",
  email: "eHealth@vcu.edu",
  twitter: "https://x.com/SunnyJungKim",               // e.g. "https://x.com/yourhandle" — leave "" to hide
  github: "",                // e.g. "https://github.com/yourlab" — leave "" to hide
  lastUpdated: "October 2026",
};

const PROFESSOR = {
  name: "Prof. Sunny Jung Kim",
  title: "Associate Professor (tenured)",
  pronouns: "",              // optional
  photo: "sunny jung kim.jpg",                 // URL or local path to a headshot, e.g. "assets/prof.jpg"
  office: "OCS 4th FL",
  email: "sjkim2@vcu.edu",
  cv: "",                    // link to CV PDF, e.g. "assets/cv.pdf" — leave "" to hide
  scholar: "https://scholar.google.com/citations?user=d1Ie2OEAAAAJ&hl=en",               // Google Scholar URL
  bio: 
    "Our lab advances innovative digital health communication research through theory-informed and evidence-based approaches. We train students to leverage emerging media technologies, computational and statistical methods, and interdisciplinary perspectives to understand and predict health behaviors and outcomes, with the goal of advancing public health.",
    "My research focuses on translating theories and principles from communication and psychology into innovative research approaches, drawing on social and behavioral science methodologies to examine communication processes that explain public health phenomena and influence health behavior. My work particularly focuses on cancer prevention and control and substance use and addiction. In conducting this research, I enjoy leveraging media technologies and emerging innovations, along with statistical and linguistic analyses, to predict health outcomes and understand the mechanisms underlying health behaviors and communication processes.", 
     "During my predoctoral and postdoctoral training at Cornell and Dartmouth, I was trained by and collaborated with scholars across psychology, health communication, text analysis, quantitative and qualitative methodologies, statistics, psychiatry, population science, and preventive oncology. This interdisciplinary training has shaped the breadth of methodological and research skills I bring to my work and, in turn, to my mentorship. I train graduate students in these skills, helping them develop the interdisciplinary perspectives and methodological expertise needed to pursue their own research questions.",
  ,
  education: 
    { degree: "Ph.D. and M.S. in Communication", school: "Cornell University"},
    { degree: "M.A. in Media, Culture, and Communication", school: "New York University"},
  
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
    { name: "Farnese Motto", role: "Ph.D. Candidate", topic: "[Thesis topic]", since: "[YYYY]", photo: "motto.jpg", website: "" },
    { name: "Afua Twumasi", role: "Ph.D. Student", topic: "[Project topic]", since: "[YYYY]", photo: "", website: "" },
    { name: "Emiolakan Oyeneyin", role: "Ph.D. Student", topic: "[Project topic]", since: "[YYYY]", photo: "", website: "" },
    { name: "Lindsey Debosik", role: "Ph.D. Student", topic: "[Project topic]", since: "[YYYY]", photo: "", website: "" },
    // copy a block to add more; an empty array [] removes this section
  ],
  visitors: [],   // optional: { name, role, affiliation, period }
  staff: [],      // optional: { name, role, topic }
  alumni: 
    { name: "[Alumni Name]", role: "[Ph.D. 2023]", now: "[Now: Postdoc at University X / Engineer at Company Y]" },
       { name: "[Alumni Name]", role: "[Ph.D. 2023]", now: "[Now: Postdoc at University X / Engineer at Company Y]" },
       { name: "[Alumni Name]", role: "[Ph.D. 2023]", now: "[Now: Postdoc at University X / Engineer at Company Y]" },
       { name: "[Alumni Name]", role: "[Ph.D. 2023]", now: "[Now: Postdoc at University X / Engineer at Company Y]" },
    // copy a block to add more; an empty array [] removes this section
  
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
