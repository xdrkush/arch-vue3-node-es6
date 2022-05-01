import User from "../models/User.model";
import Article from "../models/Article.model";
import Monit from "../models/Monit.model";
import bcrypt from "bcrypt";

console.log('Script DB starter ...')

// Create User
User.find({}, (err, data) => {
    if (data.length <= 0) User.create({
        name: 'user',
        nameCompany: 'Davroot Team',
        password: 'user$',
        mail: 'davroot@...',
        address: "21 Rue de la Guillauderie, 44118 La Chevrolière, France",
        phone: '01.01.01.01.01',
        isProp: true,
        description: "Skevent dleout danvez biz-yod rumm goz gar tabut bazh mil skrijañ, Menez Du dec'h ehan kreisteiz neud tad eil huanadiñ bed lizherenn. Lies gwinegr c'hoar-gaer. Houlenn Menez Mikael anv koumoul, broust brumenn daoust ha. Ret ki lazhañ dianav gwenn hor beg-douar arabat skubañ ken truez tre kar hon leue droug-mor, chom hennezh hag Bro-saoz. Ma fazi geot kein gwechall, rak mil c'hwezhañ e fri hor kae diwar-benn"
    }, (err, data) => {
        console.log('Create User OK !!!', data)
    })
})

// Create Landing
User.find({}, (err, data) => {
    if (data.length <= 0) Monit.create({ landing: true }, (err, data) => {
        if (err) console.log(err)
        else console.log('create landing', data)
    })
})

// edit User
// const hash = bcrypt.hashSync("user$", 10)
// User.findByIdAndUpdate('626d3ca8145d430a06b403e9', { password: hash }, (err, data) => {
//     if (err) console.log(err)
//     else console.log('Edit user', data)
// })