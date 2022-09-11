import React from 'react'
import "./skills.css";
import Technologies from './Technologies';
import Tools from './Tools';

const Skills = () => {
  return (
    <section className="skills section" id="skills">
         <h2 className="section__title">Skills</h2>
        <span className="section__subtitle">My Technical Level</span>

        <div className="skills__container container grid">

            <Technologies />

            <Tools />

        </div>
    </section>
  )
}

export default Skills