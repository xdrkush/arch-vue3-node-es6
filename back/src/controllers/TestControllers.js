const Connection = require("../config/ConnectionDB");
const Article = require("../models/Article.model.js");

// Ramasse miette (clean de l'objet)
const privateProps = new WeakMap();

class TestControllers extends Connection {
  constructor() {
    super();
    privateProps.set(this.databaseConnection());
  }
  
  get(req, res) {
    console.log('article')
    // Article.create({title: 'mon super titre', descritption: 'ma super description'},(err, data) => {
    //   if (err) console.log('Error', err)
    //   console.log('data', data)
    // })

    Article.find((err, data) => {
      if (err) console.log('Error', err)
      console.log('data', data)
    })
    
    try {
      return res.send({
        status: "success",
        message: "Method Get Test Controller",
        // data
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