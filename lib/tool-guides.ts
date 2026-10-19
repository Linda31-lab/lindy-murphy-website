import { aiTools, extraTools, experience } from "@/lib/content";

export type ToolFaq = {
  question: string;
  answer: string;
};

export type ToolGuide = {
  slug: string;
  name: string;
  category: string;
  kind: "software" | "practice";
  applicationCategory?: string;
  summary: string;
  whatItDoes: string[];
  howIUsedIt: string[];
  faqs: ToolFaq[];
  related: string[];
};

export const toolGuides: ToolGuide[] = [
  {
    slug: "chatgpt",
    name: "ChatGPT",
    category: "AI",
    kind: "software",
    applicationCategory: "BusinessApplication",
    summary:
      "How I use ChatGPT to draft, pressure-test, and teach, while keeping people in charge of the final call.",
    whatItDoes: [
      "ChatGPT is a general-purpose AI assistant from OpenAI. You give it a prompt, a document, a spreadsheet, or a messy question, and it returns language, outlines, comparisons, or first-pass analysis. It is strongest when the task is language-heavy: rewriting, summarizing, clustering themes, turning notes into a brief, or helping you see a gap you missed.",
      "It is not a source of truth. It can miss context, invent citations, and sound confident when it should pause. Used well, it is a thinking partner that speeds up the first 40 percent of a task so you can spend more time on judgment, evidence, and whether the work is actually useful to a team.",
    ],
    howIUsedIt: [
      "I use ChatGPT as a drafting and teaching tool, not as a black box that ships work. Typical jobs: turning a long page into a cleaner outline, generating interview-style questions a customer might ask, rewriting a paragraph so it sounds like me, or asking it to poke holes in a strategy note before I share it. When I am helping teams learn AI, I often start here because most people already have access and the learning curve is low.",
      "The rule I keep is simple. I bring the brief, the constraints, and the facts. ChatGPT helps me move faster. I check anything that could be wrong, then I keep only the parts a teammate could reuse without me sitting next to them. That is the difference between playing with a chatbot and using it as part of real work.",
    ],
    faqs: [
      {
        question: "What is ChatGPT actually good for in SEO and content work?",
        answer:
          "Outlines, rewrites, clustering messy notes, drafting FAQ candidates, and pressure-testing whether a page answers the question a person would actually ask. It is a first pass, not the finished strategy.",
      },
      {
        question: "How do you keep ChatGPT from making things up?",
        answer:
          "I feed it the source material I already trust, I ask it to stay inside that material, and I verify names, numbers, URLs, and claims before anything leaves my desk. If I cannot check it, it does not ship.",
      },
      {
        question: "Do you use the same ChatGPT workflow for every task?",
        answer:
          "No. Drafting a meta description is different from summarizing a research export. I change the prompt, the input, and how strict I am about review based on how easy it would be for a bad answer to cause damage.",
      },
    ],
    related: ["cursor", "microsoft-copilot", "gemini", "geo-advisor"],
  },
  {
    slug: "cursor",
    name: "Cursor",
    category: "AI",
    kind: "software",
    applicationCategory: "DeveloperApplication",
    summary:
      "How I use Cursor to edit a live site, keep SEO details tight, and learn by changing real files instead of guessing.",
    whatItDoes: [
      "Cursor is an AI-assisted code editor. It lets you open a real project, point at files, and ask for changes in context: a metadata tag, a schema block, a component, a sitemap entry. Unlike a chat window that only talks about code, Cursor can read the repo and propose edits in the same place you would make them yourself.",
      "That matters for SEO people who still need to ship. Titles, canonicals, robots rules, structured data, internal links, and content modules all live in files. Cursor is useful when you know what should be true on the page and you want help implementing it without losing track of the rest of the site.",
    ],
    howIUsedIt: [
      "I use Cursor on this site and on similar implementation work: adding FAQ schema that matches visible copy, generating tool URLs, tightening metadata, and keeping a sitemap honest. I still read the diff. If a change would invent an em dash I do not want, drop a required field, or write marketing fluff into a title tag, I send it back.",
      "As an AI ambassador, Cursor is also how I show teams that AI is not only for writing blog posts. You can use it to inspect a page template, add JSON-LD, or document a pattern so the next person does not have to reverse-engineer it. The value is the reusable change, not the chat transcript.",
    ],
    faqs: [
      {
        question: "Why use Cursor instead of pasting code into ChatGPT?",
        answer:
          "Cursor can see the surrounding files. That means it is less likely to invent a component that does not exist, and I can review the actual diff before anything is committed.",
      },
      {
        question: "Do you need to be a full-time engineer to use Cursor well?",
        answer:
          "You need enough fluency to know what a good change looks like. I use it because I can tell when metadata, schema, or routing is wrong. I do not let it merge blindly.",
      },
      {
        question: "How does Cursor show up in enablement?",
        answer:
          "I use it to demonstrate a full loop: a real file, a real edit, a real preview. People remember that more than a slide that says AI can write code.",
      },
    ],
    related: ["chatgpt", "microsoft-copilot", "gemini", "google-search-console"],
  },
  {
    slug: "microsoft-copilot",
    name: "Microsoft Copilot",
    category: "AI",
    kind: "software",
    applicationCategory: "BusinessApplication",
    summary:
      "How I use Microsoft Copilot inside everyday Microsoft work so AI shows up where teams already live.",
    whatItDoes: [
      "Microsoft Copilot is AI layered into Microsoft 365 products such as Word, Excel, PowerPoint, Outlook, and Teams, plus a chat experience that can work with files you already have permission to see. The pitch is practical: summarize a thread, draft from a document, pull themes from notes, or help you start a deck without leaving the suite.",
      "In companies that already run on Microsoft, Copilot is often the AI people will actually touch. Adoption is less about a new login and more about whether the assistant respects the files, meetings, and email people already use.",
    ],
    howIUsedIt: [
      "I use Copilot when the work already lives in Microsoft tools: cleaning up a long email into a shorter ask, turning meeting notes into action items, or getting a first outline from a document I wrote. It is especially useful for enablement because I can show a teammate a workflow in the same apps they open every morning.",
      "I treat Copilot the same way I treat other assistants. It can save time on synthesis and formatting. It should not be the owner of a recommendation that needs search data, legal review, or a human who understands the brand. When I teach it, I show both the speed and the review step.",
    ],
    faqs: [
      {
        question: "When do you reach for Copilot instead of ChatGPT?",
        answer:
          "When the source material is already in Outlook, Word, Excel, or Teams and I want the answer next to that work instead of exporting it into another chat.",
      },
      {
        question: "Is Copilot a replacement for SEO tools?",
        answer:
          "No. It can help you write about the work or summarize a file. It does not replace Search Console, analytics, or a crawler that tells you what Google actually saw.",
      },
      {
        question: "How do you teach Copilot without overselling it?",
        answer:
          "I pick one boring, real task, run it live, then show what I would still check. People trust that more than a list of magical use cases.",
      },
    ],
    related: ["chatgpt", "gemini", "cursor", "zoom"],
  },
  {
    slug: "gemini",
    name: "Gemini",
    category: "AI",
    kind: "software",
    applicationCategory: "BusinessApplication",
    summary:
      "How I use Gemini as another model in the mix, especially when the work already sits in Google's world.",
    whatItDoes: [
      "Gemini is Google's family of AI models and products, including a chat assistant and deeper ties to Search, Docs, Sheets, and other Google surfaces. Like other large language models, it can draft, summarize, compare, and help you explore a topic quickly. Because it sits close to Google's own search and workspace products, it is often part of how people already ask questions online.",
      "That overlap is useful and a little messy. Gemini can help you think about how an answer might be assembled. It can also remind you that generative answers are not the same thing as a ranking report. You still need measurement outside the chat.",
    ],
    howIUsedIt: [
      "I use Gemini as a second opinion next to ChatGPT, especially when I want to see how another model frames the same prompt. If the work already lives in Google Docs or Sheets, it can be the faster path to an outline or a cleanup pass. I also pay attention to how Gemini-style answers show up in search experiences, because that is part of organic discovery now.",
      "I do not treat Gemini as a GEO score. It is one assistant among several. When I talk about AEO and GEO, I use Gemini to understand how answers get written, then I go back to Search Console, analytics, and research platforms to see what is actually happening for the brand.",
    ],
    faqs: [
      {
        question: "Why keep Gemini if you already use ChatGPT?",
        answer:
          "Models disagree. A second pass can surface a question I missed, a simpler way to say something, or a gap in the brief. I would rather compare than lock into one assistant.",
      },
      {
        question: "Does Gemini replace Google Search Console?",
        answer:
          "No. Gemini can talk about search. Search Console tells you queries, pages, indexing, and what Google actually processed for your site.",
      },
      {
        question: "How does Gemini connect to AEO and GEO?",
        answer:
          "It is one of the systems that may turn a page into an answer. I use it to think about clarity and structure, then I measure with more than one research source so I am not guessing from a single chat.",
      },
    ],
    related: ["chatgpt", "google-search-console", "geo-advisor", "microsoft-copilot"],
  },
  {
    slug: "contentful",
    name: "Contentful",
    category: "CMS",
    kind: "software",
    applicationCategory: "BusinessApplication",
    summary:
      "How I use Contentful as a headless CMS so content models, fields, and publishing support organic discovery.",
    whatItDoes: [
      "Contentful is a headless content management system. Instead of pages living only inside a theme, you model content as structured entries: fields, references, locales, and content types that other systems can pull through an API. That makes it possible to reuse the same article, FAQ, or product story on a website, an app, or another surface without copying it by hand.",
      "For SEO, the CMS is not a side tool. Titles, descriptions, headings, internal links, schema inputs, and publish state all live in the model. If the fields are messy, the site will be messy. If the model is clear, teams can ship consistent pages without a developer rewriting the template every time.",
    ],
    howIUsedIt: [
      "At Taxwell I work in Contentful as part of organic discovery across TaxAct, Drake Software, and 1040.com. That means caring about how content is structured, which fields authors actually fill in, and whether the published output supports search, AI answers, and on-site journeys. I look at the model the way I look at a template: what can an author control, what is missing, and what will break if someone leaves a field blank.",
      "Headless systems reward people who can translate SEO needs into fields and workflow. I would rather add a reusable FAQ module or a cleaner canonical pattern than write a one-off request that only helps one URL. The job is to make the next page easier than the last one.",
    ],
    faqs: [
      {
        question: "What does headless mean in practice?",
        answer:
          "The CMS stores structured content. The website, app, or other channel decides how to render it. You are managing entries and fields, not only a visual page builder.",
      },
      {
        question: "Why does a CMS model matter for SEO?",
        answer:
          "If title, H1, body, FAQ, and related links are not fields teams can maintain, those elements get skipped or hard-coded. Search and answer engines then inherit whatever the template happened to output.",
      },
      {
        question: "How do you work with authors in Contentful?",
        answer:
          "I try to keep the request in the content type: clear fields, examples, and only the controls people will actually use. A perfect model that nobody fills in is not a win.",
      },
    ],
    related: ["wordpress", "content-management-systems", "web-publishing", "optimizely"],
  },
  {
    slug: "wordpress",
    name: "WordPress",
    category: "CMS",
    kind: "software",
    applicationCategory: "BusinessApplication",
    summary:
      "How I use WordPress to publish and maintain content when the site still runs on a classic CMS.",
    whatItDoes: [
      "WordPress is one of the most widely used content management systems on the web. In its common form it combines posts, pages, themes, plugins, and an editor that authors already know. It can run a blog, a marketing site, documentation, or a more custom build depending on the theme and plugin stack.",
      "Because so much of the web still lives in WordPress, a lot of SEO work still happens there: permalinks, headings, internal links, XML sitemaps, schema plugins, redirects, and the unglamorous work of keeping templates from outputting duplicate or empty metadata.",
    ],
    howIUsedIt: [
      "At Taxwell, WordPress sits alongside Contentful depending on the property and the job to be done. I use it when the publishing path is a WordPress site and the organic work depends on what authors can actually change: titles, body copy, modules, and how a template treats a page type. I pay attention to plugins that promise SEO magic, because they can help or they can fight the rest of the stack.",
      "My bias is to make the editor honest. If a field is on the screen, it should map to something real in the HTML. If a plugin outputs schema, it should match the visible page. WordPress is familiar, which is a gift, and it is easy to accumulate leftover settings, which is a risk.",
    ],
    faqs: [
      {
        question: "Is WordPress still relevant next to headless CMS tools?",
        answer:
          "Yes. Plenty of high-traffic content still ships from WordPress. The question is whether the theme, plugins, and workflow match the discovery work, not whether the logo feels modern.",
      },
      {
        question: "What WordPress SEO issues do you watch for?",
        answer:
          "Duplicate titles, thin archives, plugin schema that does not match the page, crawlable parameter URLs, and editors who cannot change the one field that would actually help the snippet.",
      },
      {
        question: "How do you decide WordPress versus Contentful?",
        answer:
          "I start with where the content already lives, who has to publish it, and which channels need to reuse it. I do not move a site for sport.",
      },
    ],
    related: ["contentful", "content-management-systems", "google-search-console", "web-publishing"],
  },
  {
    slug: "amplitude",
    name: "Amplitude",
    category: "Analytics",
    kind: "software",
    applicationCategory: "BusinessApplication",
    summary:
      "How I use Amplitude to see product behavior, funnels, and whether discovery work actually changes what people do.",
    whatItDoes: [
      "Amplitude is a product analytics platform. It tracks events, user paths, funnels, retention, and how people move through a digital product after they arrive. Compared with pageview-first web analytics, it is built around actions: started a flow, completed a step, dropped off, came back.",
      "That view is useful when SEO and organic discovery are judged by more than sessions. A visit that never starts the job the customer came to do is a different story than a visit that converts. Amplitude helps product, growth, and discovery teams look at the same behaviors instead of arguing from different dashboards.",
    ],
    howIUsedIt: [
      "At Taxwell I use Amplitude next to Google Analytics so I am not reading only acquisition or only product behavior. Organic discovery should connect the query or the answer surface to what happened after the click or the handoff. Amplitude is where I look for paths, drop-off, and whether a content or template change showed up in the product, not only in a landing-page report.",
      "I do not treat Amplitude as the only source. Event names can be incomplete, tracking can lag a release, and definitions still need a human. I use it as one lens, then I compare it with web analytics, search data, and qualitative feedback so the story is not stuck in a single tool.",
    ],
    faqs: [
      {
        question: "How is Amplitude different from Google Analytics?",
        answer:
          "Google Analytics is strongest on traffic, acquisition, and on-site behavior in a web analytics model. Amplitude is strongest on product events and paths. I use both because they answer different questions.",
      },
      {
        question: "What Amplitude questions matter for organic discovery?",
        answer:
          "Did people who arrived from search start the task they came for? Where do they stall? Did a content or UX change change completion, not only bounce rate?",
      },
      {
        question: "What do you watch out for in event analytics?",
        answer:
          "Vague event names, missing instrumentation on a key step, and teams who treat a funnel screenshot as proof without checking the date range, the segment, or whether the event still fires.",
      },
    ],
    related: ["google-analytics", "looker-studio", "optimizely", "google-search-console"],
  },
  {
    slug: "google-analytics",
    name: "Google Analytics",
    category: "Analytics",
    kind: "software",
    applicationCategory: "BusinessApplication",
    summary:
      "How I use Google Analytics across Taxwell, TaxAct, and JOANN to connect organic traffic to on-site behavior.",
    whatItDoes: [
      "Google Analytics is the default web analytics platform for a large share of sites. In GA4 it is event-based: sessions, users, traffic sources, landing pages, conversions, and explorations you build to answer a specific question. It tells you what arrived, from where, and what happened on the site if tracking is implemented well.",
      "It is not a rank tracker, and it is not a complete picture of AI answers that never send a click. It is still one of the best ways to see landing pages, engagement, and whether organic traffic is doing useful work after it shows up.",
    ],
    howIUsedIt: [
      "I have used Google Analytics at JOANN, TaxAct, and Taxwell, which means I have lived through Universal Analytics into GA4 and through ecommerce, content, and tax-software contexts. At JOANN it was part of how I turned search and site data into reporting for business teams. At TaxAct it sat with Search Console, Looker Studio, and Semrush. At Taxwell it sits with Amplitude and experimentation tools so acquisition is not divorced from product behavior.",
      "My habit is to start with the question, then the segment, then the comparison. Channel groupings lie if you let them. Branded versus non-branded, landing page versus a whole directory, and a test versus the leftover of the site all tell different stories. I would rather show a few clean views than a dashboard nobody trusts.",
    ],
    faqs: [
      {
        question: "What Google Analytics reports do you actually live in?",
        answer:
          "Landing pages, traffic sources with careful segments, conversion or key events tied to those landings, and explorations when a standard report is too blunt. I go in with a question, not a fishing trip.",
      },
      {
        question: "How do you use GA next to Search Console?",
        answer:
          "Search Console is closer to what Google saw and which queries mapped to which pages. Analytics is closer to what people did after they arrived. I use them together on purpose.",
      },
      {
        question: "Can Google Analytics measure AI Overviews or chat answers?",
        answer:
          "Only the visits that still show up as traffic, and even then the source can be messy. That is why I also look at Search Console, research platforms, and qualitative examples instead of pretending GA covers the whole discovery story.",
      },
    ],
    related: ["google-search-console", "looker-studio", "amplitude", "semrush"],
  },
  {
    slug: "zoom",
    name: "Zoom",
    category: "Collaboration",
    kind: "software",
    applicationCategory: "CommunicationApplication",
    summary:
      "How I use Zoom for enablement, working sessions, and teaching AI in a way people can actually follow.",
    whatItDoes: [
      "Zoom is a video meeting and webinar platform. It is where distributed teams present, workshop, record training, and run the unglamorous meetings that keep a program moving. Chat, screen share, breakout rooms, and recordings matter as much as the video tile.",
      "For someone who leads across functions, Zoom is not a productivity footnote. Strategy dies if it only lives in a deck that nobody walked through. Enablement dies if people cannot see the workflow on a screen.",
    ],
    howIUsedIt: [
      "At Taxwell I use Zoom for the cross-functional work organic discovery requires: content, development, leadership, and the AI ambassador sessions where I show a workflow instead of only describing it. Teaching AI is easier when people can watch you open the tool, make the mess, and clean it up live.",
      "I keep sessions short on theory and long on the example. Recordings help people who could not attend, but I still write the reusable piece afterward, a checklist or a prompt or a field definition, so the meeting is not the only artifact.",
    ],
    faqs: [
      {
        question: "Why does a meeting tool belong on an SEO site?",
        answer:
          "Because discovery work is cross-functional. If I cannot teach, align, and show the workflow, the technical recommendation stays stuck in a ticket.",
      },
      {
        question: "How do you run an AI enablement session on Zoom?",
        answer:
          "One real task, one live demo, one thing people can copy, and time for questions. I avoid a 40-slide tour of every model on the market.",
      },
      {
        question: "Do recordings replace documentation?",
        answer:
          "No. A recording helps people who missed the meeting. A short written version is what they will reuse two weeks later.",
      },
    ],
    related: ["microsoft-copilot", "chatgpt", "cursor", "looker-studio"],
  },
  {
    slug: "optimizely",
    name: "Optimizely",
    category: "Experimentation",
    kind: "software",
    applicationCategory: "BusinessApplication",
    summary:
      "How I use Optimizely to test organic and on-site changes instead of shipping a guess and hoping the chart moves.",
    whatItDoes: [
      "Optimizely is an experimentation and feature-testing platform. Teams use it to run A/B tests, multivariate tests, and targeted experiences: two versions of a page, a change to a module, a different message, a holdout. The point is to measure impact against a hypothesis instead of arguing from instinct.",
      "SEO people sometimes treat testing as a conversion-rate-optimization-only sport. It is not. Titles, modules, internal links, and content layouts can be tested when the setup is clean enough to read. Experimentation is how you keep discovery work honest.",
    ],
    howIUsedIt: [
      "At Taxwell I use Optimizely as part of organic discovery, not as a side CRO gadget. When we change an experience that search or answer engines and customers both touch, I want a hypothesis, an audience, and a way to read the result next to analytics. I would rather test a clearer module than launch a redesign and then debate the leftover noise.",
      "I also carry JOANN scars in a good way. Years of SiteSpect and Google Optimize taught me that a test is only as good as the question, the targeting, and the patience to reach a readable result. Optimizely is the current platform. The discipline is the same.",
    ],
    faqs: [
      {
        question: "What kinds of SEO work can you test in Optimizely?",
        answer:
          "On-page modules, layout, messaging, and some conversion paths. Indexing and ranking changes still need search data. I do not pretend a two-week A/B test is a ranking study.",
      },
      {
        question: "What makes an experiment readable?",
        answer:
          "A single main hypothesis, clean targeting, enough traffic or time, and agreement on the primary metric before you launch. Fishing through 20 metrics after the fact is how tests get a bad reputation.",
      },
      {
        question: "How do you partner with other teams on tests?",
        answer:
          "I bring the discovery question and the customer language. Product, engineering, and analytics bring implementation and measurement. Nobody should own a test in a vacuum.",
      },
    ],
    related: ["sitespect", "google-optimize", "google-analytics", "amplitude"],
  },
  {
    slug: "trustpilot",
    name: "Trustpilot",
    category: "Reviews",
    kind: "software",
    applicationCategory: "BusinessApplication",
    summary:
      "How I use Trustpilot as a reputation and discovery surface, not only as a widget on a product page.",
    whatItDoes: [
      "Trustpilot is a third-party review platform where customers rate businesses and write public feedback. Those reviews can appear on Trustpilot itself, in search results, in other discovery surfaces, and sometimes on the brand site through modules or links. For categories where trust is the product, the review profile is part of how people decide.",
      "Reviews are content whether we like it or not. They use customer language, they answer objections, and they can show up when someone asks an assistant or a search engine who to trust. Ignoring them is leaving a discovery surface unstaffed.",
    ],
    howIUsedIt: [
      "At Taxwell, Trustpilot is part of organic discovery across tax brands where people are deciding who to file with. I look at it as reputation, voice-of-customer, and a public page that needs the same care as a landing page: is the profile complete, are we responding, and are we learning from the themes instead of only screenshotting a star rating for a slide.",
      "I pair Trustpilot with other sources such as Bazaarvoice, site content, and search data. One review platform is not the whole trust story. The work is to see what customers repeat, what we can fix in the product or the content, and what we should stop pretending is only a support issue.",
    ],
    faqs: [
      {
        question: "Why are reviews an SEO and AEO issue?",
        answer:
          "People search for brands plus reviews, and answer engines summarize reputation. The language customers use is often closer to the query than the language a brand deck uses.",
      },
      {
        question: "Do you treat a star average as the whole story?",
        answer:
          "No. I read themes: refunds, ease, support, accuracy, surprise fees. A 4.2 with a clear complaint pattern is more useful than a number with no context.",
      },
      {
        question: "How do you work reviews without gaming them?",
        answer:
          "Ask for feedback at fair moments, respond like a human, and fix the product issues the reviews keep naming. Anything that smells like stuffing or filtering is a short-term trick.",
      },
    ],
    related: ["bazaarvoice", "google-search-console", "semrush", "contentful"],
  },
  {
    slug: "bazaarvoice",
    name: "Bazaarvoice",
    category: "Reviews",
    kind: "software",
    applicationCategory: "BusinessApplication",
    summary:
      "How I used Bazaarvoice at JOANN and Taxwell to turn ratings, reviews, and UGC into discovery and merchandising input.",
    whatItDoes: [
      "Bazaarvoice is an enterprise ratings, reviews, and user-generated content platform. It collects reviews, questions and answers, photos, and other customer content, then syndicates or displays that content on product pages and other surfaces. For retailers, it is often the system behind the stars, the review count, and the customer language on a PDP.",
      "UGC helps on-site conversion and it helps search. Review text contains synonyms, use cases, and objections that product copy may skip. It also creates a freshness and depth signal on pages that would otherwise be a spec table and a price.",
    ],
    howIUsedIt: [
      "At JOANN I used Bazaarvoice as part of a broader optimization brief that included SEO, on-site search, taxonomy, and customer feedback. Reviews were not a widget I ignored. They were a source of language for merchandising, a trust layer on product pages, and a feedback loop when a product or a content gap kept showing up in customer words.",
      "At Taxwell, Bazaarvoice still belongs in the discovery toolkit alongside Trustpilot. Different brands and page types use reviews differently, but the job is the same: make sure review content is collected, displayed, and treated as part of how people evaluate the brand, not as decoration under the fold.",
    ],
    faqs: [
      {
        question: "What did Bazaarvoice change about product pages at JOANN?",
        answer:
          "It put customer language, ratings, and proof next to the merchandising content. That helps shoppers and it gives SEO and on-site search more real phrases to work with.",
      },
      {
        question: "How do reviews help taxonomy or on-site search?",
        answer:
          "Customers name products in ways internal catalogs do not. Those phrases are synonym and content clues if someone is actually reading them.",
      },
      {
        question: "Is Bazaarvoice only for ecommerce?",
        answer:
          "It is strongest in retail and product catalogs, but the underlying idea travels: structured customer content that can appear on pages people use to decide.",
      },
    ],
    related: ["trustpilot", "constructor", "plumslice", "google-analytics"],
  },
  {
    slug: "google-search-console",
    name: "Google Search Console",
    category: "Search research",
    kind: "software",
    applicationCategory: "BusinessApplication",
    summary:
      "How I use Google Search Console as the closest official view of queries, pages, indexing, and search performance.",
    whatItDoes: [
      "Google Search Console is Google's own report for site owners. It shows queries, pages, countries, devices, click-through, impressions, average position, indexing, sitemaps, experience issues, and enhancements such as structured data where Google chooses to expose them. If you care what Google saw, this is the first-party place to look.",
      "It is incomplete on purpose. It samples, it delays, it does not explain every ranking change, and it is still the report I trust more than a third-party guess about what Google crawled. It also does not fully explain AI answers, which is why it is necessary and not sufficient.",
    ],
    howIUsedIt: [
      "At TaxAct I used Search Console as a core operating system: which pages earned impressions, which queries we were almost winning, where coverage broke, and whether a sitemap or a template change showed up. I still use it at Taxwell the same way, then I line it up with analytics and with research tools so I am not reading one export in isolation.",
      "I live in pages and queries, not only in total clicks. Directory-level views, branded versus non-branded splits, and comparing a change window against a normal season matter more than a single spike. When something looks off, I check inspection, sitemaps, and the live URL before I write a strategy novel.",
    ],
    faqs: [
      {
        question: "What is the first Search Console report you open?",
        answer:
          "Performance, then I filter to the page or directory I actually changed. Coverage and sitemaps come next if the question is technical rather than query-level.",
      },
      {
        question: "Why is Search Console not enough for AEO and GEO?",
        answer:
          "It is built around classic search performance. Generative answers may use your content with little or no click. I still start here, then I add other sources so I am not pretending clicks equal visibility.",
      },
      {
        question: "How do you use sitemaps in Search Console?",
        answer:
          "Submit the real sitemap, confirm Google can fetch it, and make sure the URLs inside match the URLs you want indexed. A sitemap is a hint, not a command, but a wrong one still creates confusion.",
      },
    ],
    related: ["google-analytics", "semrush", "ahrefs", "looker-studio"],
  },
  {
    slug: "looker-studio",
    name: "Looker Studio",
    category: "Analytics",
    kind: "software",
    applicationCategory: "BusinessApplication",
    summary:
      "How I use Looker Studio to turn Search Console, analytics, and other sources into reporting people will actually read.",
    whatItDoes: [
      "Looker Studio, formerly Data Studio, is Google's dashboard tool. You connect sources such as Google Analytics, Search Console, spreadsheets, and other connectors, then build charts, tables, and scorecards that non-analysts can open without living in the raw product. It is a reporting layer, not a data warehouse.",
      "Good Looker Studio work is editorial. The dashboard should answer a few questions for a specific audience. A 40-chart collage is how people stop looking.",
    ],
    howIUsedIt: [
      "At TaxAct I used Looker Studio to put SEO reporting in a place leadership and partner teams could reuse: Search Console next to analytics, the pages that mattered, and the trendlines that explained a season instead of a single day. The point was not to recreate every GA exploration. The point was a shared view.",
      "I still think in layers. Looker Studio is the narrative. Search Console, GA, Semrush, Ahrefs, and other tools are where I investigate. If a dashboard cannot explain a change, I go back to the source systems instead of decorating the chart.",
    ],
    faqs: [
      {
        question: "What belongs on an SEO Looker Studio dashboard?",
        answer:
          "The questions the audience will ask twice a month: traffic and queries for key templates, a few landing pages, a comparison to last period, and a note about what changed. Not every dimension in GA4.",
      },
      {
        question: "Should Looker Studio be the system of record?",
        answer:
          "No. It is a view. When a number looks wrong, I go back to Search Console, analytics, or the sheet that feeds it.",
      },
      {
        question: "How do you keep stakeholders from drowning in charts?",
        answer:
          "One page for the story, a second page for people who want to slice, and a written takeaway. If I cannot say the takeaway out loud, the dashboard is not done.",
      },
    ],
    related: ["google-analytics", "google-search-console", "semrush", "amplitude"],
  },
  {
    slug: "semrush",
    name: "Semrush",
    category: "Search research",
    kind: "software",
    applicationCategory: "BusinessApplication",
    summary:
      "How I use Semrush for keyword research, competitive context, and audits, then check it against other sources.",
    whatItDoes: [
      "Semrush is an SEO and marketing research platform. Common uses include keyword research, rank tracking, competitive gap analysis, site audits, backlink overviews, and topic research. It estimates search demand and visibility from its own datasets, which makes it powerful and imperfect at the same time.",
      "Used well, it is a way to see the landscape: which terms a page might target, who else shows up, where a site has technical debt, and how a competitor's footprint changed. Used poorly, it becomes a spreadsheet of vanity keywords nobody on the site can rank for.",
    ],
    howIUsedIt: [
      "At TaxAct I used Semrush as part of a research stack with Search Console, Google Analytics, and Looker Studio. Keyword research, competitive analysis, and site audits were part of the job. I still use it, and I still refuse to let one platform write the strategy. Volume estimates, rank estimates, and competitor scores are directional. I benchmark them against first-party search data and at least one other research tool.",
      "When I talk about AEO and GEO, Semrush is one of the places I look for traditional demand and for whatever visibility features the platform is adding. I pair it with Ahrefs, GEO Advisor, and the messy qualitative work of actually asking the assistants the questions customers ask.",
    ],
    faqs: [
      {
        question: "Do you trust Semrush volume numbers at face value?",
        answer:
          "I treat them as a relative signal. I compare them with Search Console and with another tool before I staff a whole content program against a single volume cell.",
      },
      {
        question: "What Semrush workflows show up in weekly work?",
        answer:
          "Keyword and topic research, competitor URL comparisons, audit items that need a developer, and tracking whether a cluster of pages is moving. I do not run every report every Monday.",
      },
      {
        question: "How does Semrush fit with Ahrefs?",
        answer:
          "They overlap and they disagree. That disagreement is useful. If both tools and Search Console point the same way, I get more confident. If they fight, I go find out why.",
      },
    ],
    related: ["ahrefs", "google-search-console", "geo-advisor", "looker-studio"],
  },
  {
    slug: "ahrefs",
    name: "Ahrefs",
    category: "Search research",
    kind: "software",
    applicationCategory: "BusinessApplication",
    summary:
      "How I use Ahrefs as a second research lens for keywords, links, and competitive URL analysis.",
    whatItDoes: [
      "Ahrefs is an SEO research platform known for a large backlink index, keyword explorer, site explorer, content research, and technical crawls. Teams use it to see who links to whom, which URLs attract organic traffic estimates, and where a competitor is invested.",
      "Like Semrush, Ahrefs is a model of the web, not a complete copy of Google. Link metrics, traffic estimates, and keyword difficulty scores are tools for comparison. They are not a court verdict.",
    ],
    howIUsedIt: [
      "I keep Ahrefs in the same research stack as Semrush, Search Console, and newer GEO tools. When I am sizing a topic, looking at a competitor URL, or trying to understand why a page has authority in one cluster and not another, I want more than one crawler's opinion. Ahrefs is often the link and URL-analysis counterweight.",
      "I use it to pressure-test, not to decorate a slide with Domain Rating. If Ahrefs and Semrush disagree on volume or on which competitor URLs matter, that is a prompt to look at the SERP, the page, and Search Console instead of averaging two bad numbers into a fake precision.",
    ],
    faqs: [
      {
        question: "Why use Ahrefs if you already have Semrush?",
        answer:
          "Because the indexes, crawlers, and scoring models are different. Benchmarking is how I avoid building a plan on one vendor's estimate.",
      },
      {
        question: "What is Ahrefs especially useful for?",
        answer:
          "URL-level competitive analysis, link context, and a second opinion on keyword and content gaps. I still confirm with first-party search data.",
      },
      {
        question: "Do you chase Domain Rating?",
        answer:
          "No. I care whether relevant pages earn relevant links and whether the content deserves them. A score without the URLs is trivia.",
      },
    ],
    related: ["semrush", "google-search-console", "geo-advisor", "google-analytics"],
  },
  {
    slug: "geo-advisor",
    name: "GEO Advisor",
    category: "Search research",
    kind: "software",
    applicationCategory: "BusinessApplication",
    summary:
      "How I use GEO Advisor as one more source for generative-engine visibility, never as the only score that matters.",
    whatItDoes: [
      "GEO Advisor is a research platform aimed at generative engine optimization: how brands and pages show up when AI systems answer questions instead of only returning a list of links. Tools in this category typically track mentions, citations, share of answer, or similar visibility measures across assistants and AI-influenced search experiences.",
      "The category is still settling. Vendors measure different models, different prompts, and different definitions of a win. That does not make the tools useless. It means you should read them like early rank trackers: directional, comparable over time, and dangerous if you treat one score as truth.",
    ],
    howIUsedIt: [
      "I use GEO Advisor the same way I use Semrush and Ahrefs for classic search: as one dataset in a pile. When I am asked how we are doing in AI answers, I do not want a vibe and I do not want a single vendor grade. I want prompts that match real customer questions, more than one tool, and a human check where I ask the assistants myself.",
      "That is the interview answer in practice. Measurement for AEO and GEO is not finished. I try to pull Search Console, analytics, Semrush, Ahrefs, GEO Advisor, and live examples into a view that can tell the whole story. If the tools disagree, I say so. Pretending we have a perfect AI ranking report is how teams make bad bets.",
    ],
    faqs: [
      {
        question: "What does GEO Advisor help you see that Search Console does not?",
        answer:
          "It is aimed at answer-style visibility rather than classic clicks and impressions. That can surface mentions you would never see in a click report, with the caveat that the method is still maturing.",
      },
      {
        question: "Why not pick one GEO tool and standardize on it?",
        answer:
          "Because the methods are still being sorted out. I would rather triangulate than marry a score I cannot explain.",
      },
      {
        question: "How do you keep GEO reporting from becoming theater?",
        answer:
          "Use real customer questions, show examples of the actual answers, compare more than one source, and separate branded ego mentions from the queries that create demand.",
      },
    ],
    related: ["semrush", "ahrefs", "google-search-console", "gemini"],
  },
  {
    slug: "salesforce",
    name: "Salesforce",
    category: "Ecommerce",
    kind: "software",
    applicationCategory: "BusinessApplication",
    summary:
      "How I used Salesforce at JOANN as the CRM and customer-data backbone around ecommerce and optimization work.",
    whatItDoes: [
      "Salesforce is a customer relationship management platform that can also sit at the center of marketing, service, and commerce stacks. Depending on the cloud, it holds leads, contacts, accounts, campaigns, cases, and the journeys that connect a site, email, and support team. In retail it is often the system other tools have to respect.",
      "SEO people meet Salesforce when personalization, campaigns, customer segments, or commerce data start affecting what a shopper sees. You do not have to be a Salesforce admin to care whether the customer record and the site experience are telling the same story.",
    ],
    howIUsedIt: [
      "At JOANN, Salesforce was part of the enterprise stack around digital optimization. My job was SEO, on-site search, taxonomy, reviews, and experimentation, which still bumped into CRM reality: who the customer is, what campaign they came from, and whether site experiences were being shaped by data that lived off the page. I used Salesforce as context for the customer, not as a place to hide from the catalog.",
      "The practical skill was translation. Merchandising, CRM, and search teams do not share a native language. I learned to ask what a segment actually meant, whether a campaign was overlapping an organic landing page, and whether we were optimizing a page that a Salesforce-driven experience was about to rewrite.",
    ],
    faqs: [
      {
        question: "Did you live in Salesforce as an admin?",
        answer:
          "No. I used it as a working tool in an enterprise retail environment. I needed enough fluency to understand customers, campaigns, and where site optimization had to cooperate with CRM.",
      },
      {
        question: "Why does CRM matter for SEO?",
        answer:
          "Because campaigns, audiences, and on-site experiences can change the page a search visitor lands on. If CRM logic and organic landing pages fight, the report will look haunted.",
      },
      {
        question: "What did you watch for between Salesforce and the site?",
        answer:
          "Overlapping campaigns on money pages, personalization that hid content crawlers need, and customer language in service data that never made it into the taxonomy or the copy.",
      },
    ],
    related: ["google-analytics", "constructor", "plumslice", "sitespect"],
  },
  {
    slug: "plumslice",
    name: "Plumslice",
    category: "Ecommerce",
    kind: "software",
    applicationCategory: "BusinessApplication",
    summary:
      "How I used Plumslice at JOANN to keep product content, attributes, and catalog data in shape for discovery.",
    whatItDoes: [
      "Plumslice is a product information and catalog-oriented platform used to manage ecommerce content: attributes, product data, and the structured details that merchandising teams need before a product page can exist. In a large retailer, that kind of system sits between vendors, internal merchandisers, and the site that shoppers see.",
      "Product discoverability starts here more often than people admit. If the title, category, material, size, or synonym never makes it into the catalog, on-site search cannot retrieve it and SEO cannot rank a hollow page. Dirty attributes become dirty navigation.",
    ],
    howIUsedIt: [
      "At JOANN I used Plumslice as part of ecommerce content and later as part of a broader search and taxonomy brief. Improving product discoverability meant synonyms, redirects, navigation, sorting, and the product data underneath those surfaces. Plumslice was one of the places that data could be corrected instead of only patched on the storefront.",
      "I treated catalog quality as SEO work. A prettier template cannot save a product with the wrong category or a title nobody would search. The unglamorous win is cleaner attributes that Constructor, the nav, and the product page can all reuse.",
    ],
    faqs: [
      {
        question: "How is a PIM or catalog tool different from the CMS?",
        answer:
          "A CMS often holds marketing pages and modules. A catalog tool holds the product record: attributes, variants, and the facts merchandising needs. Ecommerce SEO needs both.",
      },
      {
        question: "What catalog problems show up in search?",
        answer:
          "Missing attributes, inconsistent naming, products in the wrong category, and titles that describe the vendor's internal code instead of the thing a shopper would type.",
      },
      {
        question: "How did Plumslice connect to Constructor?",
        answer:
          "On-site search can only retrieve what the catalog knows. Synonyms and ranking rules help, but they cannot invent a material or a category that never entered the product record.",
      },
    ],
    related: ["constructor", "bazaarvoice", "content-management-systems", "salesforce"],
  },
  {
    slug: "sitespect",
    name: "SiteSpect",
    category: "Experimentation",
    kind: "software",
    applicationCategory: "BusinessApplication",
    summary:
      "How I used SiteSpect at JOANN to test site experiences without waiting on a full release cycle.",
    whatItDoes: [
      "SiteSpect is an experimentation and personalization platform, often used in a site-overlay or server-side style so teams can test changes on a live site. Marketers and optimizers can try layout, messaging, and experience changes, then measure against conversion or engagement goals.",
      "For a large retailer, that speed is the point. Not every hypothesis should wait for a quarterly release. The risk is the opposite: too many overlapping tests, or tests that change content crawlers and customers do not see the same way.",
    ],
    howIUsedIt: [
      "At JOANN I used SiteSpect as a core testing tool while I led digital optimization across SEO, on-site search, and customer experience. We tested merchandising and site changes in an environment where traffic was large enough to learn, and where a bad overlay could also confuse a page. I learned to ask whether a test was visible to search engines, whether it stacked on another test, and whether the metric matched the hypothesis.",
      "That experience is why I still treat experimentation as part of organic discovery. SiteSpect was the JOANN platform. Optimizely is the Taxwell one. The questions traveled with me.",
    ],
    faqs: [
      {
        question: "What is the SEO risk in overlay testing?",
        answer:
          "Crawlers and users can see different things, or a test can hide content you needed indexed. I want engineering and SEO in the room before a test changes a template at scale.",
      },
      {
        question: "When is SiteSpect the right tool versus a product release?",
        answer:
          "When you need a measured comparison on a live experience and the change is contained enough to reverse. Structural platform work still belongs in the product roadmap.",
      },
      {
        question: "What did JOANN teach you about test hygiene?",
        answer:
          "Do not stack five tests on the same template and then argue about the winner. Audience, duration, and a pre-agreed metric are not bureaucracy. They are how you learn.",
      },
    ],
    related: ["google-optimize", "optimizely", "google-analytics", "constructor"],
  },
  {
    slug: "google-optimize",
    name: "Google Optimize",
    category: "Experimentation",
    kind: "software",
    applicationCategory: "BusinessApplication",
    summary:
      "How I used Google Optimize at JOANN before Google retired it, and what that still teaches about testing.",
    whatItDoes: [
      "Google Optimize was Google's A/B testing product, tightly tied to Google Analytics. Teams used it to test variants of pages and to personalize experiences with a relatively low barrier to entry. Google retired Optimize in 2023, and many teams moved to GA4 experiments, Optimizely, or other vendors.",
      "Even as a retired tool, it matters on a resume because it is how a lot of enterprise teams learned testing discipline: variants, objectives, and the temptation to call a test at 80 percent confidence because someone had a launch date.",
    ],
    howIUsedIt: [
      "At JOANN I used Google Optimize alongside SiteSpect. Optimize was often the lighter path for tests that already lived close to Analytics. It was a practical way to try copy, layout, or module changes and read them next to the same analytics property the business already trusted.",
      "I keep it on this site because it is part of how I actually worked, not because I would start a new program there. The muscle memory is what I still use in Optimizely: write the hypothesis, pick the metric, do not peek yourself into a fake win, and ask whether search engines will see the same page customers see.",
    ],
    faqs: [
      {
        question: "Is Google Optimize still available?",
        answer:
          "No. Google retired it. I list it because I used it in production at JOANN, and because a lot of testing literacy in the industry came from that tool.",
      },
      {
        question: "What replaced it in your work?",
        answer:
          "At JOANN, SiteSpect carried a lot of the experimentation load. In my current work, Optimizely is the testing platform I use.",
      },
      {
        question: "Should I still mention retired tools?",
        answer:
          "If you used them on real programs, yes. Just be clear they are historical, and talk about the practice you carried forward.",
      },
    ],
    related: ["sitespect", "optimizely", "google-analytics", "looker-studio"],
  },
  {
    slug: "constructor",
    name: "Constructor",
    category: "Ecommerce",
    kind: "software",
    applicationCategory: "BusinessApplication",
    summary:
      "How I used Constructor at JOANN to improve on-site search, synonyms, ranking, and product findability.",
    whatItDoes: [
      "Constructor is an on-site search and product discovery platform. Retailers use it to power the search bar, autocomplete, ranking, merchandising rules, and related retrieval so shoppers can find products with the language they actually type. It is not Google Search. It is the search engine inside the store.",
      "Good on-site search is a mix of relevance, business rules, and catalog quality. Synonyms, redirects, boost and bury rules, and zero-result recovery all live here. If the search bar fails, SEO traffic that landed on the site still fails.",
    ],
    howIUsedIt: [
      "At JOANN I used Constructor as the on-site search system while I led SEO, taxonomy, and digital optimization. Product discoverability was the job: synonyms, redirects, navigation, sorting, and the messy middle between what merchandising called a product and what a customer typed. Constructor was where those retrieval rules became real.",
      "I looked at search reports the way I look at Search Console. What did people type? What returned nothing? What returned the wrong craft category? Those queries are a gift. They tell you which attributes belong in Plumslice, which synonyms belong in Constructor, and which landing pages SEO should stop ignoring.",
    ],
    faqs: [
      {
        question: "How is on-site search different from SEO?",
        answer:
          "SEO is how people find the site or the page from the wider web. On-site search is how they find a product after they arrive. I have always treated them as one discoverability problem.",
      },
      {
        question: "What Constructor work has the highest leverage?",
        answer:
          "Fixing zero-result queries, adding synonyms that match customer language, and making sure ranking rules do not bury the product the query clearly wants.",
      },
      {
        question: "Where do reviews and catalog data fit?",
        answer:
          "Bazaarvoice language and Plumslice attributes both feed better retrieval. Search ranking cannot compensate forever for a catalog that does not know the product.",
      },
    ],
    related: ["plumslice", "bazaarvoice", "google-analytics", "sitespect"],
  },
  {
    slug: "content-management-systems",
    name: "Content management systems",
    category: "Publishing",
    kind: "practice",
    summary:
      "How I learned to operate more than one CMS at HSN so publishing stayed accurate across teams and templates.",
    whatItDoes: [
      "A content management system is software for creating, editing, reviewing, and publishing digital content without rebuilding the site from scratch every time. In enterprise settings you rarely have one. You have a primary CMS, a product catalog, maybe a separate promotional tool, and a pile of templates that all have opinions.",
      "CMS literacy is not knowing every button. It is knowing which system is the source of truth, who can publish, what a template will output, and how a small field change becomes a live page on web and apps. That is operations, and it is the foundation of later SEO work.",
    ],
    howIUsedIt: [
      "At HSN I was an assistant digital operations manager connecting art direction and site production. I worked across multiple content systems and had to keep publishing accurate. That meant checklists, handoffs, and noticing when two systems were about to disagree about the same module.",
      "That job is why I can sit in Contentful or WordPress now without treating the CMS as a mystery. I learned early that search and design both fail when publishing is sloppy. A Vision Award for adaptability was really an award for staying calm while the systems and the people were all in motion.",
    ],
    faqs: [
      {
        question: "Why list CMS as a skill instead of only named products?",
        answer:
          "Because HSN was several systems, not one logo, and because the transferable skill is operating publishing, not memorizing a single vendor's UI.",
      },
      {
        question: "What did digital operations teach you that SEO still uses?",
        answer:
          "Source of truth, preview versus live, who can publish, and the cost of a wrong module on a high-traffic template.",
      },
      {
        question: "How do you approach a CMS you have not used yet?",
        answer:
          "I find the content types, the preview, the publish path, and the fields that map to title, body, and modules. The vendor UI is details. The workflow is the job.",
      },
    ],
    related: ["web-publishing", "wordpress", "contentful", "android"],
  },
  {
    slug: "web-publishing",
    name: "Web publishing",
    category: "Publishing",
    kind: "practice",
    summary:
      "How I ran production publishing at HSN so pages went live accurately across a high-volume enterprise site.",
    whatItDoes: [
      "Web publishing is the production craft of taking approved content and making it live: placing modules, checking links, confirming images, hitting the right template, and knowing what happens after you press publish. In retail and media it is a shift-work skill. Pages move all day, and a wrong live page is a customer-facing defect.",
      "People skip this when they talk about strategy. I do not. If you cannot publish cleanly, your strategy is a PDF. Publishing is also where accessibility, truncation, broken CTAs, and leftover seasonal modules get caught, or do not.",
    ],
    howIUsedIt: [
      "At HSN I coordinated publishing across a busy digital operation. Art direction, production, and merchandising all needed the page to be right, not almost right. I learned to treat a publish like a launch: preview, compare against the brief, check the destinations, and only then let it go live.",
      "That production habit still sits under my SEO work. When I ask for a module, an FAQ, or a metadata field, I am thinking about the person who has to enter it 200 times. If the publishing path is painful, the field will be empty and the schema will be theater.",
    ],
    faqs: [
      {
        question: "Is publishing the same as content strategy?",
        answer:
          "No. Strategy decides what should exist and why. Publishing is how it becomes a real URL without breaking the template. I have done both, and I respect both.",
      },
      {
        question: "What does a careful publish checklist include?",
        answer:
          "The right template, the right links, images that match the brief, no leftover seasonal content, and a preview that looks like what customers will see.",
      },
      {
        question: "How does publishing connect to apps?",
        answer:
          "At HSN the same operation had to consider web, Android, and iOS. A page was not done if only desktop looked right.",
      },
    ],
    related: ["content-management-systems", "android", "ios", "wordpress"],
  },
  {
    slug: "android",
    name: "Android",
    category: "Publishing",
    kind: "practice",
    summary:
      "How I coordinated Android publishing at HSN so app experiences stayed aligned with the web operation.",
    whatItDoes: [
      "Android is Google's mobile operating system, and in a retail or media company it is also a publishing destination. Content, merchandising, and campaigns do not only live on a desktop site. They show up in an app with different templates, different navigation, and different release constraints.",
      "App publishing is easy to forget in SEO conversations because crawlers care most about the web. Customers do not forget. If the app is stale or wrong, the brand still feels broken, and some journeys never return to a crawlable page.",
    ],
    howIUsedIt: [
      "At HSN I helped coordinate accurate publishing across web, Android, and iOS. That meant knowing when a change was web-only, when the app needed a matching module, and when a production win on desktop had not actually landed for mobile customers. I was not writing Kotlin. I was making sure operations did not treat the app as an afterthought.",
      "That still informs how I think about discovery. Multi-surface is not a new AI idea. HSN already needed the same story to show up in more than one client. The work is making the differences explicit so nobody assumes parity that is not there.",
    ],
    faqs: [
      {
        question: "Were you an Android developer?",
        answer:
          "No. I was on the digital operations side: making sure content and production reached the Android app accurately, alongside web and iOS.",
      },
      {
        question: "Why does an SEO site talk about Android?",
        answer:
          "Because I shipped work there, and because customer discovery does not stop at the responsive website. Operations have to include the app.",
      },
      {
        question: "What breaks when web and Android drift?",
        answer:
          "Promos, navigation, and content modules that exist in one place and not the other. Customers notice. Reports then argue about which experience is real.",
      },
    ],
    related: ["ios", "web-publishing", "content-management-systems", "zoom"],
  },
  {
    slug: "ios",
    name: "iOS",
    category: "Publishing",
    kind: "practice",
    summary:
      "How I coordinated iOS publishing at HSN so Apple-device customers saw the same operational care as web users.",
    whatItDoes: [
      "iOS is Apple's operating system for iPhone and iPad. For a company like HSN it is a major customer client: an app with its own templates, review cycle, and production path. Content that is trivial to update on the web can be slower or differently structured in the app.",
      "Operations teams that only preview Chrome are only doing part of the job. iOS has different screen constraints, different navigation patterns, and a user base that may never see the desktop module you just launched.",
    ],
    howIUsedIt: [
      "At HSN I coordinated publishing that included iOS, not only the website. Accuracy meant checking that the experience customers would actually open on a phone matched the brief. I learned to ask which surface was in scope before calling a request done.",
      "Later SEO and discovery work still benefits from that habit. When a team says the page is live, I ask where. Web, Android, iOS, and now answer engines are all surfaces. The details differ. The discipline of naming the surface does not.",
    ],
    faqs: [
      {
        question: "Did you build the HSN iOS app?",
        answer:
          "No. I worked in digital operations, coordinating publishing so iOS was part of the production path instead of a surprise after web launched.",
      },
      {
        question: "What is different about publishing for iOS?",
        answer:
          "Release timing, layout constraints, and sometimes a separate module or CMS path. Assuming web preview equals iPhone preview is how defects ship.",
      },
      {
        question: "How does this connect to your current work?",
        answer:
          "Organic discovery is multi-surface. HSN taught me to treat each client as real. Taxwell asks the same of search, communities, reviews, and AI answers.",
      },
    ],
    related: ["android", "web-publishing", "content-management-systems", "contentful"],
  },
];

