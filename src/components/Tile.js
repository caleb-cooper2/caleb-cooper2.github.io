import React from "react";
import "./Tile.css";
import githubIcon from "../assets/github.png";

function Tile({ title, description, image, githubLink, keyAspects, projectType, underConstruction, logo, multipleImages }) {
  var bubbleColor;
  var textColor = "";
  if (projectType === "University") {
    bubbleColor = "yellow";
    textColor = "black";
  } else if (projectType === "Personal") {
    bubbleColor = "orange";
  } else {
    bubbleColor = "red";
  }
  return (
      <div className="tile">
        {underConstruction && <div className="under-construction-banner">Under Construction</div>}
        {logo && <img src={logo} alt="Project Logo" className="tile-logo" />}
        {image && <img src={image} alt={`${title} icon`} className="tile-image" />}
        <div className="tile-content">
          <h3 className="tile-title">{title}</h3>
          {multipleImages.length > 0 && (
              <div className="multiple-images">
                {multipleImages.map((img, index) => (
                    <img key={index} src={img} alt={`Additional ${index}`} className="additional-image" />
                ))}
              </div>
          )}
          <p className="tile-description">{description}</p>
          {githubLink && (
              <div className="icon-wrapper">
                <a
                    href={githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                  <img
                      src={githubIcon}
                      alt="GitHub Icon"
                      className="github-icon"
                  />
                  <div className="tooltip">GitHub Repository</div>
                </a>
              </div>
          )}
          <div className="key-aspects">
            {projectType && (
                <span className="skill-bubble" style={{ backgroundColor: bubbleColor, color: textColor }}>
              {projectType}
            </span>
            )}
            {keyAspects &&
                keyAspects.map((aspect, index) => (
                    <span key={index} className="skill-bubble">
                {aspect}
              </span>
                ))}
          </div>
        </div>
      </div>
  );
}

export default Tile;