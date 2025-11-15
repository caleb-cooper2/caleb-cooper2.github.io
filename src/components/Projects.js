import React from "react";
import Tile from "./Tile";
import TileBuilder from "../utils/TileBuilder";
import "./Projects.css";
import WineTime from "../assets/winetime.png";
import ResourceStockpiling from "../assets/resourcestockpiling.png";
import CartsyLogo from "../assets/cartsyLogo.svg";
import CartsyGraph from "../assets/cartsy/cartsy-graph.png";
import CartsyProduct from "../assets/cartsy/cartsy-product.png";
import CartsySearch from "../assets/cartsy/cartsy-search.png";
import CartsyNotify from "../assets/cartsy/cartsy-notify.png";
import CartsyStore from "../assets/cartsy/cartsy-store.png";

function Projects() {
    const projectTiles = [
        new TileBuilder()
            .setTitle("Cartsy")
            .setDescription(
                "A full-stack mobile application that helps users find the best deals on groceries by comparing prices " +
                "from multiple supermarkets. Users can create shopping lists for easy tracking and receive notifications " +
                "when their items go on sale in their selection of NZ supermarkets. On top of this, users can track price trends " +
                "via graphs for their selected stores. The app is still under development but " +
                "is receiving constant updates, so watch this space!"
            )
            .setProjectType("Personal")
            .setUnderConstruction(true)
            .setLogo(CartsyLogo)
            .setMultipleImages([CartsyNotify, CartsySearch, CartsyProduct, CartsyGraph, CartsyStore])
            .setKeyAspects(["React Native", "JavaScript", "CSS"])
            .build(),
        new TileBuilder()
            .setTitle("HammerTime")
            .setDescription(
                "Year-long SCRUM group project in a team of seven, developing a DIY focused full-stack web application. " +
                "Our group shifted the concept toward a livestreaming based platform. It gave me the opportunity to work on a " +
                "range of technical challenges, including implementing both peer-to-peer and more scalable streaming " +
                "solutions, integrating Stripe payments, and building real-time interaction features."
            )
            .setGithubLink("https://github.com/caleb-cooper2/HammerTime")
            .setLink("https://seng302.calebcooper.co.nz/login?email=guest@hammertime.com&password=P4$$word")
            .setKeyAspects(["SCRUM", "Java", "Javascript", "CSS", "Spring Framework", "nginx", "CI/CD Pipelines", "Agile Collaboration Tools", "Automated and Manual Testing"])
            .setProjectType("University")
            .build(),
        new TileBuilder()
            .setTitle("Personal Website")
            .setDescription(
                "Working with and learning React on the fly to create a personal website to showcase my projects and skills."
            )
            .setGithubLink("https://github.com/caleb-cooper2/caleb-cooper2.github.io")
            .setKeyAspects(["React", "JavaScript", "HTML", "CSS"])
            .setProjectType("Personal")
            .build(),
        new TileBuilder()
            .setTitle("WineTime")
            .setDescription(
                "Working in a team of 6 to create a powerful wine database catalog and recommendation app, offering personalized quizzes, challenges, and a collection of over 130,000 wines."
            )
            .setGithubLink("https://github.com/caleb-cooper2/WineTime")
            .setImage(WineTime)
            .setKeyAspects(["Java", "SQLite", "CSS", "JavaFX", "JUnit", "Cucumber Testing"])
            .setProjectType("University")
            .build(),
        new TileBuilder()
            .setTitle("Pong")
            .setDescription(
                "Working in a pair to create a pong game that ran on two UC FunKit microcontrollers which communicated over IR."
            )
            .setGithubLink("https://github.com/caleb-cooper2/UC_FunKit_Pong")
            .setKeyAspects(["C", "Microcontrollers", "IR Communication"])
            .setProjectType("University")
            .build(),
        new TileBuilder()
            .setTitle("Resource Stockpiling")
            .setDescription(
                "Working in a pair tasked to create a game that showcased our understanding of Java and JavaFX."
            )
            .setGithubLink("https://github.com/caleb-cooper2/Resource-Stockpiling")
            .setImage(ResourceStockpiling)
            .setKeyAspects(["Java", "JavaFX", "JUnit"])
            .setProjectType("University")
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
