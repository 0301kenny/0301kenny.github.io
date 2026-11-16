import type { T } from '../i18n';

export const profile = {
  name: { 'zh-tw': '鄭偉助', en: 'Kenny Cheng' } as T,
  nameEn: 'Kenny Cheng',
  title: 'Product Designer · AI-Integrated Product Design',
  heroTitle: {
    'zh-tw': ['從產品問題', '到上線介面，', '用 <em>AI</em> 串起每一步。'],
    en: ['From Product Strategy', 'to Working Prototypes.'],
  },
  heroLead: {
    'zh-tw': '8 年產品設計經驗，品牌視覺出身的產品設計師。整合 PM、UI/UX 與前端實作，在旅宿產品中負責跨平台的需求規劃、介面設計與交付驗證。',
    en: 'A product designer with 8 years in product design and a background in brand and visual design. I combine product management, UI/UX, and frontend implementation to plan, design, and ship cross-platform hospitality products.',
  } as T,
  ctaWork: { 'zh-tw': '看代表作品 ↓', en: 'See selected work ↓' } as T,
  ctaResume: { 'zh-tw': '下載一頁履歷', en: 'Download resume' } as T,
  stats: [
    { value: '8+', label: { 'zh-tw': '年產品設計經驗', en: 'years in product design' } },
    { value: '4', label: { 'zh-tw': '個平台共用後端', en: 'platforms, one backend' } },
    { value: '600+', label: { 'zh-tw': '項團隊開發任務參與', en: 'team dev tasks contributed' } },
    { value: '129', label: { 'zh-tw': '個 UI 狀態規格', en: 'UI states specified' } },
  ],
  heroTag: { 'zh-tw': 'WOTA 官網 × LINE LIFF', en: 'WOTA website × LINE LIFF' } as T,
  contact: {
    email: 'a0911157626@gmail.com',
    phone: '0934-040-212',
    phoneIntl: '+886 934 040 212',
    portfolio: 'https://0301kenny.github.io',
    linkedin: 'https://www.linkedin.com/in/kenny-cheng-5240381ab',
    behance: 'https://www.behance.net/kennycheng0301',
    github: 'https://github.com/0301kenny',
    location: { 'zh-tw': '新北市 · 可接受遠端或混合辦公', en: 'New Taipei City · Remote or hybrid' } as T,
  },
};

export const sections = {
  work: {
    eyebrow: 'Selected Work',
    title: { 'zh-tw': '四個案例，看見研究、PM、設計與前端如何串成一條線', en: 'Four cases connecting research, product, design, and frontend' } as T,
    lead: {
      'zh-tw': '每個案例都寫清楚：要解決的問題、我負責的範圍、AI 參與了什麼，以及我如何驗證結果。',
      en: 'Each case covers the problem, what I owned, how AI was involved, and how I verified the result.',
    } as T,
  },
  approach: {
    eyebrow: 'How I Work',
    title: { 'zh-tw': 'AI 加速每一步，判斷與品質由我負責', en: 'AI speeds up every step. Judgment and quality stay with me.' } as T,
    lead: {
      'zh-tw': '不是同時會三種職位，而是能把同一個產品從定義、設計、實作到驗證完整推進。',
      en: 'Not three job titles at once, but one person who can move a product from definition to design, build, and validation.',
    } as T,
    barLeft: { 'zh-tw': 'ChatGPT · Claude Code · Codex · Figma AI，貫穿全流程', en: 'ChatGPT · Claude Code · Codex · Figma AI across the workflow' } as T,
    barRight: { 'zh-tw': 'Human-led：需求取捨、設計品質與交付責任', en: 'Human-led: scope, design quality, and delivery' } as T,
  },
  legacy: {
    eyebrow: 'Foundation · 2008 — 2018',
    title: { 'zh-tw': ['十年品牌視覺與印前，', '是我介面品質的底子'], en: ['Ten years of brand and print', 'behind my interface quality'] },
    lead: {
      'zh-tw': '擔任設計總監與視覺設計總監期間，負責品牌識別、包裝與印刷製作。這些經驗讓我對排版、色彩與細節有更高的標準。',
      en: 'As design director and visual design director, I led brand identity, packaging, and print production. That work set my bar for typography, color, and detail.',
    } as T,
    behance: { 'zh-tw': '在 Behance 看更多作品 ↗', en: 'More work on Behance ↗' } as T,
  },
  experience: {
    eyebrow: 'Experience',
    title: { 'zh-tw': '經歷', en: 'Experience' } as T,
    lead: {
      'zh-tw': '東海大學美術系畢業。2018 年起專注於產品設計，之前十年累積品牌與視覺設計經驗。',
      en: 'BFA, Tunghai University. Focused on product design since 2018, after ten years in brand and visual design.',
    } as T,
  },
  download: {
    eyebrow: 'Download',
    title: { 'zh-tw': '下載文件', en: 'Downloads' } as T,
    lead: {
      'zh-tw': '依職缺選擇版本。所有 PDF 都是可選取文字的格式，方便 ATS 系統讀取。',
      en: 'Pick the version that fits the role. Every PDF has selectable text for ATS systems.',
    } as T,
    contactTitle: { 'zh-tw': '一起聊聊產品？', en: "Let's talk about your product" } as T,
    pending: { 'zh-tw': '製作中', en: 'Coming soon' } as T,
  },
};

