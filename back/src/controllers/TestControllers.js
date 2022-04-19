// const Connection = require("../config/ConnectionDB");
// const Article = require("../models/Article.model.js");

// Ramasse miette (clean de l'objet)
// const privateProps = new WeakMap();

// class TestControllers extends Connection {
class TestControllers {
    constructor() {
    // super();
    // privateProps.set(this.databaseConnection());
  }

  get(req, res) {
    try {
      return res.send({
        status: "success",
        message: "Method Get Test Controller",
      });
    } catch (error) {
      throw error;
    }
  }

  post(req, res) {
    try {
      return res.send({
        status: "success",
        message: "Method Post Test Controller",
      });
    } catch {
      throw error;
    }
  }

}

export default TestControllers