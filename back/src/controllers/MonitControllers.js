import Connection from "../config/ConnectionDB";
import Monit from "../models/Monit.model.js";

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
        landing: dbMonit[0].landing,
        theme: dbMonit[0].theme
      });
    } catch (error) {
      throw error;
    }
  }

  async put(req, res) {
    try {
      const { landing } = req.body;
      const monit = await Monit.findOne({ actived: true })
      monit.landing = landing
      monit.save()

      return res.send({
        status: "success",
        landing: monit.landing,
        message: "Method Put Monit Controller",
      });
    } catch (error) {
      throw error;
    }
  }

  async editTheme(req, res) {
    try {
      console.log('edit theme', req.body)
      const { theme } = req.body;
      const monit = await Monit.findOne({ actived: true })
      monit.theme = theme
      monit.save()

      return res.send({
        status: "success",
        dbTheme: monit.theme,
        message: "Method Put Monit Controller",
      });
    } catch (error) {
      throw error;
    }
  }

}