import React from "react";
import "./Navbar.css";
import githubIcon from "../assets/github.png";
import linkedinIcon from "../assets/linkedin.png";
import resumeIcon from "../assets/resume.png";
import emailIcon from "../assets/email.png";

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">Caleb Cooper</h1>
      <div className="icon-links">
        <div className="icon-wrapper">
          <a
            href="https://github.com/ccooper6"
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
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">  {/* Figure out how to link file */}
            <img src={resumeIcon} alt="Resume Icon" className="icon" />
          </a>
          <div className="tooltip">Resume</div>
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
