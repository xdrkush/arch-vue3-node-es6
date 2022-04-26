import Connection from "../config/ConnectionDB";
import Article from "../models/Article.model.js";

// Ramasse miette (clean de l'objet)
const privateProps = new WeakMap();

export default class TestControllers extends Connection {
  constructor() {
    super();
    privateProps.set(this.databaseConnection());
  }
  
  get(req, res) {
    console.log('article', req)
    // Article.create({title: 'mon super titre', descritption: 'ma super description'},(err, data) => {
    //   if (err) console.log('Error', err)
    //   console.log('data', data)
    // })
    // const dbArticle = await Article.find()
    // Article.find((err, data) => {
    //   if (err) console.log('Error', err)
    //   console.log('data', data)
    // })
    
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
