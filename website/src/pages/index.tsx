import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import {
  FaFilm,
  FaTv,
  FaBook,
  FaBookOpen,
  FaMobileAlt,
  FaYoutube,
  FaMusic,
  FaGithub,
  FaStar,
  FaPlay,
} from 'react-icons/fa';

import styles from './index.module.css';

/* ============================================================
   STATIC DATA
   ============================================================ */

type FeatureItem = {
  title: string;
  description: string;
  link: string;
  icon: React.JSX.Element;
};

const featureList: FeatureItem[] = [
  {
    title: 'Movies & Series',
    description:
      'Free web platforms and open-source apps to stream movies, TV shows, and dramas.',
    link: '/docs/movies-series',
    icon: <FaFilm size={20} />,
  },
  {
    title: 'Live TV',
    description:
      'Stream live television channels from around the world in one place.',
    link: '/docs/live-tv',
    icon: <FaTv size={20} />,
  },
  {
    title: 'Light Novel',
    description:
      'Read and translate light novels, web novels, and Chinese fiction online.',
    link: '/docs/light-novel',
    icon: <FaBook size={20} />,
  },
  {
    title: 'Manga',
    description:
      'Read manga, manhwa, manhua, and Western comics online with great readers.',
    link: '/docs/manga',
    icon: <FaBookOpen size={20} />,
  },
  {
    title: 'Anime',
    description:
      'Stream subbed and dubbed anime series and movies from curated sources.',
    link: '/docs/anime',
    icon: <FaPlay size={20} />,
  },
  {
    title: 'Applications',
    description:
      'Open-source Android apps for streaming, reading manga, anime, and more.',
    link: '/docs/applications',
    icon: <FaMobileAlt size={20} />,
  },
  {
    title: 'YouTube Clients',
    description:
      'Privacy-friendly and feature-rich alternatives to the official YouTube app.',
    link: '/docs/youtube-clients',
    icon: <FaYoutube size={20} />,
  },
  {
    title: 'YouTube Music',
    description:
      'Open-source music players and YouTube Music clients for all platforms.',
    link: '/docs/youtube-music',
    icon: <FaMusic size={20} />,
  },
];

/* ============================================================
   COMPONENTS
   ============================================================ */

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className={styles.glyphGrid} aria-hidden="true" />
      <div className="container">
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <Heading as="h1" className={styles.heroTitle}>
              {siteConfig.title}
            </Heading>
            <p className={styles.heroSubtitle}>{siteConfig.tagline}</p>
            <div className={styles.buttons}>
              <Link
                className={clsx('button', styles.ctaButton)}
                to="/docs/intro"
              >
                Browse Resources
              </Link>
              <a
                className={clsx('button', styles.ctaButtonSecondary)}
                href="https://github.com/OshekharO/awesome-entertainment"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={16} />
                View on GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function Feature({ title, description, link, icon }: FeatureItem) {
  return (
    <div className={clsx('col col--3', styles.featureCol)}>
      <Link to={link} className={styles.featureLink}>
        <div className={styles.featureCard}>
          <span className={styles.featureIcon} aria-hidden="true">
            {icon}
          </span>
          <Heading as="h3" className={styles.featureTitle}>
            {title}
          </Heading>
          <p className={styles.featureDesc}>{description}</p>
        </div>
      </Link>
    </div>
  );
}

function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <Heading as="h2" className={styles.sectionLabel}>
          Resources
        </Heading>
        <div className={clsx('row', styles.featureRow)}>
          {featureList.map((props) => (
            <Feature key={props.link} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

function HomepageSupport() {
  return (
    <section className={styles.communitySection}>
      <div className="container">
        <Heading as="h2" className={styles.sectionLabel}>
          Support
        </Heading>
        <div className={styles.supportText}>
          <p>
            If you find this list helpful, consider starring the repository —
            it helps with discoverability and keeps the community growing.
          </p>
        </div>
        <div className={styles.supportActions}>
          <a
            href="https://github.com/OshekharO/awesome-entertainment/stargazers"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.starButton}
            aria-label="Star Awesome Entertainment on GitHub"
          >
            <FaStar size={16} />
            Star on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   PAGE ROOT
   ============================================================ */

export default function Home(): React.JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title="Awesome Entertainment"
      description={siteConfig.tagline}
    >
      <HomepageHeader />
      <main className={styles.main}>
        <HomepageFeatures />
        <HomepageSupport />
      </main>
    </Layout>
  );
}
