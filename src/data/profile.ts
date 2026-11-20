import type { T } from '../i18n';

export const profile = {
  name: { 'zh-tw': '鄭偉助', en: 'Kenny Cheng' } as T,
  nameEn: 'Kenny Cheng',
  title: 'Product Designer · AI-Integrated Product Design',
  heroTitle: {
    'zh-tw': ['從產品的需求', '到上線介面，', '用 <em>AI Agents</em>', '串起每一步。'],
    en: ['From product needs', 'to shipped interfaces,', 'with <em>AI agents</em> at every step.'],
  },
  heroLead: {
    'zh-tw': '我有 8 年以上的產品設計經驗，整合 PM、UI/UX 與前端實作，在旅宿訂房產品中負責跨平台的需求規劃、介面設計與交付驗證。',
    en: 'Product designer with 8+ years of experience. I bring product management, UI/UX, and frontend skills together, and I\'m responsible for requirements, interface design, and delivery QA for hotel booking products across platforms.',
  } as T,
  ctaWork: { 'zh-tw': '看代表作品 ↓', en: 'See selected work ↓' } as T,
  ctaResume: { 'zh-tw': '下載一頁履歷', en: 'Download resume' } as T,
  stats: [
    { value: '8+', label: { 'zh-tw': '年產品設計經驗', en: 'years in product design' } },
    { value: '3', label: { 'zh-tw': '個訂房入口共用同一套系統', en: 'booking channels on a shared system' } },
    { value: '600+', label: { 'zh-tw': '項團隊開發任務參與', en: 'dev tickets I contributed to' } },
    { value: '129', label: { 'zh-tw': '個介面狀態畫面', en: 'UI state screens' } },
  ],
  heroTag: { 'zh-tw': '官網、LINE、銀行合作網站', en: 'Website · LINE · bank partner sites' } as T,
  contact: {
    email: 'a0911157626@gmail.com',
    phone: '0934-040-212',
    phoneIntl: '+886 934 040 212',
    portfolio: 'https://0301kenny.github.io',
    linkedin: 'https://www.linkedin.com/in/kenny-cheng-5240381ab',
    behance: 'https://www.behance.net/kennycheng0301',
    github: 'https://github.com/0301kenny',
    location: { 'zh-tw': '新北市 · 台北市 · 接受遠端或混合辦公', en: 'Based in New Taipei City and Taipei · Open to remote or hybrid work' } as T,
  },
};

export const sections = {
  work: {
    eyebrow: 'Selected Work',
    title: { 'zh-tw': '六個案例，看見研究、PM、設計與前端如何串成一條線', en: 'Six case studies where research, product, design, and code come together' } as T,
    lead: {
      'zh-tw': '每個案例都寫清楚：要解決的問題、我負責的範圍、AI 參與了什麼，以及如何驗證結果。',
      en: 'Each case study covers the problem, my role, where AI helped, and how I validated the outcome.',
    } as T,
  },
  approach: {
    eyebrow: 'How I Work',
    title: { 'zh-tw': '我怎麼和 AI 分工', en: 'How I work with AI' } as T,
    lead: {
      'zh-tw': '我習慣從定義、設計、實作，一路跟到驗證。AI 負責蒐集資料、整理內容和寫程式，方向、取捨和最後驗收由我決定。',
      en: 'I usually see a product all the way through, from definition to design, build, and QA. AI handles the legwork of gathering data, organizing content, and writing code. I set the direction, make the trade-offs, and give the final sign-off.',
    } as T,
    barLeft: { 'zh-tw': 'ChatGPT · Claude Code · Codex · Figma AI，貫穿全流程', en: 'ChatGPT · Claude Code · Codex · Figma AI, used end to end' } as T,
    barRight: { 'zh-tw': 'Human-led：需求取捨、設計品質與交付責任', en: 'Human-led: scope decisions, design quality, and responsibility for delivery' } as T,
  },
  legacy: {
    eyebrow: 'Foundation · 2008 — 2018',
    title: { 'zh-tw': ['十年品牌視覺與印前，', '是我介面品質的底子'], en: ['Ten years of brand and print design', 'shaped my eye for interface detail'] },
    lead: {
      'zh-tw': '擔任設計總監與視覺設計總監期間，負責品牌識別、包裝與印刷製作。這些經驗讓我對排版、色彩與細節有更高的標準。',
      en: 'As a design director and later a visual design director, I was responsible for brand identity, packaging, and print production. That work raised my standards for typography, color, and detail.',
    } as T,
    behance: { 'zh-tw': '在 Behance 看更多作品 ↗', en: 'More work on Behance ↗' } as T,
  },
  experience: {
    eyebrow: 'Experience',
    title: { 'zh-tw': '經歷', en: 'Career timeline' } as T,
    lead: {
      'zh-tw': '2018 年起專注於產品設計，至今 8 年；更早之前做了十年品牌與視覺設計。東海大學美術系畢業。',
      en: "I've focused on product design since 2018, after ten years in brand and visual design. I hold a BFA from Tunghai University.",
    } as T,
  },
  download: {
    eyebrow: 'Download',
    title: { 'zh-tw': '履歷與作品集', en: 'Resume and portfolio' } as T,
    lead: {
      'zh-tw': '一頁履歷與作品集摘要，方便面試前快速瀏覽，或轉給團隊一起看。',
      en: 'A one-page resume and a portfolio summary to skim before an interview or share with your team.',
    } as T,
    contactTitle: { 'zh-tw': '一起聊聊產品？', en: "Let's talk product" } as T,
    pending: { 'zh-tw': '製作中', en: 'Coming soon' } as T,
  },
};

