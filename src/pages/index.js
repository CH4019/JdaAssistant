import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import "animate.css";
import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <div class="animate__animated animate__fadeInUp">
          <h1 className="hero__title">{siteConfig.title}</h1>
        </div>
        <div class="animate__animated animate__fadeInUp">
          <p className="hero__subtitle">{siteConfig.tagline}</p>
        </div>
        <div className={styles.buttons}>
          <div class="animate__animated animate__fadeInUp">
            <Link
              className="button button--secondary button--lg"
              to="/docs">
              点击前往Wiki👆
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={` ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
