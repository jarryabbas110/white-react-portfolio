import React, { useState } from 'react';
import "./qualification.css";

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };
  return (
    <section className="qualification section">
        <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">My Personal Journey</span>

        <div className="qualification__container container">
            <div className="qualification__tabs">
                <div className={toggleState === 1 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"} onClick={()=> toggleTab(1)}>
                    <i className="uil uil-graduation-cap qualification__icon"></i>{" "} Education
                </div>
                
                <div className={toggleState === 2 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"} onClick={()=> toggleTab(2)}>
                    <i className="uil uil-briefcase-alt qualification__icon"></i>{" "} Experience
                </div>

            </div>

            <div className="qualification__sections">
                <div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">BS Software Engineering</h3>                      
                            <span className="qualification__subtitle">COMSATS - Islamabad</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 2016 - 2020
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>


                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title">Inter in Computer Sciences</h3>                      
                            <span className="qualification__subtitle">College - Islamabad</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 2014 - 2016
                            </div>
                        </div>

                       
                    </div>


                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">General Sciences & Computers</h3>                      
                            <span className="qualification__subtitle">High School - Islamabad</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 2012 - 2014
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>


                    {/* <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title">UX Expert</h3>                      
                            <span className="qualification__subtitle">Spain - Institide</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 2017 - 2018
                            </div>
                        </div>

                       
                    </div> */}
                </div>


                <div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>
                    {/* <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Product Designer</h3>                      
                            <span className="qualification__subtitle">Microsoft - Spain</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 2021 - Present
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div> */}


                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title">DevOps Engineer & Frontend</h3>                      
                            <span className="qualification__subtitle">Xylexa Inc. - Pakistan</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> Nov 2021 - Present
                            </div>
                        </div>

                       
                    </div>


                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">CRM Engineer</h3>                      
                            <span className="qualification__subtitle">Ericcson - Pakistan</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> Nov 2020 - Nov 2021
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    
    </section>
  )
}

export default Qualification