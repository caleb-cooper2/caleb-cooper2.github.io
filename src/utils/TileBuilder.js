class TileBuilder {
    constructor() {
        this.tile = {
            title: "",
            description: "",
            image: null,
            githubLink: null,
            keyAspects: [],
            projectType: "",
            underConstruction: false,
            logo: null,
            multipleImages: [],
        };
    }

    setTitle(title) {
        this.tile.title = title;
        return this;
    }

    setDescription(description) {
        this.tile.description = description;
        return this;
    }

    setImage(image) {
        this.tile.image = image;
        return this;
    }

    setGithubLink(link) {
        this.tile.githubLink = link;
        return this;
    }

    setKeyAspects(aspects) {
        this.tile.keyAspects = aspects;
        return this;
    }

    setProjectType(type) {
        this.tile.projectType = type;
        return this;
    }

    setUnderConstruction(underConstruction) {
        this.tile.underConstruction = underConstruction;
        return this;
    }

    setLogo(logo) {
        this.tile.logo = logo;
        return this;
    }

    setMultipleImages(images) {
        this.tile.multipleImages = images;
        return this;
    }

    build() {
        return this.tile;
    }
}

export default TileBuilder;