import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Designs',
      links: [
        {
          text: 'SaaS向け',
          href: getPermalink('/homes/saas'),
        },
        {
          text: 'Startup向け',
          href: getPermalink('/homes/startup'),
        },
        {
          text: 'Mobile App向け',
          href: getPermalink('/homes/mobile-app'),
        },
        {
          text: 'Personal向け',
          href: getPermalink('/homes/personal'),
        },
      ],
    },
    {
      text: 'Pages',
      links: [
        {
          text: 'アンカーリンク例',
          href: getPermalink('/#features'),
        },
        {
          text: 'サービスページ',
          href: getPermalink('/services'),
        },
        {
          text: '価格ページ',
          href: getPermalink('/pricing'),
        },
        {
          text: 'Aboutぺージ',
          href: getPermalink('/about'),
        },
        {
          text: 'お問い合わせページ',
          href: getPermalink('/contact'),
        },
        {
          text: '規約ページ',
          href: getPermalink('/terms'),
        },
        {
          text: 'プライバシーポリシーぺージ',
          href: getPermalink('/privacy'),
        },
      ],
    },
    {
      text: 'LP🚧',
      links: [
        {
          text: '見込み客獲得ページ',
          href: getPermalink('/landing/lead-generation'),
        },
        {
          text: 'サービス&自社紹介ページ',
          href: getPermalink('/landing/sales'),
        },
        {
          text: 'サービス概要ページ',
          href: getPermalink('/landing/click-through'),
        },
        {
          text: 'サービス詳細ページ',
          href: getPermalink('/landing/product'),
        },
        {
          text: 'Coming Soonページ',
          href: getPermalink('/landing/pre-launch'),
        },
        {
          text: 'サブスクリプション登録ページ',
          href: getPermalink('/landing/subscription'),
        },
      ],
    },
    {
      text: 'Blog',
      links: [
        {
          text: 'リストページ',
          href: getBlogPermalink(),
        },
        {
          text: '記事ページ',
          href: getPermalink('get-started-website-with-astro-tailwind-css', 'post'),
        },
        {
          text: '記事の書き方',
          href: getPermalink('markdown-elements-demo-post', 'post'),
        },
        {
          text: 'カテゴリーページ',
          href: getPermalink('tutorials', 'category'),
        },
        {
          text: 'タグページ',
          href: getPermalink('astro', 'tag'),
        },
      ],
    },
  ],
};

export const footerData = {
  links: [
    {
      title: 'Product',
      links: [
        { text: 'サービス詳細', href: '#' },
        { text: 'セキュリティ🚧', href: '#' },
        { text: '開発チーム🚧', href: '#' },
        { text: '商用利用について🚧', href: '#' },
        { text: '利用者の声🚧', href: '#' },
        { text: '価格', href: '#' },
        { text: 'Resources', href: 'https://github.com/onwidget/astrowind' },
      ],
    },
    {
      title: 'Platform🚧',
      links: [
        { text: 'Developer API', href: '#' },
        { text: 'Partners', href: '#' },
        { text: 'Atom', href: '#' },
        { text: 'Electron', href: '#' },
        { text: 'AstroWind Desktop', href: '#' },
      ],
    },
    {
      title: 'Development',
      links: [
        { text: 'Docs', href: 'https://docs.astro.build/en/getting-started/' },
        { text: 'GitHub', href: 'https://github.com/onwidget/astrowind' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: 'https://cor-jp.com/about/' },
        { text: 'Press', href: 'https://cor-jp.com/pricing/' },
        { text: 'Contact', href: 'https://cor-jp.com/contact/' },
      ],
    },
  ],
  secondaryLinks: [
    { text: '利用規約', href: getPermalink('/terms') },
    { text: 'プライバシーポリシー', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: 'https://x.com/Cor_instrument' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/terisuke' },
  ],
  footNote: `
    <img class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm" src="/landing/src/assets/favicons/favicon32.png" alt="onWidget logo" loading="lazy"></img>
    Made by <a class="text-blue-600 underline dark:text-muted" href="https://cor-jp.com/"> Cor.Inc.</a> · All rights reserved.
  `,
};
