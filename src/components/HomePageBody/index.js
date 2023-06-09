import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import "animate.css"
import sponsorsData from './data.json';

const Data = require('./data.json');

export default function HomePageBody() {
    return (
        <section className={styles.features}>
            <div className="container">
                <div class="animate__animated animate__fadeInUp animate__fast">
                    <div className="row">

                        {sponsorsData.map(sponsor => (
                            <div key={sponsor.name}>
                                <h3>{sponsor.name}</h3>
                                <p>{sponsor.description}</p>
                                <a href={sponsor.url}>
                                    <img src={sponsor.logo} alt={sponsor.name} />
                                </a>
                            </div>
                        ))}


                    </div>
                </div>
            </div>
        </section>
    );
}