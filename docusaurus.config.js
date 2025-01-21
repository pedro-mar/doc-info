const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Documentação - Informática - 1º CGEO',
  url: 'http://wiki1cgeo.com.br',
  baseUrl: '/wiki_info/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: '1cgeo', // Usually your GitHub org/user name.
  projectName: 'informatica', // Usually your repo name.
  deploymentBranch: 'gh-pages',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'pt-BR',
    locales: ['pt-BR'],
  },

  plugins:[
    [require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        language: "en"
      }
    ]
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          showLastUpdateTime: false,
        },
        blog: {
          showReadingTime: true,
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
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
      navbar: {
        title: 'Documentação 1º CGEO',
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Mais',
            items: [
              {
                label: 'GitHub 1º CGEO',
                href: 'https://github.com/1cgeo',
              },
              {
                label: 'GitHub DSG',
                href: 'https://github.com/dsgoficial',
              },
            ],
          },
        ],
        copyright: `Direitos Reservados © ${new Date().getFullYear()} DGEO - 1º CGEO. Feito com Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;