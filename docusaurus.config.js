// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '建大助手',
  tagline: 'Easy to use',
  favicon: 'img/icon.ico',

  // Set the production url of your site here
  url: 'https://ch4019.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/JdaAssistant/',

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
        title: '建大助手',
        logo: {
          alt: 'JdaAssistant Logo',
          src: 'img/icon.svg',
        },
        items: [
          {
            type: 'doc',
            sidebarId: 'tutorialSidebar',
            docId: 'index',
            position: 'left',
            label: '🏡Home',
          },
          {to: '/blog', label: '👨🏻‍💻Blog', position: 'left'},
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