const guidesBySlug = new Map(toolGuides.map((item) => [item.slug, item]));

export function getToolGuide(slug: string) {
  return guidesBySlug.get(slug);
}

export function toolGuideJobs(slug: string) {
  if (aiTools.some((item) => item.slug === slug)) {
    return ["AI toolkit"];
  }

  const fromWork = new Set<string>();
  for (const role of experience) {
    if (role.tools.some((item) => item.slug === slug)) {
      fromWork.add(role.jumpLabel);
    }
  }
  if (fromWork.size > 0) {
    return [...fromWork];
  }
  if (extraTools.some((item) => item.slug === slug)) {
    return ["Search research"];
  }
  return [];
}

export function relatedToolGuides(slug: string) {
  const current = getToolGuide(slug);
  if (!current) {
    return [];
  }
  return current.related
    .map((relatedSlug) => getToolGuide(relatedSlug))
    .filter((item): item is ToolGuide => Boolean(item));
}

export const catalogTools = [
  ...aiTools,
  ...experience.flatMap((role) => role.tools),
  ...extraTools,
].filter(
  (item, index, list) => list.findIndex((entry) => entry.slug === item.slug) === index,
);

export const missingToolGuides = catalogTools
  .map((item) => item.slug)
  .filter((slug) => !guidesBySlug.has(slug));