export const approach = [
  { n: '01', title: 'Discover', role: 'Research', body: { 'zh-tw': '使用者訪談、問卷與數據觀察，找出真正要解決的問題。', en: 'Interviews, surveys, and data to find the real problem.' } },
  { n: '02', title: 'Define', role: 'PM', body: { 'zh-tw': '釐清商業目標與規則，寫成 PRD、User Story 與例外情境。', en: 'Clarify goals and rules into PRDs, user stories, and edge cases.' } },
  { n: '03', title: 'Design', role: 'UI / UX', body: { 'zh-tw': '資訊架構、流程與介面設計，建立元件與設計 Token。', en: 'Information architecture, flows, UI, components, and design tokens.' } },
  { n: '04', title: 'Build', role: 'Frontend', body: { 'zh-tw': 'HTML/CSS 與 Vue 實作，用 Claude Code 把設計直接做進專案。', en: 'HTML/CSS and Vue, building designs into the codebase with Claude Code.' } },
  { n: '05', title: 'Validate', role: 'QA', body: { 'zh-tw': 'UI QA、跨平台與多語系驗收，追蹤問題直到上線。', en: 'UI QA across platforms and languages, tracked through launch.' } },
] as const;

export const legacy = [
  {
    title: { 'zh-tw': '品牌識別 CIS', en: 'Brand identity' },
    when: { 'zh-tw': '設計總監 · 帶領 3–4 人團隊', en: 'Design director · team of 3–4' },
    items: {
      'zh-tw': ['企業識別系統規劃與品牌視覺', '服務有機農業、旅宿、馬術、綠能等產業'],
      en: ['Corporate identity systems and brand visuals', 'Clients in organic farming, hospitality, equestrian, and green energy'],
    },
  },
  {
    title: { 'zh-tw': '包裝與印前製作', en: 'Packaging and prepress' },
    when: { 'zh-tw': '印前技術 · 印刷發包管理', en: 'Prepress · print vendor management' },
    items: {
      'zh-tw': ['商品包裝、平面文宣與出版物', '印前完稿、打樣、廠商估價與品質控管'],
      en: ['Product packaging, print collateral, and publications', 'Final artwork, proofing, quotes, and quality control'],
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
      en: ['Website visual planning and production', 'Project specs, feasibility review, and acceptance'],
    },
  },
] as const;

export const timeline = [
  { when: '2023.03 — Now', now: true, title: 'Product Designer', org: { 'zh-tw': 'WOTA 沃塔國際旅行社 · 旅宿訂房平台、會員獎勵、郵輪產品', en: 'Wota Lifestyle · hotel booking platform, member rewards, cruise products' } },
  { when: '2018.08 — 2023.03', title: 'UI/UX Designer', org: { 'zh-tw': '融創新科 · 帶領 4 人以下設計團隊，負責 UI 系統、UX Flow 與 RWD', en: 'Fusion Next · led a design team of up to 4, UI systems, UX flows, and RWD' } },
  { when: '2014.04 — 2018.02', title: { 'zh-tw': '視覺設計總監', en: 'Visual Design Director' }, org: { 'zh-tw': '台中廣天宮 · 多媒體開發主管，品牌視覺與網站規劃', en: 'Taichung Guangtian Temple · multimedia lead, brand visuals and web' } },
  { when: '2010.10 — 2013.12', title: { 'zh-tw': '設計總監', en: 'Design Director' }, org: { 'zh-tw': '岱展有限公司 · 帶領 3–4 人，品牌、包裝與 CIS', en: 'Daizhan · team of 3–4, brand, packaging, and identity' } },
  { when: '2008.10 — 2010.09', title: { 'zh-tw': '美術企劃 / 美編', en: 'Graphic Designer' }, org: { 'zh-tw': '平面設計、出版編排與印刷製作', en: 'Graphic design, publication layout, and print production' } },
];

export const downloads = [
  { ext: { 'zh-tw': 'PDF · 1 頁', en: 'PDF · 1 page' }, title: { 'zh-tw': '中文履歷', en: 'Resume (Chinese)' }, desc: { 'zh-tw': 'Product Designer 主版本', en: 'Product Designer, main version' }, file: 'files/KennyCheng_ProductDesigner_Resume_2026_zh.pdf', primary: true },
  { ext: { 'zh-tw': 'PDF · 1 頁', en: 'PDF · 1 page' }, title: { 'zh-tw': 'PM 版履歷', en: 'Resume (PM)' }, desc: { 'zh-tw': '偏產品管理職缺', en: 'For product management roles' }, file: 'files/KennyCheng_ProductManager_Resume_2026_zh.pdf' },
  { ext: { 'zh-tw': 'PDF · 1 頁', en: 'PDF · 1 page' }, title: { 'zh-tw': 'English Resume', en: 'English Resume' }, desc: { 'zh-tw': '外商與遠端職缺', en: 'International and remote roles' }, file: 'files/KennyCheng_ProductDesigner_Resume_2026_en.pdf' },
  { ext: { 'zh-tw': 'PDF · 精簡版', en: 'PDF · summary' }, title: { 'zh-tw': '作品集摘要', en: 'Portfolio summary' }, desc: { 'zh-tw': '四個案例的重點整理', en: 'Highlights of the four cases' }, file: '' },
];
