import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Awesome Entertainment',
  tagline: 'A curated list of apps, extensions, and platforms for streaming, manga, anime, and reading.',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://OshekharO.github.io',
  baseUrl: '/awesome-entertainment/',

  organizationName: 'OshekharO',
  projectName: 'awesome-entertainment',

  onBrokenLinks: 'warn',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/docs',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: 'Awesome Entertainment',
      items: [
        {
          to: '/',
          position: 'left',
          label: 'Home',
          exact: true,
        },
        {
          type: 'docSidebar',
          sidebarId: 'mainSidebar',
          position: 'left',
          label: 'Browse',
        },
        {
          href: 'https://github.com/OshekharO/awesome-entertainment',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Categories',
          items: [
            {label: 'Movies & Series', to: '/docs/movies-series'},
            {label: 'Anime', to: '/docs/anime'},
            {label: 'Manga', to: '/docs/manga'},
            {label: 'Applications', to: '/docs/applications'},
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/OshekharO/awesome-entertainment',
            },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} OshekharO · Built with Docusaurus`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
