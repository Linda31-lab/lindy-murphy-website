export const site = {
  name: "Lindy Murphy",
  url: "https://lindymurphy.com",
  role: "Director, Organic Discovery · AI Ambassador",
  email: "lindymurphy3@gmail.com",
  github: "https://github.com/Linda31-lab",
  linkedin: "https://www.linkedin.com/in/lindy-murphy-44192750",
  /**
   * HTML-tag content from Google Search Console. You can also set
   * GOOGLE_SITE_VERIFICATION in the environment instead of editing this.
   */
  googleSiteVerification: "",
  title: "Lindy Murphy: Enterprise organic discovery, with practical AI enablement.",
  description:
    "Organic discovery leader with enterprise experience at Taxwell, TaxAct, and JOANN. I lead SEO, content, search, and analytics work, and help teams adopt useful AI workflows.",
  keywords: [
    "Lindy Murphy",
    "Organic Discovery",
    "Enterprise SEO",
    "SEO",
    "Content Strategy",
    "AI Enablement",
    "Technical SEO",
    "On-site Search",
    "Search Leadership",
  ],
};

export const navLinks = [
  { href: "#experience", label: "Experience" },
  { href: "#expertise", label: "Expertise" },
  { href: "#about", label: "About" },
  { href: "#education", label: "Education" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
] as const;

export const experience = [
  {
    title: "Director, Organic Discovery",
    company: "Taxwell",
    dates: "July 2026 to Present",
    summary:
      "Lead enterprise organic discovery strategy across TaxAct, Drake Software, and 1040.com, helping customers find and trust the brands wherever they search for answers.",
    highlights: [
      "Search strategy across traditional search, AI assistants, communities, and review platforms",
      "Technical SEO, content strategy, reputation, analytics, and cross-functional leadership",
      "AI ambassador helping teams test and adopt useful workflows",
    ],
  },
  {
    title: "SEO Manager",
    company: "TaxAct",
    dates: "May 2024 to July 2026",
    summary:
      "Executed a comprehensive SEO strategy aligned with business goals and partnered across content, development, paid search, leadership, and agency teams.",
    highlights: [
      "Owned roadmap execution across on-page, technical, internal linking, backlinks, and content",
      "Conducted keyword research, competitive analysis, site audits, and performance reporting",
      "Planned and evaluated SEO tests while advocating for search across internal teams",
    ],
  },
  {
    title: "Lead Digital Optimization, SEO & Search Specialist",
    company: "JOANN",
    dates: "March 2019 to May 2024",
    summary:
      "Led SEO, on-site search, taxonomy, reviews, customer feedback, and experimentation for a large enterprise ecommerce business.",
    highlights: [
      "Managed a team, vendors, and an agency across a broad optimization portfolio",
      "Improved product discoverability through taxonomy, synonyms, redirects, navigation, and sorting",
      "Turned Google analytics and search data into reporting and recommendations for business teams",
    ],
    note: "Previously held digital optimization and ecommerce content roles at JOANN beginning in 2016.",
  },
  {
    title: "Assistant Digital Operations Manager",
    company: "HSN",
    dates: "July 2015 to November 2016",
    summary:
      "Connected digital art direction and site production, managed multiple content systems, and coordinated accurate publishing across web, Android, and iOS.",
    highlights: [
      "Recognized with a Vision Award for adaptability and cross-team collaboration",
      "Built an early foundation in enterprise content operations and process improvement",
    ],
  },
  {
    title: "Earlier career: teaching & recruiting",
    company: "EF Education First · HSN",
    dates: "2013 to 2015",
    summary:
      "Built the communication and adaptability skills that still shape how I lead, coach, and work across different kinds of teams.",
    highlights: [
      "Taught written and spoken English to students and adults in Jinhua, China",
      "Managed behavioral interviews, high-volume recruiting, and candidate communication at HSN",
    ],
  },
] as const;

export const expertise = [
  {
    title: "Organic discovery strategy",
    body: "Enterprise strategy for how brands are found across traditional search, AI assistants, communities, review platforms, and other discovery surfaces.",
    icon: "search" as const,
    color: "hsl(179, 62%, 40%)",
  },
  {
    title: "Technical SEO & content",
    body: "Technical audits, on-page optimization, internal linking, schema, content planning, and authority-building grounded in what customers need.",
    icon: "file-text" as const,
    color: "hsl(10, 82%, 60%)",
  },
  {
    title: "Search intelligence & analytics",
    body: "Search, traffic, competitor, and customer data translated into roadmaps, reporting, tests, and useful decisions for cross-functional teams.",
    icon: "chart-column" as const,
    color: "hsl(40, 92%, 48%)",
  },
  {
    title: "Cross-functional leadership",
    body: "Experience leading teams, agencies, vendors, and partnerships across marketing, content, development, merchandising, product, and paid search.",
    icon: "users" as const,
    color: "hsl(150, 55%, 42%)",
  },
  {
    title: "On-site search & taxonomy",
    body: "Years spent improving searchability through taxonomy, synonyms, redirects, navigation, sorting rules, and customer-centered site experiences.",
    icon: "sparkles" as const,
    color: "hsl(340, 78%, 60%)",
  },
  {
    title: "AI enablement & training",
    body: "Hands-on sessions that help colleagues use ChatGPT, Cursor, Copilot, and Gemini in ways that fit their actual work, not a generic demo they forget tomorrow.",
    icon: "megaphone" as const,
    color: "hsl(205, 80%, 52%)",
  },
] as const;

export const toolkit = [
  "Enterprise SEO",
  "Technical SEO",
  "Content Strategy",
  "On-site Search",
  "Taxonomy",
  "Google Search Console",
  "Google Analytics",
  "Looker Studio",
  "Semrush",
  "Ahrefs",
  "GEO Advisor",
  "ChatGPT",
  "Cursor",
  "Microsoft Copilot",
  "Gemini",
  "AI Enablement",
  "AEO",
  "GEO",
] as const;

export const faqs = [
  {
    question: "How do you actually use AI in your work?",
    answer:
      "I use ChatGPT, Cursor, Copilot, and Gemini on work I already have, not as a side demo. That looks like drafting and tightening content, summarizing search data, checking technical notes, and building small examples a teammate can reuse. The model is a fast first pass. I still own the strategy, the facts, and whether the output is something a team can ship.",
  },
  {
    question: "What is the difference between SEO, AEO, and GEO?",
    answer:
      "SEO is how people find you in traditional search. AEO, answer engine optimization, is how clearly you can be pulled into a direct answer in Google, assistants, and Q&A experiences. GEO, generative engine optimization, is how often and how accurately AI systems cite or describe your brand when they write an answer. I treat them as one organic discovery system. The surfaces changed. The work still starts with entities, evidence, and useful content.",
  },
  {
    question: "How are you optimizing for answer engines and generative search?",
    answer:
      "I make the facts easy to extract. Clear titles, a clean heading outline, schema that matches the page, and answers written the way a person would ask the question. On a personal site that means saying who I am, what I do, and how I work in plain language, then marking it up. On enterprise brands it is the same idea at scale: consistent names, trustworthy pages, and content that can be quoted without guessing.",
  },
  {
    question: "How do you teach a team to use AI so it sticks?",
    answer:
      "I sit in their workflow. We pick a task they already do, try the tool on that task, and keep only what saves time or improves quality. I do not start with a long overview of every model. If people cannot reuse it on Monday, it was a demo, not enablement.",
  },
  {
    question: "What stays true when people get answers from AI instead of a list of links?",
    answer:
      "People still have to trust the brand they hear about. Technical health, clear content, internal linking, and measurement still matter. If the site is thin, contradictory, or hard to parse, an answer engine will skip it or get it wrong. Rankings were never the whole job. Being understood is.",
  },
  {
    question: "How do you keep AI useful in a high-stakes category like tax?",
    answer:
      "I do not let a model invent policy, prices, or advice. AI helps with research, drafting, clustering, QA checklists, and internal how-tos. Anything customer-facing still goes through the same accuracy and brand review you would use without AI. In a trust category, speed is useless if the answer is wrong.",
  },
  {
    question: "How do you measure whether AEO or GEO work is landing?",
    answer:
      "I try to pull it into a comprehensive view that can help us tell the whole story. Search Console still tells me what Google is showing and what people actually type. Then I bring in Semrush, Ahrefs, GEO Advisor, and other keyword or AI-visibility trackers, because the way we benchmark this is still getting sorted out. I look for overlap: are we showing up, are we being cited, is the brand described accurately, and does that line up with the journeys that create revenue or trust. When the tools disagree, that is useful too. It usually means the measurement is young, not that one platform has the truth.",
  },
  {
    question: "Your SEO career is longer than your AI career. How do you talk about that?",
    answer:
      "Directly. I have more than a decade in enterprise digital, content, and SEO. AI is the newer skill, and I have been learning it by doing the work and teaching it in the same week. That mix is the point: I can connect a new tool to a real search, content, or analytics problem instead of treating AI as a separate hobby.",
  },
] as const;
