import React from "react";
import "./Navbar.css";
import githubIcon from "../assets/github.png";
import linkedinIcon from "../assets/linkedin.png";
import resumeIcon from "../assets/resume.png";
import emailIcon from "../assets/email.png";

import resume from "../Caleb-Cooper-CV.pdf";

function Navbar() {
    return (
        <nav className="navbar">
            <div>
                <span className="name">Caleb Cooper</span>
                <span className="job-title">Software Engineer</span>
            </div>
            <div className="icon-links">
                <div className="icon-wrapper">
                    <a href={resume} target="_blank" rel="noopener noreferrer">
                        <img src={resumeIcon} alt="Resume Icon" className="icon" />
                    </a>
                    <div className="tooltip">Resume</div>
                </div>
                <div className="icon-wrapper">
                    <a
                        href="https://github.com/caleb-cooper2"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={githubIcon} alt="GitHub Icon" className="icon" />
                    </a>
                    <div className="tooltip">GitHub</div>
                </div>
                <div className="icon-wrapper">
                    <a
                        href="https://www.linkedin.com/in/caleb-cooper1/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={linkedinIcon} alt="LinkedIn Icon" className="icon" />
                    </a>
                    <div className="tooltip">LinkedIn</div>
                </div>
                <div className="icon-wrapper">
                    <a href="mailto:calebcooper8812@gmail.com">
                        <img src={emailIcon} alt="Email Icon" className="icon" />
                    </a>
                    <div className="tooltip">Email</div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
