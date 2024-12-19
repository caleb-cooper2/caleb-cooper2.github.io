class TileBuilder {
    constructor() {
      this.tile = {
        title: "",
        description: "",
        image: null,
        githubLink: null,
        keyAspects: [],
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
  
    build() {
      return this.tile;
    }
  }
  
  export default TileBuilder;
  