export const approach = [
  { n: '01', title: 'Discover', role: 'Research', body: { 'zh-tw': '看使用者行為錄影、交叉比對數據，找出真正要解決的問題。', en: 'Review session recordings and cross-check them against the data to find the problem worth solving.' } },
  { n: '02', title: 'Define', role: 'PM', body: { 'zh-tw': '釐清商業目標與規則，寫成 PRD、User Story 與例外情境。', en: 'Pin down business goals and rules, then write them up as PRDs, user stories, and edge cases.' } },
  { n: '03', title: 'Design', role: 'UI / UX', body: { 'zh-tw': '資訊架構、流程與介面設計，建立元件與設計 Token。', en: 'Shape the IA, flows, and UI, then build out components and design tokens.' } },
  { n: '04', title: 'Build', role: 'Frontend', body: { 'zh-tw': 'HTML/CSS 與 Vue 實作，用 Claude Code 把設計直接做進專案。', en: 'Build in HTML/CSS and Vue, using Claude Code to put designs straight into the codebase.' } },
  { n: '05', title: 'Validate', role: 'QA', body: { 'zh-tw': 'UI QA、跨平台與多語系驗收，追蹤問題直到上線。', en: 'Run UI QA across platforms and languages, and track issues through launch.' } },
] as const;

export const legacy = [
  {
    title: { 'zh-tw': '品牌識別 CIS', en: 'Brand identity' },
    when: { 'zh-tw': '設計總監 · 帶領 3–4 人團隊', en: 'Design director · team of 3–4' },
    items: {
      'zh-tw': ['企業識別系統規劃與品牌視覺', '服務有機農業、旅宿、馬術、綠能等產業'],
      en: ['Corporate identity systems and brand visuals', 'Clients in organic farming, hospitality, equestrian sports, and green energy'],
    },
  },
  {
    title: { 'zh-tw': '包裝與印前製作', en: 'Packaging and prepress' },
    when: { 'zh-tw': '印前技術 · 印刷發包管理', en: 'Prepress · print vendor management' },
    items: {
      'zh-tw': ['商品包裝、平面文宣與出版物', '印前完稿、打樣、廠商估價與品質控管'],
      en: ['Product packaging, print collateral, and publications', 'Print-ready artwork, proofing, vendor quotes, and quality control'],
    },
    works: [
      { title: { 'zh-tw': '台灣天健生物科技 商品型錄', en: 'Taiwan Tian-Jian Biotech catalogue' }, url: 'https://www.behance.net/gallery/68162651/Catalogue-' },
      { title: { 'zh-tw': '有機店 商品型錄', en: 'Organic store catalogue' }, url: 'https://www.behance.net/gallery/68162653/Catalogue-' },
    ],
  },
  {
    title: { 'zh-tw': '多媒體與網站視覺', en: 'Multimedia and web' },
    when: { 'zh-tw': '視覺設計總監 · 多媒體開發主管', en: 'Visual design director · multimedia lead' },
    items: {
      'zh-tw': ['網站視覺規劃與網頁製作', '專案規格撰寫、可行性評估與驗收'],
      en: ['Website art direction and production', 'Project specs, feasibility reviews, and acceptance testing'],
    },
  },
] as const;

