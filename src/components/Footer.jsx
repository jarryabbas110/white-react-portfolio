import React from 'react';
import "./footer.css"

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Jarry Abbas.</h1>

            <ul className="footer__list">
                <li>
                    <a href="#home" className="footer__link">Home</a>
                </li>

                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>

                <li>
                    <a href="#skills" className="footer__link">Skills</a>
                </li>

                <li>
                    <a href="#services" className="footer__link">Services</a>
                </li>

                <li>
                    <a href="#portfolio" className="footer__link">Portfolio</a>
                </li>

                <li>
                    <a href="#contact" className="footer__link">Contact</a>
                </li>
            </ul>

            <div className="footer__social">

            <a href="https://www.linkedin.com/in/jarry-abbas-naqvi/" className="footer__social-link" target="_blank">
            <i className="bx bxl-linkedin"></i>
            </a>

        <a href="https://www.behance.net/jarryabbas2" className="footer__social-link" target="_blank">
            <i className="bx bxl-behance"></i>
        </a>

        <a href="https://www.instagram.com/jarryabbas_101/" className="footer__social-link" target="_blank">
            <i className="bx bxl-instagram"></i>
        </a>
        <a href="https://www.facebook.com/jarry.abbas1" className="footer__social-link" target="_blank">
            <i className="bx bxl-facebook"></i>
        </a>
        <a href="https://github.com/jarryabbas110" className="footer__social-link" target="_blank">
            <i className="bx bxl-github"></i>
        </a>

            </div>

            <span className="footer__copy">&#169; JarryAbbas. All Rights Reserved</span>
        </div>
    </footer>
  )
}

export default Footer
