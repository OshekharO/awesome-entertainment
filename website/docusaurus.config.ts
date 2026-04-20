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
          title: 'Streaming',
          items: [
            {label: 'Movies & Series', to: '/docs/movies-series'},
            {label: 'Anime', to: '/docs/anime'},
            {label: 'Live TV', to: '/docs/live-tv'},
          ],
        },
        {
          title: 'Reading',
          items: [
            {label: 'Manga', to: '/docs/manga'},
            {label: 'Light Novel', to: '/docs/light-novel'},
          ],
        },
        {
          title: 'Apps & Tools',
          items: [
            {label: 'Applications', to: '/docs/applications'},
            {label: 'YouTube Clients', to: '/docs/youtube-clients'},
            {label: 'YouTube Music', to: '/docs/youtube-music'},
          ],
        },
        {
          title: 'Project',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/OshekharO/awesome-entertainment',
            },
            {
              label: 'Star on GitHub',
              href: 'https://github.com/OshekharO/awesome-entertainment/stargazers',
            },
            {
              label: 'Report an Issue',
              href: 'https://github.com/OshekharO/awesome-entertainment/issues',
            },
            {
              label: 'Contribute',
              href: 'https://github.com/OshekharO/awesome-entertainment/blob/main/CONTRIBUTING.md',
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
