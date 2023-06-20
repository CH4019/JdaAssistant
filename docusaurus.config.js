// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Jda助手',
  tagline: 'Easy to use',
  favicon: 'img/icon_1.ico',

  // Set the production url of your site here
  url: 'https://ch4019.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'ch4019', // Usually your GitHub org/user name.
  projectName: 'JdaAssistant', // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          blogTitle: '博客标题',
          blogDescription: '博客',
          blogSidebarTitle: 'All Blogs',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Jda助手',
        logo: {
          alt: 'JdaAssistant Logo',
          src: 'img/icon_2.svg',
        },
        items: [
          {
            type: 'doc',
            sidebarId: 'tutorialSidebar',
            docId: 'index',
            position: 'left',
            label: '🏡Home',
          },
          { to: '/blog', label: '👨🏻‍💻Blog', position: 'left' },
          {
            href: 'https://github.com/CH4019/JdaAssistant',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '🏡主页/Home',
            items: [
              {
                label: 'App更新日志',
                to: '/docs/AppUpdateLog',
              },
              {
                label: '📗Wiki',
                to: '/docs/Wiki',//需要修改，wiki起始页
              },
            ],
          },
          {
            title: '🏘️社区/Community',
            items: [
              {
                label: 'QQ频道/QQ Channel',
                href: 'https://pd.qq.com/s/fb4hyfdm1',
              },
              {
                label: '爱发电/afdian',
                href: 'https://afdian.net/order/create?plan_id=70011962a8f911ecb5c152540025c377',
              },
            ],
          },
          {
            title: '📚更多/More',
            items: [
              {
                label: '👨🏻‍💻Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/CH4019/JdaAssistant',
              },
              {
                label: '文件共享页',
                href: 'https://ahjzu-filessharing-personal-ch4019.mysxl.cn/',
              },
              {
                html: `
                      <a href="https://vercel.com/home">
                      <svg aria-label="Vercel logotype" height="32" role="img" viewBox="0 0 283 64" width="141.5"><path d="M141.68 16.25c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.46 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zm117.14-14.5c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.45 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zm-39.03 3.5c0 6 3.92 10 10 10 4.12 0 7.21-1.87 8.8-4.92l7.68 4.43c-3.18 5.3-9.14 8.49-16.48 8.49-11.05 0-19-7.2-19-18s7.96-18 19-18c7.34 0 13.29 3.19 16.48 8.49l-7.68 4.43c-1.59-3.05-4.68-4.92-8.8-4.92-6.07 0-10 4-10 10zm82.48-29v46h-9v-46h9zM37.59.25l36.95 64H.64l36.95-64zm92.38 5l-27.71 48-27.71-48h10.39l17.32 30 17.32-30h10.39zm58.91 12v9.69c-1-.29-2.06-.49-3.2-.49-5.81 0-10 4-10 10v14.8h-9v-34h9v9.2c0-5.08 5.91-9.2 13.2-9.2z" fill="black"></path></svg>
                      </a>
                  `,
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} by CH4019. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
