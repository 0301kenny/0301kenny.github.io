import type { T } from '../i18n';

const b = (zh: string, en: string): T => ({ 'zh-tw': zh, en });

export type Cap = 'pm' | 'ui' | 'fe';

export type Block =
  | { t: 'p'; text: T; todo?: boolean }
  | { t: 'h3'; text: T }
  | { t: 'callout'; title: T; text: T }
  | { t: 'decision'; q: T; a: T; text: T; todo?: boolean }
  | { t: 'figure'; src: string[]; alt: T; caption: T; phone?: boolean }
  | { t: 'table'; rows: [T, T, T][]; note?: T }
  | { t: 'stats'; items: [string, T][] }
  | { t: 'guard'; items: [T, string, T][] }
  | { t: 'flow'; items: T[] }
  | { t: 'diagram'; kind: 'channels' | 'rules' | 'funnel'; caption: T }
  | { t: 'versions'; items: [string, T][] }
  | { t: 'compare'; ai: T; me: T; source: T; title?: T; aiLabel?: T; meLabel?: T };

export interface Section {
  id: string;
  caps: Cap[];
  toc: T;
  tags: string[];
  title: T;
  blocks: Block[];
}

export interface Case {
  slug: string;
  no: string;
  period: string;
  eyebrow: string;
  title: T;
  cardTitle: T;
  lead: T;
  chips: string[];
  meta: [T, T][];
  kpis: [string, T][];
  hero: { kind: 'image'; src: string; alt: T; caption: T } | { kind: 'tiers'; caption: T };
  card: { kind: 'phones' | 'image' | 'tiers' | 'diagram'; src?: string[]; diagram?: 'funnel'; label: T };
  sections: Section[];
}

const capLabel = { pm: 'PM', ui: 'UI / UX', fe: 'Frontend' } as const;
export { capLabel };

const realShot = b('WOTA 正式站實際畫面 · 本人參與設計與規格，非獨立完成', 'Live WOTA product · I contributed design and specs, not built solo');
const realShotShort = b('WOTA 正式站實際畫面', 'Live WOTA product');

