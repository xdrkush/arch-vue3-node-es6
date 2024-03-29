import Connection from "../config/ConnectionDB";
import User from "../models/User.model.js";

// Ramasse miette (clean de l'objet)
const privateProps = new WeakMap();

export default class MonitControllers extends Connection {
  constructor() {
    super();
    privateProps.set(this.databaseConnection());
  }

  async get(req, res) {
    let info;
    const user = await User.findOne({ isProp: true }, [
      "nameCompany",
      "name",
      "mail",
      "phone",
      "address",
      "social",
      "description",
    ]);

    if (user) {
      info = {
        nameCompany: user.nameCompany,
        name: user.name,
        mail: user.mail,
        phone: user.phone,
        address: user.address,
        social: user.social,
        description: user.description,
      }
    }

    try {
      return res.status(200).json({
        status: "success",
        message: "Method Get Monit Controllersssss",
        profile: (info) ? info : "Aucun Profile"
      });
    } catch (error) {
      throw error;
    }
  }

  post(req, res) {
    const { name, mail, phone, description } = req.body;

    try {

      // User.create({
      //   name: 'user',
      //   mail: 'user@user.user',
      //   phone: '01.01.01.01.01',
      //   description: "Skevent dleout danvez biz-yod rumm goz gar tabut bazh mil skrijañ, Menez Du dec'h ehan kreisteiz neud tad eil huanadiñ bed lizherenn. Lies gwinegr c'hoar-gaer. Houlenn Menez Mikael anv koumoul, broust brumenn daoust ha. Ret ki lazhañ dianav gwenn hor beg-douar arabat skubañ ken truez tre kar hon leue droug-mor, chom hennezh hag Bro-saoz. Ma fazi geot kein gwechall, rak mil c'hwezhañ e fri hor kae diwar-benn ",
      // })

      return res.send({
        status: "success",
        message: "Method Post User Controller",
      });
    } catch {
      throw error;
    }
  }

  put(req, res) {
    // console.log('PUT User by name', req.body)
    const { oldName } = req.body;

    try {

      if (oldName) User.findOneAndUpdate({ name: oldName }, { ...req.body }, (err, data) => {
        // if (err) console.log(err)
        // else console.log('data', data)
      })

      return res.send({
        status: "success",
        message: "Method Post User Controller",
      });
    } catch {
      throw error;
    }
  }

}