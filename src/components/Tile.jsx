import React, { useState } from "react";
import "./Tile.css";
import githubIcon from "../assets/github.png";
import redirectIcon from "../assets/redirect.svg";

function Tile({ title, description, image, redirectLink, githubLink, keyAspects, projectType, underConstruction, logo, multipleImages }) {
    let typeColour;
    let skillColour;
    if (projectType === "University") {
        typeColour = "#3C6E71";
        skillColour = "#FDC433F7";
    } else {
        typeColour = "#FDC433F7";
        skillColour = "#3C6E71";
    }

    // carousel
    const [carouselIndex, setCarouselIndex] = useState(0);
    const hasCarousel = multipleImages && multipleImages.length > 0;
    const totalImages = hasCarousel ? multipleImages.length : 0;

    const handlePrev = () => {
        setCarouselIndex((prev) => (prev === 0 ? totalImages - 1 : prev - 1));
    };
    const handleNext = () => {
        setCarouselIndex((prev) => (prev === totalImages - 1 ? 0 : prev + 1));
    };
    const goToIndex = (idx) => setCarouselIndex(idx);

    return (
        <div className="tile">
            {underConstruction && <div className="under-construction-banner">Under Construction</div>}
            {logo && <img src={logo} alt="Project Logo" className="tile-logo" />}
            <div className="tile-content">
                <h3 className="tile-title">{title}</h3>
                <div className="icons-row">
                    {githubLink && (
                        <a
                            href={githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="icon-wrapper"
                        >
                            <img
                                src={githubIcon}
                                alt="GitHub Icon"
                                className="github-icon"
                            />
                            <div className="tooltip">GitHub Repository</div>
                        </a>
                    )}
                    {redirectLink && (
                        <a
                            href={redirectLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="icon-wrapper"
                        >
                            <img
                                src={redirectIcon}
                                alt="Redirect Icon"
                                className="github-icon"
                            />
                            <div className="tooltip">Try it out</div>
                        </a>
                    )}
                </div>

                {image && <img src={image} alt={`${title} icon`} className="tile-image" />}
                {hasCarousel && (
                    <div className="carousel-container">
                        <button className="carousel-arrow left" onClick={handlePrev} aria-label="Previous image">❮</button>
                        <img
                            src={multipleImages[carouselIndex]}
                            alt={`Additional ${carouselIndex}`}
                            className="carousel-image"
                        />
                        <button className="carousel-arrow right" onClick={handleNext} aria-label="Next image">❯</button>
                        <div className="carousel-dots">
                            {multipleImages.map((_, idx) => (
                                <span
                                    key={idx}
                                    className={`carousel-dot${carouselIndex === idx ? " active" : ""}`}
                                    onClick={() => goToIndex(idx)}
                                    aria-label={`Go to image ${idx + 1}`}
                                    tabIndex={0}
                                    role="button"
                                />
                            ))}
                        </div>
                    </div>
                )}
                <p className="tile-description">{description}</p>
                <div className="key-aspects">
                    {projectType && (
                        <span className="skill-bubble" style={{ backgroundColor: typeColour }}>
              {projectType}
            </span>
                    )}
                    {keyAspects &&
                        keyAspects.map((aspect, index) => (
                            <span key={index} className="skill-bubble" style={{ backgroundColor: skillColour }}>
                {aspect}
              </span>
                        ))}
                </div>
            </div>
        </div>
    );
}

export default Tile;