export const timeline = [
  { when: { 'zh-tw': '2023.03 — Now', en: '2023.03 — Present' }, now: true, title: 'Product Designer', org: { 'zh-tw': 'WOTA 沃塔國際旅行社 · 旅宿訂房平台、會員獎勵、郵輪產品', en: 'Wota Lifestyle · hotel booking platform, member rewards, cruise products' } },
  { when: '2018.08 — 2023.03', key: 'fusion', title: 'UI/UX Designer', org: { 'zh-tw': '融創新科 · 帶領 4 人以下設計團隊，負責 UI 系統、UX Flow 與 RWD', en: 'Fusion Next · led a design team of up to 4 working on UI systems, UX flows, and responsive design' } },
  { when: '2014.04 — 2018.02', title: { 'zh-tw': '視覺設計總監', en: 'Visual Design Director' }, org: { 'zh-tw': '台中廣天宮 · 多媒體開發主管，品牌視覺與網站規劃', en: 'Taichung Guangtian Temple · multimedia lead, brand visuals and web' } },
  { when: '2010.10 — 2013.12', title: { 'zh-tw': '設計總監', en: 'Design Director' }, org: { 'zh-tw': '岱展有限公司 · 帶領 3–4 人，品牌、包裝與 CIS', en: 'Daizhan (food retail) · led a team of 3–4 working on brand, packaging, and identity' } },
  { when: '2008.10 — 2010.09', title: { 'zh-tw': '美術企劃 / 美編', en: 'Graphic Designer' }, org: { 'zh-tw': '平面設計、出版編排與印刷製作', en: 'Graphic design, publication layout, and print production' } },
];

// 融創時期作品（Behance），只在 About 時間軸簡短帶過
export const earlyWorks = [
  { name: 'Sight', type: { 'zh-tw': '行車記錄器', en: 'Dash cam' }, year: '2020', url: 'https://www.behance.net/gallery/97365753/Sight-dash-cam-', img: 'img/behance/sight.webp' },
  { name: 'Doweing', type: { 'zh-tw': '旅遊足跡 App', en: 'Travel journal app' }, year: '2020', url: 'https://www.behance.net/gallery/97367211/Doweing', img: 'img/behance/doweing.webp' },
  { name: 'Healthy Way', type: { 'zh-tw': '飲食健身 App', en: 'Food & fitness app' }, year: '2020', url: 'https://www.behance.net/gallery/106837503/Healthy-way', img: 'img/behance/healthy.webp' },
  { name: 'travel to map', type: { 'zh-tw': '旅遊網站', en: 'Travel website' }, year: '2021', url: 'https://www.behance.net/gallery/128260943/travel-to-map', img: 'img/behance/travel.webp' },
] as const;

// 同事評語：中文為原話，不潤飾；英文為翻譯
export const testimonials = [
  { quote: { 'zh-tw': '擅於跨部門進行合作溝通及討論。', en: 'Great at collaborating across departments and talking things through.' }, by: { 'zh-tw': '融創新科 APP 工程師 · 合作 4 年', en: 'App engineer, Fusion Next · worked together for 4 years' } },
  { quote: { 'zh-tw': '台風穩健，能掌握訪談、提案報告的舒服節奏。', en: 'Composed on stage, with an easy, comfortable pace in interviews and presentations.' }, by: { 'zh-tw': 'UX 工作坊同事', en: 'Teammate from a UX workshop' } },
  { quote: { 'zh-tw': '訪談中能與受訪者迅速的建立情感認同及和緩的氛圍。', en: 'In interviews, quickly builds rapport with participants and puts them at ease.' }, by: { 'zh-tw': 'UX 工作坊同事', en: 'Teammate from a UX workshop' } },
  { quote: { 'zh-tw': '團隊中願承擔第一個上場的壓力，並肩負最重的任務。', en: 'On the team, willing to take on the pressure of going first, and to carry the heaviest tasks.' }, by: { 'zh-tw': 'UX 工作坊同事', en: 'Teammate from a UX workshop' } },
] as const;