export const cases: Case[] = [
  {
    slug: 'booking',
    no: '01',
    period: '2023 — NOW',
    eyebrow: 'Case 01 · Product Design · Multi-platform',
    title: b('WOTA 跨平台旅宿訂房：\n三個前台，一套一致的體驗', 'WOTA cross-platform booking:\nthree channels, one consistent experience'),
    cardTitle: b('WOTA 跨平台旅宿訂房體驗', 'WOTA cross-platform hotel booking'),
    lead: b(
      '從主導官網 3.0 改版，到推出 LINE LIFF 訂房。官網、LIFF、白牌三個前台共用同一個後端；我負責定義流程、元件規則與語系檢查，讓訂房與會員在不同平台上保持一致。',
      'From leading the website redesign (v3.0) to launching hotel booking inside LINE (a LIFF mini-app). Three customer-facing channels share one backend; I set the flows, component rules, and language checks that keep booking and membership consistent across them.',
    ),
    chips: ['Product Design', 'UX Flow', 'i18n', 'Frontend'],
    meta: [
      [b('我的角色', 'My role'), b('官網 3.0 產品規劃與 UI/UX 主導 · LIFF UI、前端協作與驗收', 'Led website v3.0 planning and UI/UX · LIFF UI, frontend, and QA')],
      [b('產品', 'Product'), b('高端旅宿訂房平台', 'Luxury hotel booking')],
      [b('期間', 'Period'), b('2023.03 — 現在', '2023.03 — now')],
      [b('平台', 'Platforms'), b('官網 · LIFF · 白牌，共用後端與後台', 'Web · LIFF · white label, one shared backend and admin')],
    ],
    kpis: [
      ['13', b('個前台模組完成 UI 設計', 'storefront modules designed')],
      ['735', b('個共用元件', 'shared components')],
      ['3,548', b('個字串四語同步', 'strings synced in 4 languages')],
    ],
    hero: {
      kind: 'image',
      src: 'img/real/official-home.jpg',
      alt: b('WOTA 官網首頁：全版旅宿照片與搜尋列', 'WOTA homepage with full-bleed hotel photo and search bar'),
      caption: realShot,
    },
    card: { kind: 'phones', src: ['img/real/liff-home.jpg', 'img/real/liff-room-list.jpg'], label: b('LINE LIFF 正式站畫面', 'Live LINE LIFF screens') },
    sections: [
      {
        id: 'problem', caps: ['pm'], tags: ['PM'], toc: b('問題', 'Problem'),
        title: b('訂房和會籍要人工處理，三個前台說法又不一致', 'Manual bookings and memberships, and three storefronts out of sync'),
        blocks: [
          { t: 'p', text: b('舊官網以內容和文章為主，訂房與會員流程分散，很多客製需求要靠人工處理。公司希望引導客人加入會員後自行訂房。', 'The old site was content-first. Booking and membership flows were scattered and many requests were handled manually. The company wanted members to book without manual help.') },
          { t: 'p', text: b('之後 LINE LIFF（在 LINE 裡打開的訂房網頁）和銀行白牌（掛銀行品牌的訂房站）陸續加入。三個前台共用同一個後端，但各有不同的使用情境與技術限制，只要流程、文案或規則對不上，客人就會在不同入口看到不同說法。', 'Then a LINE mini-app (LIFF) and bank white-label sites joined. All three share one backend but have different contexts and limits, so any drift in flow, copy, or rules shows guests conflicting answers.') },
          { t: 'callout', title: b('目標', 'Goal'), text: b('讓客人不論從哪個入口進來，都能用一致的流程完成搜尋、訂房與會員操作，並且支援繁中、簡中、英文、日文 4 種語系。', 'Whichever door guests use, they search, book, and manage membership through the same flow, in Traditional Chinese, Simplified Chinese, English, and Japanese.') },
          { t: 'diagram', kind: 'channels', caption: b('示意圖 · 依專案文件中的數字重繪', 'Diagram · redrawn from project figures') },
          { t: 'h3', text: b('時間軸', 'Timeline') },
          { t: 'versions', items: [
            ['2023', b('主導官網 3.0 產品規劃與全站 UI/UX：研究競品、建立參考庫、自建進度表逐頁控管', 'Led website v3.0 planning and UI/UX: competitive research, reference library, page-by-page tracking')],
            ['2024', b('主持 UAT（上線前驗收）收斂 30 項問題，官網 3.0 上線', 'Ran UAT on 30 issues; website v3.0 launched')],
            ['2025', b('整理四語系文案檔與多語系（i18n）作業流程；LIFF 登入註冊開發', 'Four-language copy files and an i18n process; LIFF sign-in work')],
            ['2026', b('LINE LIFF 5 月上線、7 月加入信用卡購買會籍與英文版；Figma 四語系整理', 'LINE LIFF launched in May, adding card membership purchase and English in July; Figma four-language cleanup')],
          ] },
        ],
      },
      {
        id: 'decisions', caps: ['pm', 'ui'], tags: ['PM', 'UI / UX'], toc: b('關鍵決策', 'Decisions'),
        title: b('三個關鍵決策', 'Three key decisions'),
        blocks: [
          { t: 'decision', q: b('改版要怎麼控管 79 個頁面？', 'How do you track a 79-page redesign?'), a: b('自建進度表，每頁走同一條流程', 'One tracker, one path for every page'), text: b('每頁都依「UI 初版 → 定稿 → Jira → 桌機與手機切版 → 串 API → 驗收」推進，2023 年 10 月時 79 頁中 70 頁完成初版、49 頁定稿。', 'Every page moved through first draft → final → Jira → desktop and mobile build → API → QA. By October 2023, 70 of 79 pages had drafts and 49 were final.') },
          { t: 'decision', q: b('LIFF 的文案要自己寫，還是跟官網一致？', 'Should LIFF have its own copy or match the website?'), a: b('以官網用語為準，只有 LIFF 專屬功能才自訂', 'Website wording is the source of truth; LIFF-only features get custom copy'), text: b('比對兩邊 774 個 i18n key，標出一致、有差異、無法配對三種狀態，再系統化修正。', 'I compared 774 i18n keys on both sides, marked each as matched, different, or unmatched, then fixed them systematically.') },
          { t: 'decision', q: b('客人習慣用官網，怎麼讓他們改用 LINE？', 'Guests prefer the website. How do we move them to LINE?'), a: b('不強迫切換，在既有接觸點加入 LINE 入口', 'No forced switch; add LINE entry points where guests already are'), text: b('在訂單完成頁與入住提醒信加上「加入 LINE，隨時查看訂單」的引導，並與行銷、銷售團隊協同素材與追蹤方式。', 'Added "Join LINE to track your booking" prompts on the confirmation page and check-in reminder emails, aligned with marketing and sales on assets and tracking.') },
        ],
      },
      {
        id: 'design', caps: ['ui'], tags: ['UI / UX'], toc: b('介面設計', 'Design'),
        title: b('一套元件，撐起官網、LIFF 與通知信', 'One component system across web, LIFF, and email'),
        blocks: [
          { t: 'p', text: b('官網 3.0 的 Figma 檔共 28 頁。光是其中 12 個模組頁，就有約 310 個桌機與手機畫面，每頁都附給工程的行為說明。735 個元件拆成 11 個共用元件庫，官網、LIFF 與通知信都用同一套。', 'The website v3.0 Figma file has 28 pages. Just 12 of its module pages hold about 310 desktop and mobile screens, each with behavior notes for engineering. 735 components live in 11 shared libraries used by the website, LIFF, and notification emails.') },
          { t: 'figure', src: ['img/real/official-room-list.jpg'], alt: b('WOTA 官網房型列表', 'WOTA website room list'), caption: realShotShort },
          { t: 'p', text: b('LIFF 是在 LINE 裡打開的網頁，畫面更窄、操作更依賴大拇指。設計延續官網的高端調性，Figma 共 24 頁、約 238 個手機畫面、259 個元件，並寫成設計系統手冊 v1.3。', 'LIFF runs inside LINE: narrower and thumb-first. The design carries the website\'s luxury tone across 24 Figma pages, about 238 mobile screens, and 259 components, documented in design system v1.3.') },
          { t: 'figure', phone: true, src: ['img/real/liff-home.jpg', 'img/real/liff-hotel-detail.jpg', 'img/real/liff-room-list.jpg'], alt: b('LINE LIFF 首頁、酒店詳情與房型列表', 'LINE LIFF home, hotel detail, and room list'), caption: realShotShort },
          { t: 'h3', text: b('可及性與數據', 'Accessibility and data') },
          { t: 'p', text: b('依 WCAG 檢查對比度與可讀性。上線後訂房流程卡在哪一步，我在 2026 年用 Clarity 錄影與熱點圖做了完整分析，詳見 Case 04。', 'Checked contrast and legibility against WCAG. Where the live booking flow gets stuck, I later analyzed with Clarity recordings and heatmaps in 2026; see Case 04.') },
        ],
      },
      {
        id: 'build', caps: ['fe'], tags: ['FE'], toc: b('實作與驗證', 'Build'),
        title: b('從 UAT 到四語同步，把設計和程式對齊', 'From UAT to four-language sync, keeping design and code aligned'),
        blocks: [
          { t: 'p', text: b('官網 3.0 的切版由工程師完成，我負責逐頁比對設計還原度：2023 年 8 月到 2024 年 3 月留下 54 張修正截圖，UAT 回報 30 項並收斂。2026 年起，我搭配 AI 參與 LIFF 前端，清掉 250 多處不一致的樣式，也整理出 Figma、程式、文件三方衝突 42 項。', 'Engineers built website v3.0; I checked it against the design page by page, logging 54 correction screenshots from Aug 2023 to Mar 2024 and closing 30 UAT issues. From 2026 I worked on the LIFF frontend with AI, cleaning up 250+ inconsistent styles and listing 42 conflicts between Figma, code, and docs.') },
          { t: 'table', rows: [
            [b('規格', 'Specs'), b('整理跨平台需求、比對官網與 LIFF 文件差異', 'Summarize cross-platform needs, diff website and LIFF docs'), b('決定哪些流程要一致、哪些保留平台差異', 'Decide which flows must match and which stay platform-specific')],
            [b('文案', 'Copy'), b('產出 774 個 i18n key 的比對表與建議對照', 'Generate the 774-key comparison and suggested matches'), b('判斷差異是否合理、親自審核 138 筆判定', 'Judge each difference; personally reviewed 138 decisions')],
            [b('驗收', 'QA'), b('整理測試案例與 Slack 回報的問題', 'Compile test cases and issues reported in Slack'), b('實際操作驗收、判斷優先順序與是否上線', 'Hands-on QA, prioritize, and decide go or no-go')],
          ] },
          { t: 'h3', text: b('四語系文案整理', 'Four-language copy cleanup') },
          { t: 'stats', items: [['3,548', b('個官網字串同步成 Figma 四語變數', 'site strings synced to Figma variables')], ['2,615', b('個 Figma 文字全部綁定變數', 'Figma text layers bound, 100%')], ['0', b('個已綁定文字四語不一致', 'mismatches in bound text')], ['774', b('個 LIFF 文案項目與官網比對', 'LIFF copy keys compared with the website')]] },
          { t: 'callout', title: b('測試資料的教訓', 'A lesson about test data'), text: b('正式環境出現真實客人的資料後，才發現護照英文姓名的格式問題。之後測試改成補上中文姓名、英文護照名等真實資料型案例，而不是隨意填寫的測試資料。', 'A passport-name format bug only appeared with real guest data in production. Testing now uses realistic cases such as Chinese names and English passport names instead of random filler.') },
          { t: 'compare', ai: b('Figma 裡還有 36 個舊變數被畫面引用，AI 判斷「有引用就不能刪」，建議全部保留。', 'Figma still had 36 legacy variables in use. The AI concluded "in use means keep" and proposed keeping them all.'), me: b('我指出「改套用到正式變數不就可以刪了」。流程改成先改綁、再檢查、最後刪除：這 36 個舊變數在畫面上共 122 處引用，全部改綁。整體清理後，變數從 271 個降到 219 個，壞掉的引用 0 個。', 'I pointed out they could be rebound to the official variables and then removed. The flow became rebind, check, then delete: the 36 variables were used in 122 places, all rebound. After the full cleanup, variables went from 271 to 219 with zero broken references.'), source: b('2026 年 7～8 月 · Figma 四語系遷移時', 'Jul–Aug 2026 · during the Figma four-language migration') },
        ],
      },
      {
        id: 'outcome', caps: ['pm', 'ui', 'fe'], tags: ['Outcome'], toc: b('成果與反思', 'Outcome'),
        title: b('訂房與會籍改為線上自助，LINE 成為新通路', 'Self-service booking and membership, plus a new LINE channel'),
        blocks: [
          { t: 'p', text: b('官網 3.0 上線後，訂房、會籍購買、續約與信用卡付款都能在線上自助完成；這是團隊一起交付的成果，我負責產品規劃、UI/UX 與驗收。LINE LIFF 在 2026 年 5 月上線，7 月加入信用卡購買會籍、英文版與 LINE 訂房通知。', 'After website v3.0, booking, membership purchase, renewal, and card payment became self-service. This was a team release; I owned planning, UI/UX, and QA. LINE LIFF launched in May 2026, adding card-based membership purchase, English, and LINE booking notifications in July.') },
          { t: 'h3', text: b('關於成效數字', 'About impact numbers') },
          { t: 'p', text: b('這兩次改版沒有可以歸因到個人的營收或轉換數據，所以這裡只寫交付範圍。', 'There are no revenue or conversion figures attributable to me for these releases, so this page reports scope only.') },
          { t: 'h3', text: b('還沒完成的', 'Still open') },
          { t: 'p', text: b('LIFF 與官網比對時，有 209 個文案項目找不到對應，仍需逐一判斷；LIFF 元件庫的完整盤點也還在進行。', '209 LIFF copy keys have no website match and still need review, and the LIFF component inventory is not finished yet.') },
          { t: 'h3', text: b('如果重來一次', 'If I did it again') },
          { t: 'p', text: b('官網 3.0 改版前沒有追蹤資料，LIFF 也不在同一個追蹤專案裡，所以現在很難證明這兩次改版帶來多少成效。下次改版前，我會先定義要看的指標和事件，讓上線前後可以直接比較。', 'There was no tracking baseline before website v3.0, and LIFF sits in a separate analytics project, so it is hard to prove what these releases achieved. Next time I will define metrics and events before launch so before and after can be compared directly.') },
        ],
      },
    ],
  },
  {
    slug: 'rewards',
    no: '02',
    period: '2025 — 2026',
    eyebrow: 'Case 02 · Product Management · Systems Thinking',
    title: b('WOTA Journey Rewards：\n把複雜規則變成可交付的規格', 'WOTA Journey Rewards:\nturning complex rules into shippable specs'),
    cardTitle: b('WOTA Journey Rewards：把複雜規則變成可交付的規格', 'WOTA Journey Rewards: complex rules into shippable specs'),
    lead: b(
      '會員等級、房晚入帳、升等積分、兌換與庫存規則彼此牽動。我把規則落成 PRD、IA 與可操作的原型，讓設計、工程、客服用同一套說法。',
      'Tiers, room-night credit, upgrade points, redemption, and inventory all affect each other. I turned the rules into a PRD, IA, and working prototypes so design, engineering, and support speak the same language.',
    ),
    chips: ['Product Management', 'PRD', 'Edge Cases', 'Prototype'],
    meta: [
      [b('我的角色', 'My role'), b('PRD · IA · 互動原型 · 前台 UI', 'PRD · IA · prototypes · frontend UI')],
      [b('規則架構', 'Rule framework'), b('由產品負責人定義', 'Defined by the product owner')],
      [b('期間', 'Period'), b('2025.01 — 2026', '2025.01 — 2026')],
      [b('狀態', 'Status'), b('Phase 1 於 2026 Q3 在官網與 LIFF 上線', 'Phase 1 live on web and LIFF since Q3 2026')],
    ],
    kpis: [
      ['18', b('種兌換狀態頁', 'redemption states')],
      ['28', b('題升等規則定案', 'upgrade rules settled')],
      ['4', b('處權益改寫被攔下', 'benefit changes caught')],
    ],
    hero: {
      kind: 'image',
      src: 'img/real/official-membership.jpg',
      alt: b('WOTA 官網會籍頁：Basic、Elite、Platinum、Noir 四級會籍卡', 'WOTA membership page with Basic, Elite, Platinum, and Noir tiers'),
      caption: b('WOTA 官網會籍頁（公開頁面）· Journey Rewards 在此會籍基礎上運作', 'WOTA membership page (public) · Journey Rewards builds on these tiers'),
    },
    card: { kind: 'image', src: ['img/real/official-membership.jpg'], label: b('WOTA 官網會籍頁', 'WOTA membership page') },
    sections: [
      {
        id: 'problem', caps: ['pm'], tags: ['PM'], toc: b('問題', 'Problem'),
        title: b('一條規則改了，會牽動 UI、API、帳本和客服說法', 'Change one rule and the UI, API, ledger, and support script all move'),
        blocks: [
          { t: 'p', text: b('Journey Rewards 是會員獎勵計畫：會員入住後累積「房晚」（用來兌換禮遇）與「升等積分」（決定會籍等級）。規則本身不難懂，難的是它們互相影響：', 'Journey Rewards is a loyalty program: stays earn room nights, used for rewards, and upgrade points, which set the member tier. Each rule is simple; the hard part is how they interact:') },
          { t: 'flow', items: [b('入住', 'Stay'), b('房晚入帳', 'Room-night credit'), b('升等積分', 'Upgrade points'), b('升級與保級', 'Upgrade and retention'), b('兌換與庫存', 'Redemption and inventory')] },
          { t: 'p', text: b('同一套規則要同時出現在官網與 LIFF 的介面、後端 API 與帳本、QA 測試案例，以及客服 FAQ。而且我先前的版本和產品負責人發布的新規則互相衝突。', 'The same rules appear in the web and LIFF UI, the backend API and points ledger, QA cases, and the support FAQ. On top of that, my earlier version conflicted with the product owner\'s new rules.') },
          { t: 'callout', title: b('目標', 'Goal'), text: b('把規則整理成一份所有角色都能對照的規格，並讓例外情境在開發前就被看見，而不是上線後才被客人發現。', 'One spec every role can check against, with edge cases surfaced before development instead of after launch.') },
        ],
      },
      {
        id: 'decisions', caps: ['pm'], tags: ['PM'], toc: b('關鍵決策', 'Decisions'),
        title: b('三個關鍵決策', 'Three key decisions'),
        blocks: [
          { t: 'decision', q: b('我的舊版本和產品負責人的新規則衝突，怎麼整合成一份？', 'My earlier version conflicted with the product owner\'s new rules. How do they become one spec?'), a: b('以新規則為唯一來源，把兩版整合成 PRD v2.2', 'Treat the new rules as the single source of truth and merge both into PRD v2.2'), text: b('我先前的版本以「1 晚＝1 點、點數可換會籍」為主軸。整合成 PRD v2.2 時，點數拆成只決定等級的「升等積分」與逐筆 24 個月到期的「累計房晚」，移除點數換會籍，改成達標自動升級。', 'My earlier version used "1 night = 1 point, points buy membership." In PRD v2.2, points split into upgrade points that set the tier and room nights that each expire after 24 months; buying membership with points was replaced by automatic upgrades.') },
          { t: 'decision', q: b('房晚要算付費的晚數，還是實際入住的晚數？', 'Count paid nights or nights actually stayed?'), a: b('以有效入住晚數為基準', 'Count effective nights stayed'), text: b('例如「住三付二」這類贈送的房晚也應該計入。這個決定要同步到 PRD、API、帳本、QA 與客服 FAQ，不能只改其中一處。', 'Complimentary nights, such as stay-three-pay-two, also count. The decision had to reach the PRD, API, points ledger, QA, and FAQ together.') },
          { t: 'diagram', kind: 'rules', caption: b('示意圖 · 依專案文件中的數字重繪', 'Diagram · redrawn from project figures') },
          { t: 'decision', q: b('兩種累積機制同時推進，要一次做完還是分段上線？', 'Two earning systems at once: ship together or in phases?'), a: b('分段上線，先定義 Phase 1 範圍', 'Phased, starting with a defined Phase 1'), text: b('釐清房晚與積分並行的依賴，把「舊積分停止累積」「新功能可分批開關」「舊資料轉移」拆成獨立任務，降低一次上線過多功能的風險。', 'I mapped the dependencies between nights and points and split freezing the old points, feature switches for staged release, and data migration into separate tasks to reduce release risk.') },
        ],
      },
      {
        id: 'design', caps: ['ui'], tags: ['UI / UX'], toc: b('流程與原型', 'Design'),
        title: b('用可操作的原型，取代口頭說明', 'Working prototypes instead of verbal explanations'),
        blocks: [
          { t: 'p', text: b('只有 IA 時，失敗、暫停、連結失效這些狀態都沒有定義。我做了 4 支互相串接的互動原型，讓工程與客服可以直接操作。', 'With only an IA, states like failure, pause, and expired links were undefined. I built four linked interactive prototypes that engineering and support could click through.') },
          { t: 'stats', items: [['4', b('支互相串接的原型', 'linked prototypes')], ['18', b('種兌換狀態頁', 'redemption state pages')], ['28', b('題升等規則逐題定案', 'upgrade rules decided')], ['5', b('份 IA', 'IA documents')]] },
          { t: 'p', text: b('兌換中心的 18 種狀態依優先級分成三批：P0 6 種、P1 7 種、P2 5 種。升等積分原型把 28 個規則問題逐題列出選項，讓團隊逐題拍板，最後定案「效期結束時積分歸零，會籍一律降一級」。兩支互相矛盾的規則原型也合併成一支，讓原型、IA、Figma、設計系統四處一致。', 'The 18 redemption states are prioritized in three batches: 6 P0, 7 P1, and 5 P2. The upgrade-points prototype laid out 28 rule questions with options so the team could decide each one, ending with "points reset at the end of the qualifying period, and members drop one tier." Two conflicting rule prototypes were merged so prototype, IA, Figma, and design system all agree.') },
          { t: 'h3', text: b('名詞統一', 'One set of terms') },
          { t: 'p', text: b('「可兌換房晚」改為「累計房晚」，並統一使用「房晚」而不是夜泊或點數。i18n、介面、PRD 與客服說法都改用同一組詞。', '"Redeemable nights" became "accumulated nights," and "room nights" replaced mixed terms. i18n, UI, PRD, and support all use the same words.') },
        ],
      },
      {
        id: 'build', caps: ['fe'], tags: ['FE'], toc: b('實作與驗證', 'Build'),
        title: b('規格要能直接被實作，也要能被驗證', 'Specs that can be built and verified'),
        blocks: [
          { t: 'p', text: b('Phase 1 的工程任務由工程團隊開立，我負責追蹤進度。前台部分，我用 Claude Code 參與 Journey Rewards 頁面與 LIFF「我的房晚紀錄」的實作並串接 API。', 'Engineering created the Phase 1 tickets and I tracked progress. On the frontend, I used Claude Code to help build the Journey Rewards pages and LIFF "My room nights," wired to the API.') },
          { t: 'table', rows: [
            [b('規則', 'Rules'), b('整理規則、比對各版文件、探索流程分支', 'Organize rules, diff versions, explore branches'), b('判斷衝突、決定以哪份規則為準', 'Resolve conflicts and pick the source of truth')],
            [b('規格', 'Specs'), b('產生 PRD 與兌換規格初稿、例外情境檢查清單', 'Draft the PRD, redemption spec, and edge-case checklist'), b('確認使用者體驗與交付範圍', 'Confirm the experience and delivery scope')],
            [b('前台', 'Frontend'), b('以 Claude Code 調整頁面、文字與路由', 'Adjust pages, copy, and routes with Claude Code'), b('審查畫面與程式、跟著節點驗收', 'Review screens and code, sign off at each gate')],
          ] },
          { t: 'compare',
            title: b('過程證據：AI 比對，我判斷', 'Evidence: AI compares, I judge'),
            aiLabel: b('AI 負責', 'AI did'), meLabel: b('我的判斷', 'My judgment'),
            ai: b('新版兌換流程概念稿有 16 頁。我用 Codex 把每一頁和 UI Spec（Case 03 開發中的工具）裡的現行畫面比對，列出所有文字與欄位的差異。', 'A new redemption-flow concept had 16 screens. I had Codex compare each one against the current screens in UI Spec, the in-development tool from Case 03, and list every text and field difference.'),
            me: b('我從差異裡挑出 4 處改到會員權益的地方：機場接送少了「禮賓」、通關服務刪掉「出境」、特定酒店的早餐禮遇消失、「Elite 可兌換」被改成「Elite 規格」，兌換資格的意思跟著變了。這 4 處標出來交給團隊，避免新稿在不知不覺中改掉已定案的權益。', 'From those differences I picked out 4 that changed member benefits: the airport transfer lost "concierge," the fast-track service dropped "departure," a hotel breakfast benefit disappeared, and "Elite can redeem" became "Elite spec." I flagged them for the team so a new draft could not quietly rewrite settled benefits.'),
            source: b('2026 年 11 月 · 審查新版兌換流程概念稿時', 'Nov 2026 · while reviewing a new redemption-flow concept') },
        ],
      },
      {
        id: 'outcome', caps: ['pm', 'ui', 'fe'], tags: ['Outcome'], toc: b('成果與反思', 'Outcome'),
        title: b('Phase 1 上線，各角色對著同一份規格工作', 'Phase 1 shipped with one shared spec'),
        blocks: [
          { t: 'p', text: b('Phase 1 已在正式站上線：官網 Journey Rewards（房晚紀錄、升等積分、兌換中心、我的禮品券）與 LIFF「我的房晚紀錄」。PM、前後端、QA 與客服對著同一份可操作的規格工作。', 'Phase 1 is live: Journey Rewards on the website (room nights, upgrade points, redemption center, my vouchers) and LIFF "My room nights." PM, engineering, QA, and support work from one clickable spec.') },
          { t: 'versions', items: [
            ['2025-01', b('房晚累積獎勵表', 'Room-night rewards table')],
            ['v2.0', b('我的版本：1 晚＝1 點、點數可換會籍', 'My version: 1 night = 1 point, points buy membership')],
            ['v2.1', b('產品負責人發布新版規則架構', 'Product owner publishes the new rule framework')],
            ['v2.2', b('2026-05-22 整合成 PRD v2.2 與 5 份 IA', 'Merged into PRD v2.2 and 5 IA documents (2026-05-22)')],
            ['2026 Q3', b('分段上線：官網 Journey Rewards 與 LIFF「我的房晚紀錄」', 'Phased launch: website Journey Rewards and LIFF "My room nights"')],
            ['2026-10', b('4 支串接原型與 Figma、設計系統 v1.3 完成同步', 'Four linked prototypes synced with Figma and design system v1.3')],
          ] },
          { t: 'h3', text: b('還沒完成的', 'Still open') },
          { t: 'p', text: b('兌換中心還有 9 項規則待決定；後續階段的部分工程任務仍在排程中。', 'Nine redemption rules are still undecided, and some later-phase engineering tasks are still scheduled.') },
          { t: 'h3', text: b('如果重來一次', 'If I did it again') },
          { t: 'p', text: b('規則在 PRD 和 IA 階段主要靠文件與口頭溝通，失敗、暫停這些狀態要到做原型時才被看見。下次在 PRD 階段就做可操作的原型，讓工程、客服和產品負責人一開始就對著同一個畫面討論。', 'During the PRD and IA stages the rules lived in documents and conversations, and states like failure and pause only surfaced in prototyping. Next time I will build a clickable prototype at the PRD stage so engineering, support, and the product owner discuss the same screen from day one.') },
        ],
      },
    ],
  },
  {
    slug: 'ui-spec',
    no: '03',
    period: '2026 · BUILT WITH CLAUDE CODE',
    eyebrow: 'Case 03 · Frontend × AI · Built with Claude Code',
    title: b('UI Spec：設計師用 AI\n做出團隊的規格工具', 'UI Spec: a spec tool\nI designed and built with AI'),
    cardTitle: b('UI Spec：設計師用 AI 做出團隊的規格工具', 'UI Spec: a team spec tool I built with AI'),
    lead: b(
      '讓設計、PM 與 QA 不必換帳號、不必等後端，就能看到每個會籍、每種狀態的真實畫面。',
      'Design, PM, and QA can see the real screen for every tier and state without switching accounts or waiting for backend.',
    ),
    chips: ['Frontend × AI', 'Claude Code', 'Vue / Quasar', 'Design Token'],
    meta: [
      [b('我的角色', 'My role'), b('發起、規劃、設計與實作', 'Initiated, planned, designed, built')],
      [b('產品', 'Product'), b('WOTA 官網會員中心', 'WOTA member center')],
      [b('期間', 'Period'), b('2026.08 — 11', '2026.08 — 11')],
      [b('狀態', 'Status'), b('開發環境，尚未上正式站', 'Dev environment, not yet in production')],
    ],
    kpis: [
      ['129', b('個狀態畫面', 'state screens')],
      ['5', b('層防線', 'safeguard layers')],
      ['2', b('個影響正式站會員的 bug', 'bugs affecting live members, found in dev')],
    ],
    hero: {
      kind: 'image',
      src: 'img/uispec-overview.svg',
      alt: b('UI Spec 工具畫面示意：左側分組導覽、上方寬度與語系切換、右側多張狀態卡片', 'UI Spec illustration: grouped navigation, width and language switches, and state cards'),
      caption: b('示意圖 · 內部工具未公開，資料與名稱皆為虛構', 'Illustration · internal tool, fictional data'),
    },
    card: { kind: 'image', src: ['img/uispec-overview.svg'], label: b('示意圖 · 資料與名稱為虛構', 'Illustration · fictional data') },
    sections: [
      {
        id: 'problem', caps: ['pm'], tags: ['PM'], toc: b('問題', 'Problem'),
        title: b('要看一個狀態，得先換帳號、重現情境', 'Seeing one state meant switching accounts and recreating the scenario'),
        blocks: [
          { t: 'p', text: b('會員中心與 Journey Rewards 的畫面會隨會籍等級、點數餘額、庫存與日期規則變化。過去要確認某個狀態長什麼樣子，必須準備對應的帳號與資料，還要等 API 和登入功能正常。', 'Member center and Journey Rewards screens change with tier, balance, stock, and dates. Checking one state used to require matching accounts and data, plus a working API and login.') },
          { t: 'p', text: b('結果是驗收很費工，很多例外狀態要到很晚才被看見。', 'Reviews were slow, and many edge states surfaced late.') },
          { t: 'callout', title: b('目標', 'Goal'), text: b('讓團隊在不登入、不連後端的情況下，直接看到每一個會籍、每一種狀態的真實畫面，而且畫面跟正式頁面來自同一份程式。', 'Let the team see every tier and state without logging in or calling the backend, using the same code as the production pages.') },
        ],
      },
      {
        id: 'decisions', caps: ['pm', 'fe'], tags: ['PM', 'FE'], toc: b('關鍵決策', 'Decisions'),
        title: b('三個關鍵決策', 'Three key decisions'),
        blocks: [
          { t: 'decision', q: b('用截圖、Figma，還是真的元件？', 'Screenshots, Figma, or real components?'), a: b('選擇渲染正式頁面的真元件', 'Render the real production components'), text: b('截圖和設計稿會跟實際程式脫節。副本頁的 template 跟正式頁面一字不差，只把資料換成假的，看到的就是使用者會看到的。', 'Screenshots and mockups drift from code. Each preview uses the production page template with controlled fake data, so it shows what users see.') },
          { t: 'decision', q: b('手機版要用縮小的桌機畫面，還是真的重排？', 'Shrink the desktop view, or truly reflow?'), a: b('依選定寬度重新判斷版面', 'Recompute the layout for the chosen width'), text: b('把樣式裡跟寬度有關的判斷依選定寬度重新計算，1440、1280、1024、375 四種寬度都是真的重排，手機寬度會換成手機版元件。', 'The tool renders real responsive behavior at 1440, 1280, 1024, and 375px instead of shrinking one desktop screen, and mobile widths switch to mobile components.') },
          { t: 'decision', q: b('假資料工具最怕流進正式站，怎麼防？', 'A fake-data tool must never reach production. How?'), a: b('五層防線，不靠人記得', 'Five automated safeguards, not memory'), text: b('從網址、網域、部署、打包到程式檢查各設一道關卡，任何一層發現工具要進正式環境就會擋下。', 'Five automatic checks, from URLs and domains to deployment, build, and code checks, each stop the tool from reaching production.') },
        ],
      },
      {
        id: 'design', caps: ['ui'], tags: ['UI / UX'], toc: b('工具設計', 'Design'),
        title: b('讓不同角色都能快速找到要看的狀態', 'Helping every role find the state they need fast'),
        blocks: [
          { t: 'p', text: b('工具本身也是一個要設計的產品。使用者是設計師、PM 與 QA，他們要的不是程式碼，而是「我想看的那個狀態在哪裡」。', 'The tool is a product too. Its users are designers, PMs, and QA, and what they want is not code but where the state they care about lives.') },
          { t: 'h3', text: b('資訊架構', 'Information architecture') },
          { t: 'p', text: b('左側分成總覽、最近修改、頁面副本、設計 Token（顏色、字級等共用設定）四區。頁面副本依產品分成 5 組，每張卡片標示狀態名稱與是否待確認。', 'Four areas on the left: overview, recent changes, page previews, and design tokens. Previews split into 5 product groups, each card labeled with its state and whether it still needs a decision.') },
          { t: 'h3', text: b('瀏覽方式', 'Browsing') },
          { t: 'p', text: b('上方可切換 4 種寬度與繁中、簡中、EN 三種語系，搭配輔助線、以游標為中心縮放與搜尋。格子內的互動和真站一致，假 API 可以切換成功或失敗，網址會記住目前的分組與卡片，可以直接貼給同事。', 'Switch between 4 widths and 3 languages, with guides, cursor-centered zoom, and search. Interactions inside each cell match the live site, fake APIs can toggle success or failure, and the URL keeps the current group and card for sharing.') },
          { t: 'figure', src: ['img/uispec-overview.svg'], alt: b('UI Spec 分組導覽與狀態卡片示意', 'UI Spec grouped navigation and state cards'), caption: b('示意圖 · 375 寬下的 Journey Rewards 狀態畫廊', 'Illustration · Journey Rewards gallery at 375px') },
        ],
      },
      {
        id: 'build', caps: ['fe'], tags: ['FE'], toc: b('實作與驗證', 'Build'),
        title: b('用 Claude Code 實作，由我負責判斷與驗證', 'Built with Claude Code, judged and verified by me'),
        blocks: [
          { t: 'p', text: b('工具建在公司既有的 Vue / Quasar 專案裡，必須遵守原本的程式規範。副本只要和正式頁面不一致，程式檢查就會報錯，再用一個指令就能同步回來。', 'The tool lives in the existing Vue / Quasar codebase and follows its coding rules. If a preview drifts from its production page, the code check fails, and one command brings it back in sync.') },
          { t: 'table', rows: [
            [b('規劃', 'Plan'), b('整理頁面清單、狀態組合與檔案結構草案', 'Draft page list, state combinations, and file structure'), b('決定要做真元件副本、範圍與分組方式', 'Choose real-component copies, scope, and grouping')],
            [b('實作', 'Build'), b('產生副本頁、假資料與寬度重排的程式', 'Generate copies, fake data, and width reflow code'), b('審查程式、要求符合既有規範與 lint', 'Review code, enforce standards and lint')],
            [b('驗證', 'Verify'), b('比對副本與正式頁面的差異', 'Diff copies against production'), b('逐一檢查畫面、判斷是否為真正的問題', 'Inspect each screen and judge real issues')],
          ] },
          { t: 'h3', text: b('五層防線', 'Five safeguards') },
          { t: 'guard', items: [
            [b('網址', 'URLs'), '', b('正式版不會產生工具的網址', 'Production builds leave out the tool\'s pages')],
            [b('網域', 'Domain'), '', b('只在開發網域打得開', 'Opens on development domains only')],
            [b('部署', 'Deploy'), '', b('部署設定不會把工具帶上正式站', 'Deployment config never ships the tool')],
            [b('打包', 'Build'), '', b('只要有殘留，打包就直接失敗', 'The build fails if anything is left behind')],
            [b('程式', 'Code'), '', b('檢查正式程式沒有引用工具', 'Checks that production code never imports the tool')],
          ] },
          { t: 'compare', ai: b('AI 一次處理的範圍太大，每批要跑很久，跑完我沒辦法逐項確認做對了沒有。', 'The AI took on too much per batch; each run took so long I couldn\'t verify what it had done.'), me: b('我要求重新切分任務粒度：每批 30 到 90 秒、最多寫入 5 個。每一批都小到我看得完、驗得了，才繼續下一批。', 'I had it re-slice the work: 30–90 seconds per batch, at most 5 writes. Every batch was small enough for me to review before the next one ran.'), source: b('這是 2026 年 8 月 Figma 四語系遷移時建立的做法，之後成為我與 AI 協作的固定方式', 'A practice I set during the Figma four-language migration in Aug 2026, which became my standard way of working with AI') },
        ],
      },
      {
        id: 'outcome', caps: ['pm', 'ui', 'fe'], tags: ['Outcome'], toc: b('成果與反思', 'Outcome'),
        title: b('工具還在開發中，就抓到正式站的 bug', 'Still in development, already catching production bugs'),
        blocks: [
          { t: 'p', text: b('11 月 6 日完成第一階段：18 個頁面、63 個狀態畫面，8 項驗證全過。驗證過程中抓到 2 個已經在正式站影響會員的 Rewards 卡片 bug，以及前後端欄位命名不一致。到 11 月 12 日擴充為 129 個狀態畫面。', 'Phase 1 finished on November 6: 18 pages and 63 state screens, all 8 checks passed. Along the way it caught 2 Rewards card bugs already affecting live members, plus mismatched field names between frontend and backend. By November 12 it covered 129 state screens.') },
          { t: 'h3', text: b('驗證結果', 'Verification') },
          { t: 'stats', items: [['8', b('項驗證全過', 'checks passed')], ['8', b('個已知問題（11/06）', 'known issues (Nov 6)')], ['2', b('個影響正式站會員的 bug', 'bugs affecting live members')], ['49', b('項已知問題與待確認事項', 'open issues and questions')]] },
          { t: 'h3', text: b('還沒完成的', 'Still open') },
          { t: 'p', text: b('工具目前在開發環境，尚未進入正式版程式；抓到的 2 個 Rewards bug 還沒修。49 項待確認事項多半要等後端資料或產品規格。', 'The tool is in the dev environment and not yet in the production codebase; the 2 Rewards bugs are not fixed yet. Most of the 49 open questions wait on backend data or product specs.') },
          { t: 'h3', text: b('如果重來一次', 'If I did it again') },
          { t: 'p', text: b('我一次把範圍擴到 129 個狀態畫面，待確認事項也跟著累積。下次我會先做驗收時最常卡關的那些狀態，讓工具更早被團隊用起來，待確認的事項也更早交回產品和工程決定。', 'I expanded straight to 129 states, and open questions piled up with it. Next time I will start with the states that block reviews most often, get the tool into the team\'s hands sooner, and hand open questions back to product and engineering earlier.') },
        ],
      },
    ],
  },
  {
    slug: 'analytics',
    no: '04',
    period: '2026.10 — NOW',
    eyebrow: 'Case 04 · UX Research · Data',
    title: b('網站行為分析：\n找出訂單卡在哪一步', 'Behavior analysis:\nfinding where bookings stall'),
    cardTitle: b('網站行為分析：找出訂單卡在哪一步', 'Behavior analysis: where bookings get stuck'),
    lead: b(
      '團隊只看得到流量和轉換的表面數字，不知道客人卡在哪裡。我用錄影、數據與事件定義交叉驗證，找出登入牆與落地頁兩個瓶頸，並建立每週自動追蹤。',
      'The team saw only top-line traffic and conversion. I cross-checked session recordings, analytics, and event definitions to find two bottlenecks, the login wall and landing pages, and set up weekly tracking.',
    ),
    chips: ['UX Research', 'Mixpanel', 'Clarity', 'GTM'],
    meta: [
      [b('我的角色', 'My role'), b('發起並主導', 'Initiated and led')],
      [b('產品', 'Product'), b('WOTA 官網', 'WOTA website')],
      [b('期間', 'Period'), b('2026.10 — 現在', '2026.10 — now')],
      [b('狀態', 'Status'), b('建議已交付，改版待開發', 'Recommendations delivered, fixes pending')],
    ],
    kpis: [
      ['9% / 50%', b('訪客與會員走到訂單表單', 'guests vs members reach the booking form')],
      ['44%', b('登入後回到表單', 'return to form after login')],
      ['41', b('項附證據的發現與建議', 'evidence-backed findings')],
    ],
    hero: {
      kind: 'image',
      src: 'img/real/official-hotel-no-dates.jpg',
      alt: b('從外部連結進入的酒店頁：沒有日期，只顯示「缺少必要參數，請填寫入住條件」', 'Hotel page opened from an external link: no dates, only "Missing required parameters"'),
      caption: b('WOTA 官網正式站實際畫面 · 從廣告或 Google 進入、沒帶日期時看到的酒店頁', 'Live WOTA site · what a hotel page shows when opened from an ad or Google without dates'),
    },
    card: { kind: 'diagram', diagram: 'funnel', label: b('示意圖 · 依分析數據重繪', 'Diagram · redrawn from the analysis') },
    sections: [
      {
        id: 'problem', caps: ['pm'], tags: ['PM'], toc: b('問題', 'Problem'),
        title: b('只看得到數字，不知道原因', 'Numbers without reasons'),
        blocks: [
          { t: 'p', text: b('團隊在 Mixpanel 看得到流量下滑、轉換偏低，但不知道原因、也不知道客人卡在哪一步。更麻煩的是，原始數據混了約 26% 的機器流量，部分事件定義也有錯，直接引用會得出錯誤結論。', 'The team could see traffic dropping and low conversion in Mixpanel, but not why or where guests got stuck. Worse, about 26% of raw traffic was bots and some events were defined wrong, so taking numbers at face value led to wrong conclusions.') },
          { t: 'callout', title: b('目標', 'Goal'), text: b('給產品一份有證據、可以排期的改版清單，並建立改版後能量測成效的機制。', 'Give product an evidence-backed, schedulable fix list, and a way to measure impact after each change.') },
          { t: 'h3', text: b('先釐清背景', 'Setting the baseline') },
          { t: 'p', text: b('台灣 4 到 9 月的流量下滑，98% 來自付費廣告縮減，不是網站變差。基準是每月約 3.2 萬次造訪、手機佔 72%、每月訂房約 138 筆。', '98% of the April–September traffic drop in Taiwan came from reduced paid ads, not a worse site. Baseline: about 32k sessions a month, 72% on mobile, about 138 bookings a month.') },
        ],
      },
      {
        id: 'decisions', caps: ['pm', 'ui'], tags: ['PM', 'UI / UX'], toc: b('關鍵決策', 'Decisions'),
        title: b('三個關鍵決策', 'Three key decisions'),
        blocks: [
          { t: 'decision', q: b('要相信數據，還是看使用者實際怎麼操作？', 'Trust the numbers or watch real behavior?'), a: b('以錄影為核心，數據只是背景', 'Recordings first, numbers as context'), text: b('用 Mixpanel、Clarity 錄影和 GTM 事件定義三方交叉驗證，任何結論都要在錄影裡看得到對應的行為。', 'Every conclusion had to match behavior visible in Clarity recordings, cross-checked with Mixpanel and GTM event definitions.') },
          { t: 'decision', q: b('結論怎麼確定不是看錯？', 'How do we know a conclusion is right?'), a: b('換角度重新抽樣檢查 7 輪', 'Seven rounds of re-sampling and cross-checking'), text: b('16 項結論中，4 項被推翻、6 項被修正。例如「登入有一半失敗」被推翻：實際送出帳密後有 85 到 90% 成功，問題在別處。', 'Of 16 conclusions, 4 were overturned and 6 revised. "Half of logins fail" was wrong: 85–90% succeed once credentials are submitted. The problem was elsewhere.') },
          { t: 'decision', q: b('問題這麼多，先修哪個？', 'Many issues. Which first?'), a: b('依證據強度與影響排優先', 'Rank by evidence strength and impact'), text: b('41 項發現每項都附證據強度、建議解法與優先等級，另外記下 16 項已排除的說法，避免團隊重複討論。', 'Each of the 41 findings has an evidence rating, proposed fix, and priority. 16 ruled-out claims are recorded so the team doesn\'t revisit them.') },
        ],
      },
      {
        id: 'design', caps: ['ui'], tags: ['UI / UX'], toc: b('發現', 'Findings'),
        title: b('兩個轉換瓶頸', 'Two conversion bottlenecks'),
        blocks: [
          { t: 'h3', text: b('登入牆', 'The login wall') },
          { t: 'p', text: b('點「選擇價格」後，未登入的訪客只有 9% 走到訂單表單，已登入的會員是 50%。而訪客一旦走到表單，完成率和會員差不多（50% 對 46%），所以落差出在中間的登入這一步。登入成功後只有 44% 回到原本的表單，而且註冊後不會自動登入。', 'After clicking "Select rate," only 9% of logged-out guests reached the booking form, versus 50% of logged-in members. Once guests did reach the form, they completed it at about the same rate as members (50% vs 46%), so the gap sits at the login step in between. Only 44% returned to the form after logging in, and sign-up didn\'t log people in automatically.') },
          { t: 'diagram', kind: 'funnel', caption: b('示意圖 · 依專案文件中的數字重繪', 'Diagram · redrawn from project figures') },
          { t: 'h3', text: b('看不到價格的落地頁', 'Landing pages with no prices') },
          { t: 'p', text: b('從廣告與 Google 進來的酒店頁沒有帶日期，看不到價格。90 天內有約 2.5 萬名使用者落在這類頁面，其中約 64% 帶有廣告來源標記，代表付費帶進來的客人一進站就看不到價格。', 'Hotel pages reached through ads and search had no dates, so they showed no prices. About 25,000 users landed on them in 90 days, and about 64% carried ad tracking tags, meaning paid visitors arrived to a page with no price.') },
          { t: 'figure', src: ['img/real/official-hotel-no-dates.jpg'], alt: b('沒有日期的酒店頁，只顯示缺少必要參數', 'Hotel page without dates showing a missing-parameters message'), caption: b('WOTA 官網正式站實際畫面 · 2026-11-16 擷取', 'Live WOTA site · captured 2026-11-16') },
          { t: 'h3', text: b('不是問題的地方', 'What turned out fine') },
          { t: 'p', text: b('訂單表單沒送出的多是看完總價後離開的比價行為，不是表單出錯；送出後成功率約 98%。', 'Most unsent booking forms were price comparison after seeing the total, not form errors; about 98% of submissions succeed.') },
        ],
      },
      {
        id: 'build', caps: ['fe'], tags: ['FE'], toc: b('量測與自動化', 'Tracking'),
        title: b('修好追蹤，再讓它每週自動跑', 'Fix the tracking, then automate it weekly'),
        blocks: [
          { t: 'p', text: b('先找出追蹤本身的缺陷：手機版「選擇價格」與「立即預訂」不會觸發事件，原因是追蹤選擇器依賴桌機才有的元素；站內換頁也不會記錄頁面瀏覽。', 'First I found tracking bugs: on mobile, "Select rate" and "Book now" never fired, because the selectors relied on desktop-only elements, and in-app navigation didn\'t record page views.') },
          { t: 'table', rows: [
            [b('擷取', 'Collect'), b('擷取 Mixpanel 數據與錄影、整理統計', 'Pull Mixpanel data and recordings, run counts'), b('發起分析、定義要回答的問題', 'Initiate and define the questions')],
            [b('分析', 'Analyze'), b('產出結論與文件初稿', 'Draft findings and documents'), b('看錄影驗證，推翻或修正結論', 'Verify against recordings, overturn or revise')],
            [b('追蹤', 'Track'), b('每週一自動產出週報', 'Generate the weekly report every Monday'), b('判讀趨勢、決定要提給產品的項目', 'Read trends and choose what goes to product')],
          ] },
          { t: 'stats', items: [['300', b('段已分類標註的錄影', 'tagged session recordings')], ['85', b('週 Mixpanel 數據', 'weeks of Mixpanel data')], ['5', b('期自動產出的週報', 'weekly reports generated automatically')], ['2', b('個每週一自動執行的排程', 'jobs running every Monday')]] },
          { t: 'callout', title: b('週報實際派上用場的一次', 'When the weekly report paid off'), text: b('週報偵測到 10 月 13 日起找不到頁面的錯誤暴增（35 → 131）。和工程一起查明是兩篇文章下架，不是程式出錯。', 'The weekly report flagged a spike in page-not-found errors from October 13 (35 → 131). With engineering I traced it to two unpublished articles, not a code bug.') },
          { t: 'compare', ai: b('數據初步顯示：登入流程大約有一半失敗，看起來是登入功能有問題。', 'The first read of the data: about half of logins fail, so login looked broken.'), me: b('我要求換角度、用更多樣本重新驗證。看錄影後發現，真正送出帳密的人有 85 到 90% 登入成功；流失發生在「被要求登入」那一刻，以及登入後沒有回到原本的表單。問題從「修登入」變成「重新設計登入牆」。', 'I asked for a fresh angle and more samples. Recordings showed 85–90% of people who actually submitted credentials succeeded; the drop-off happened when they were asked to log in, and when they weren\'t returned to their form. The fix changed from "repair login" to "redesign the login wall."'), source: b('2026 年 10 月 · 複查行為分析結論時', 'Oct 2026 · while re-checking the behavior findings') },
        ],
      },
      {
        id: 'outcome', caps: ['pm', 'ui', 'fe'], tags: ['Outcome'], toc: b('成果與反思', 'Outcome'),
        title: b('從「看數字」變成「知道要修什麼」', 'From watching numbers to knowing what to fix'),
        blocks: [
          { t: 'p', text: b('交付的是一份有證據、可以排期的產品待辦，以及改版後可以自動做前後比較的每週追蹤機制。', 'The deliverable is an evidence-backed, schedulable product backlog and weekly tracking that compares before and after each change.') },
          { t: 'h3', text: b('還不能宣稱的事', 'What I can\'t claim yet') },
          { t: 'p', text: b('改善建議還沒有任何一項上線，所以目前不能宣稱轉換率已提升。依問題清單的估算，只修「登入後接續訂單」一項，最多每月約多 20 筆訂房（目前每月約 138 筆），需要上線後驗證。', 'None of the recommendations has shipped yet, so no conversion gains can be claimed. The backlog estimate for fixing only "resume booking after login" is at most about 20 more bookings a month, against about 138 today; it must be verified after launch.') },
          { t: 'h3', text: b('下一步', 'Next') },
          { t: 'p', text: b('推動「登入後接續訂單」與「落地頁顯示日期與價格」兩項改版，上線後用既有的每週追蹤量測成效。', 'Ship "resume booking after login" and "show dates and prices on landing pages," then measure with the existing weekly tracking.') },
          { t: 'h3', text: b('如果重來一次', 'If I did it again') },
          { t: 'p', text: b('分析做得再深，沒上線就無法證明對轉換的影響。下次我會在分析中途就先挑「登入後接續訂單」這一項推上線，用每週追蹤量到成效，再用結果去爭取後面的改版。', 'However deep the analysis, it proves nothing until something ships. Next time I will push one change, resume booking after login, while the analysis is still running, measure it with the weekly tracking, and use that result to win the next fixes.') },
        ],
      },
    ],
  },
];

export function neighbors(slug: string) {
  const i = cases.findIndex((c) => c.slug === slug);
  return {
    prev: cases[(i - 1 + cases.length) % cases.length],
    next: cases[(i + 1) % cases.length],
  };
}
