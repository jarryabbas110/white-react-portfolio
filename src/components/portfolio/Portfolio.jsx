import React from 'react';
import "./portfolio.css";
import Menu from './Menu';

const Portfolio = () => {
  return (
    <section className="work section" id='portfolio'>
        <h2 className="section__title">My Recent Work</h2>
        <span className="section__subtitle">Portfolio</span>

        <div className="work__filters">
            <span className="work__item">All</span>
            <span className="work__item">Creative</span>
            <span className="work__item">Art</span>
            <span className="work__item">Design</span>
            <span className="work__item">Branding</span>
            <span className="work__item">React</span>
        </div>

        <div className="work__container grid"></div>
    </section>
  )
}

export default Portfolio