// 和我合作：工作習慣（本人確認的草稿）
export const workingWithMe = [
  { title: { 'zh-tw': '我會把大問題切小，一步一步推進', en: 'I break big problems into small steps' }, body: { 'zh-tw': '工作會切成看得完、驗得了的小步，確認一步再走下一步；也會主動追進度，把待決的問題往前推。如果你需要更多時間想，直接說，我會調整步調。', en: "I break work into pieces small enough to review and test, and check each one before moving on. I also follow up so open questions don't hold things up. If you need more time to think something over, just say so and I'll adjust my pace." } },
  { title: { 'zh-tw': '討論前，我會先把情況想過一輪', en: 'I think it through before we meet' }, body: { 'zh-tw': '會先列出可能的情況、例外和取捨，帶著選項來討論，讓會議花在做決定，而不是重新整理問題。', en: 'I map out the possible scenarios, edge cases, and trade-offs first, then bring options, so we spend the meeting making decisions, not restating the problem.' } },
  { title: { 'zh-tw': '我會先弄懂對方在意什麼、卡在哪裡', en: "I start by understanding what people care about and where they're stuck" }, body: { 'zh-tw': '對使用者和同事都是這樣。在 Case 05 的社群研究裡，我擔任活躍用戶組的主訪，工作坊同事回饋我能很快和受訪者建立情感上的認同，讓氣氛和緩下來。', en: "That goes for users and teammates alike. In the community research in Case 05, I led interviews for the team studying active members, and my workshop teammates said I quickly built rapport and put participants at ease." } },
  { title: { 'zh-tw': '有不同意見，我會直接說，也歡迎你直接說', en: "If I disagree, I'll tell you, and I hope you'll do the same" }, body: { 'zh-tw': '我對事不對人。比起事後才發現誤會，更希望早點把分歧講開。', en: "It's about the work, not the person. I'd rather surface a disagreement early than discover a misunderstanding later." } },
] as const;

export const downloads = [
  { ext: { 'zh-tw': 'PDF · 1 頁', en: 'PDF · 1 page' }, title: { 'zh-tw': '中文履歷', en: 'Resume (Chinese)' }, desc: { 'zh-tw': '產品設計經歷、代表成果與核心能力', en: 'Product design experience, key results, and core skills' }, file: 'files/KennyCheng_ProductDesigner_Resume_2026_zh.pdf', primary: true },
  { ext: { 'zh-tw': 'PDF · 1 頁', en: 'PDF · 1 page' }, title: { 'zh-tw': 'PM 版履歷', en: 'PM resume (Chinese)' }, desc: { 'zh-tw': '著重需求定義、規格撰寫與交付驗收', en: 'Focuses on requirements, specs, and delivery QA' }, file: 'files/KennyCheng_ProductManager_Resume_2026_zh.pdf' },
  { ext: { 'zh-tw': 'PDF · 1 頁', en: 'PDF · 1 page' }, title: { 'zh-tw': 'English Resume', en: 'English Resume' }, desc: { 'zh-tw': '英文版履歷', en: 'Product design experience, key results, and core skills' }, file: 'files/KennyCheng_ProductDesigner_Resume_2026_en.pdf' },
  { ext: { 'zh-tw': 'PDF · 5 頁', en: 'PDF · 5 pages' }, title: { 'zh-tw': '作品集摘要', en: 'Portfolio summary (Chinese)' }, desc: { 'zh-tw': '四個案例的關鍵決策與成果，一案一頁', en: 'Key decisions and outcomes from four case studies, one page each' }, file: 'files/KennyCheng_Portfolio_Summary_2026_zh.pdf' },
];
