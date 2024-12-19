import React from "react";
import Tile from "./Tile";
import TileBuilder from "../utils/TileBuilder";
import "./Projects.css";

function Projects() {
  const projectTiles = [
    new TileBuilder()
      .setTitle("WineTime")
      .setDescription(
        "A powerful wine database catalog and recommendation app, offering personalized quizzes, challenges, and a collection of over 130,000 wines for enthusiasts and sommeliers alike."
      )
      .setGithubLink("https://github.com/ccooper6/WineTime")
      .setKeyAspects(["Java", "SQLite"])
      .build(),
    new TileBuilder()
      .setTitle("Pong Game for UC FunKit")
      .setDescription(
        "Working in a pair tasked with creating a game that ran on two separate UC FunKit microcontrollers which communicated over IR."
      )
      .setGithubLink("https://github.com/ccooper6/Resource-Stockpiling")
      .setKeyAspects(["C", "Microcontrollers", "IR Communication"])
      .build(),
  ];

  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>
      <div className="project-tiles">
        {projectTiles.map((tile, index) => (
          <Tile key={index} {...tile} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
