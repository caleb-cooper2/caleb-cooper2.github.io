import React from "react";
import Tile from "./Tile";
import TileBuilder from "../utils/TileBuilder";
import "./Projects.css";
import WineTime from "../assets/winetime.png";
import ResourceStockpiling from "../assets/resourcestockpiling.png";
import CartsyLogo from "../assets/cartsy-logo.png";
import CartsyHome from "../assets/cartsy/cartsy-home.png";
import CartsySearch from "../assets/cartsy/cartsy-search.png";
import CartsyItem from "../assets/cartsy/cartsy-item.png";
import CartsyGraph from "../assets/cartsy/cartsy-graph.png"
import CartsyList from "../assets/cartsy/cartsy-list.png";
import CartsyListCompare from "../assets/cartsy/cartsy-list-compare.png";
import CartsyStores from "../assets/cartsy/cartsy-stores.png";

function Projects() {
    const projectTiles = [
        new TileBuilder()
            .setTitle("Cartsy")
            .setDescription(
                "A full-stack mobile application that helps users find the best deals on groceries by comparing prices from multiple NZ supermarkets. Users can search the product catalogue, " +
                "scan barcodes, and add items to shopping lists for easy tracking - with a running total calculated across their selected stores so they always know where to shop. " +
                "Users receive push notifications when their saved items drop in price, and can track price trends over time via per-product history charts. The app also surfaces current " +
                "deals and a product spotlight on the home screen to help users discover savings at a glance. The app is currently under development on TestFlight, but is receiving constant updates, so watch " +
                "this space!"
            )
            .setProjectType("Personal")
            .setUnderConstruction(true)
            .setLogo(CartsyLogo)
            .setMultipleImages([CartsyHome, CartsySearch, CartsyItem, CartsyGraph, CartsyList, CartsyListCompare, CartsyStores])
            .setKeyAspects(["React Native", "Typescript", "CSS", "Typesense", "Redis", "PostgreSQL"])
            .build(),
        new TileBuilder()
            .setTitle("PDF Notes to Anki Converter")
            .setDescription(
                "A tool that I used to convert my PDF lecture notes into Anki flashcards rapidly during study week. " +
                "I decided it was a really useful tool and wanted to share it, so created an easy to use interface " +
                "You are able to tweak various settings to try and get the best results, including choosing from a range of. " +
                "different OpenAI GPT models to use for the conversion process."
            )
            .setGithubLink("https://github.com/caleb-cooper2/Anki-PDF-Converter")
            .setLink("https://anki.calebcooper.co.nz")
            .setKeyAspects(["Python", "HTML", "CSS", "OpenAI", "Flask", "nginx", "Docker"])
            .setProjectType("Personal")
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
                "Initially working with and learning React on the fly to create a personal website to showcase my projects and skills. Have since migrated the site to Vite for better performance."
            )
            .setGithubLink("https://github.com/caleb-cooper2/caleb-cooper2.github.io")
            .setKeyAspects(["React", "Vite", "JavaScript", "HTML", "CSS"])
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
            <div className="project-tiles">
                {projectTiles.map((tile, index) => (
                    <Tile key={index} {...tile} />
                ))}
            </div>
        </section>
    );
}

export default Projects;
