import React from "react";
import "./Tile.css";
import githubIcon from "../assets/github.png";

function Tile({ title, description, image, githubLink, keyAspects, projectType }) {
  var bubbleColor = "";
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
      {image && <img src={image} alt={`${title} icon`} className="tile-image" />}
      <div className="tile-content">
        <h3 className="tile-title">{title}</h3>
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
            <span className="aspect-bubble" style={{ backgroundColor: bubbleColor, color: textColor }}>
              {projectType}
            </span>
          )}
          {keyAspects &&
            keyAspects.map((aspect, index) => (
              <span key={index} className="aspect-bubble">
                {aspect}
              </span>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Tile;
