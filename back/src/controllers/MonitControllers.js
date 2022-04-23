const Connection = require("../config/ConnectionDB");
const Monit = require("../models/Monit.model.js");

// Ramasse miette (clean de l'objet)
const privateProps = new WeakMap();

export default class MonitControllers extends Connection {
  constructor() {
    super();
    privateProps.set(this.databaseConnection());
  }
  
  async get(req, res) {
    const dbMonit = await Monit.find()
    
    try {
      return res.status(200).json({
        status: "success",
        message: "Method Get Monit Controller",
        data: { landing: dbMonit[0].landing }
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