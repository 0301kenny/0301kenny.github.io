export const langs = ['zh-tw', 'en'] as const;
export type Lang = (typeof langs)[number];
export type T = Record<Lang, string>;

export const htmlLang: Record<Lang, string> = { 'zh-tw': 'zh-Hant', en: 'en' };

export function isLang(v: string | undefined): v is Lang {
  return !!v && (langs as readonly string[]).includes(v);
}

export function url(lang: Lang, path = ''): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const clean = path.replace(/^\/|\/$/g, '');
  return `${base}/${lang}/${clean ? clean + '/' : ''}`;
}

export function asset(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}/${path.replace(/^\//, '')}`;
}

export function otherLang(lang: Lang): Lang {
  return lang === 'zh-tw' ? 'en' : 'zh-tw';
}

export const ui = {
  nav: {
    work: { 'zh-tw': '代表作品', en: 'Work' },
    approach: { 'zh-tw': '工作方式', en: 'Approach' },
    legacy: { 'zh-tw': '品牌基礎', en: 'Foundation' },
    about: { 'zh-tw': '關於我', en: 'About' },
    resume: { 'zh-tw': '下載履歷', en: 'Resume' },
    mainMenu: { 'zh-tw': '主選單', en: 'Main menu' },
    language: { 'zh-tw': '語言', en: 'Language' },
    skip: { 'zh-tw': '跳到主要內容', en: 'Skip to content' },
  },
  case: {
    filterLabel: { 'zh-tw': '依能力瀏覽', en: 'Browse by skill' },
    all: { 'zh-tw': '全部', en: 'All' },
    toc: { 'zh-tw': '本頁段落', en: 'On this page' },
    prev: { 'zh-tw': '← 上一個案例', en: '← Previous case' },
    next: { 'zh-tw': '下一個案例 →', en: 'Next case →' },
    read: { 'zh-tw': '閱讀案例 →', en: 'Read case →' },
    role: { 'zh-tw': '我的角色', en: 'My role' },
    aiDoes: { 'zh-tw': 'AI 負責', en: 'AI did' },
    iDo: { 'zh-tw': '我負責', en: 'I did' },
    stage: { 'zh-tw': '階段', en: 'Stage' },
    evidence: { 'zh-tw': '過程證據：AI 的判斷 vs 我的修正', en: 'Evidence: what AI proposed vs what I changed' },
    aiDraft: { 'zh-tw': 'AI 的判斷', en: 'AI proposed' },
    myRevision: { 'zh-tw': '我的修正', en: 'My revision' },
    evidenceNote: {
      'zh-tw': '放一組真實的前後對照，證明 AI 產出經過人的判斷與修正。素材需去識別化。',
      en: 'A real before-and-after pair showing how AI output was reviewed and revised. Materials are de-identified.',
    },
  },
  todo: { 'zh-tw': '待補', en: 'TBD' },
  draftEn: {
    'zh-tw': '',
    en: '',
  },
  footerBuilt: { 'zh-tw': '本網站以 Claude Code 協作開發', en: 'Built with Claude Code' },
  source: { 'zh-tw': '查看原始碼', en: 'View source' },
} satisfies Record<string, unknown>;
