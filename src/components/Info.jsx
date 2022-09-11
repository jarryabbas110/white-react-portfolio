import React from 'react'

const Info = () => {
  return (
    <div className="about__info grid">
        <div className="about__box">
            <i className="bx bx-palette  about__icon"></i>
            <h3 className="about__title">Designer</h3>
            <span className="about__subtitle">Ui & Ux</span>
        </div>

        <div className="about__box">
            <i className="bx bx-run  about__icon"></i>
            <h3 className="about__title">Problem Solver</h3>
            {/* <span className="about__subtitle">48+ Projects</span> */}
        </div>

        <div className="about__box">
            <i className="bx bx-code-alt  about__icon"></i>
            <h3 className="about__title">Developer</h3>
            <span className="about__subtitle">Frontend</span>
        </div>
    </div>
  )
}

export default Info