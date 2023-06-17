import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import "animate.css"

const FeatureList = [
  {
    title: '便捷使用',
    Svg: require('@site/static/img/undraw_docusaurus_tree_2.svg').default,
    //Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Jda助手(<code>JdaAssistant</code>) 旨在服务用户，帮他们更快，更方便地拥抱校园生活。
      </>
    ),
  },
  {
    title: '效率至上',
    Svg: require('@site/static/img/undraw_docusaurus_tree_2.svg').default,
    description: (
      <>
        Jda助手(<code>JdaAssistant</code>) 解放双手，提高效率, 我们来收集信息，你只需查看结果。
      </>
      //we&apos;ll
    ),
  },
  {
    title: 'Powered by docusaurus',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        通过使用<a href="https://docusaurus.io/zh-CN" target="_blank" class='a'>docusaurus</a>技术来扩展或制定本网站。同时使用<a href="https://animate.style" target="_blank" class='a'>Animate.css</a>来添加动画。
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}


export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div class="animate__animated animate__fadeInUp animate__fast">
          <div className="row">
            {FeatureList.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}