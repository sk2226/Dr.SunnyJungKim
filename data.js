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
   headline: "Our lab advances innovative digital health communication research through theory-informed and evidence-based approaches. We train students to leverage emerging media technologies, computational and statistical methods, and interdisciplinary perspectives to understand and predict health behaviors and outcomes, with the goal of advancing public health.",
  bio: [
    "My research focuses on translating theories and principles from communication and psychology into innovative research approaches, drawing on social and behavioral science methodologies to examine communication processes that explain public health phenomena and influence health behavior. My work particularly focuses on cancer prevention and control and substance use and addiction. In conducting this research, I enjoy leveraging media technologies and emerging innovations, along with statistical and linguistic analyses, to predict health outcomes and understand the mechanisms underlying health behaviors and communication processes.", 
    "During my predoctoral and postdoctoral training at Cornell and Dartmouth, I was trained by and collaborated with scholars across psychology, health communication, text analysis, quantitative and qualitative methodologies, statistics, psychiatry, population science, and preventive oncology. This interdisciplinary training has shaped the breadth of methodological and research skills I bring to my work and, in turn, to my mentorship. I train graduate students in these skills, helping them develop the interdisciplinary perspectives and methodological expertise needed to pursue their own research questions.",
  ],
  education: [
    {degree: "Ph.D. and M.S. in Communication", school: "Cornell University"},
    {degree: "M.A. in Media, Culture, and Communication", school: "New York University"},
   ],
};

/* ---------------- NEWS ---------------- */
const NEWS = [
  { date: "2026-09-14", text: "Drs. Tossas and Kim Receive ACS Grant to Launch Cancer Health Engagement and Action Research Center", website:"https://blogs.vcu.edu/sbs/2026/09/14/new-grant-awarded-for-cancer-health-engagement-and-action-research-center/ "},
  { date: "2026-09-01", text: "Two Ph.D. students, Lindsey Debosik and Emiolakan Oyeneyin join the lab" },
  // add more: { date: "...", text: "..." },
];

/* ---------------- RESEARCH ---------------- */
const RESEARCH = {
  overview:
    "Our lab advances innovative and rigorous digital health communication research to address complex public health challenges. We investigate how communication processes shape health knowledge, attitudes, decisions, and behaviors; what individual, social, and contextual factors explain or predict health outcomes; and how effective communication strategies can be translated and scaled to improve public health. We integrate communication theory, behavioral and social science, computational methods, statistical and linguistic analyses, and emerging digital technologies to examine message-level features and broader communication patterns, develop and evaluate evidence-based interventions, and identify mechanisms of change. Our research focuses on cancer prevention and survivorship, substance use and addiction, and other pressing public health concerns, with the goal of advancing both scientific understanding and real-world impact.",
  areas: [
    { name: "Digital Innovation", description: "Leveraging digital media technologies through theoretically rigorous and methodologically sound research", value: "#AI" },
    { name: "Health Analytics", description: " Identifying underlying mechanisms and predicting public health outcomes through data-driven research" },
    { name: "Communication Science", description: " Examining micro- and macro-level message features and communication strategies to inform translation and scale-up" },
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
    { name: "Farnese Motto", role: "Ph.D. Candidate", topic: "Examining patient-centered communication in Medicaid-covered doula prenatal visits: A computational mixed-methods study", since: "2023", photo: "motto.jpg", website: "https://www.linkedin.com/in/farnesemotto/" },
    { name: "Afua Twumasi", role: "Ph.D. Student", topic: "Social network structure and processes influencing colorectal cancer screening intentions among African American men: An explanatory sequential mixed-methods study", since: "2024", photo: "twumasi.jpg", website: "https://www.linkedin.com/in/afua-twumasi-25b75186/"},
    { name: "Emiolakan Oyeneyin", role: "Ph.D. Student", topic: " Evaluating low-dose computed tomography (LDCT) lung cancer screening status and vaping dynamics among Black Adults", since: "2025", photo: "Oyeneyin.jpg", website: "" },
    { name: "Lindsey Debosik", role: "Ph.D. Student", topic: "Intimate partner violence and its impact on non-communicable disease behaviors; community-engaged research; prevention science", since: "2026", photo: "Debosik.jpg", website: "" },
    // copy a block to add more; an empty array [] removes this section
  ],
  visitors: [],   // optional: { name, role, affiliation, period }
  staff: [],      // optional: { name, role, topic }
  alumni: [
       { name: "Sarah Talley", role: "MPH, 2026", now: "Capstone Project: Factors influencing parental intent to vaccinate children against non-mandated vaccines: Influenza, COVID-19, and HPV" },
       { name: "Emily Edwards", role: "Ph.D. 2025", now: "Now: Ph.D. Student in the Department of Health Administration at Virginia Commonwealth University" },
       { name: "Sarah Gillaspie", role: "MPH, 2023", now: "Now: Hospital Pharmacist at UVA Health" },
       { name: "Viktor Clark, PhD", role: "Ph.D. 2023", now: "Now: Research Assistant Professor at the University of Rochester Medical Center"},
       { name: "Hannah Ming, PhD, MPH, CHES", role: "Ph.D. 2022", now: "Now: Lead Prevention Specialist at U.S. Army Intelligence and Security Command"},
   
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
