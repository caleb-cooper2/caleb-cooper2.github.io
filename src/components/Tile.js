import React from "react";
import "./Tile.css";
import githubIcon from "../assets/github.png";

function Tile({ title, description, image, githubLink, keyAspects }) {
  return (
    <div className="tile">
      {image && <img src={image} alt={`${title} icon`} className="tile-image" />}
      <div className="tile-content">
        <h3 className="tile-title">{title}</h3>
        <p className="tile-description">{description}</p>
        {githubLink && (
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="github-link"
          >
            <img
              src={githubIcon}
              alt="GitHub Icon"
              className="github-icon"
            />
          </a>
        )}
        <div className="key-aspects">
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
