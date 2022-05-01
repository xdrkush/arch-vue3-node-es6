"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _User = _interopRequireDefault(require("../models/User.model"));

var _Article = _interopRequireDefault(require("../models/Article.model"));

var _Monit = _interopRequireDefault(require("../models/Monit.model"));

var _bcrypt = _interopRequireDefault(require("bcrypt"));

console.log('Script DB starter ...'); // Create User

_User["default"].find({}, function (err, data) {
  if (data.length <= 0) _User["default"].create({
    name: 'user',
    nameCompany: 'Davroot Team',
    password: 'user$',
    mail: 'davroot@...',
    address: "21 Rue de la Guillauderie, 44118 La Chevrolière, France",
    phone: '01.01.01.01.01',
    isProp: true,
    description: "Skevent dleout danvez biz-yod rumm goz gar tabut bazh mil skrijañ, Menez Du dec'h ehan kreisteiz neud tad eil huanadiñ bed lizherenn. Lies gwinegr c'hoar-gaer. Houlenn Menez Mikael anv koumoul, broust brumenn daoust ha. Ret ki lazhañ dianav gwenn hor beg-douar arabat skubañ ken truez tre kar hon leue droug-mor, chom hennezh hag Bro-saoz. Ma fazi geot kein gwechall, rak mil c'hwezhañ e fri hor kae diwar-benn"
  }, function (err, data) {
    console.log('Create User OK !!!', data);
  });
}); // Create Landing


_User["default"].find({}, function (err, data) {
  if (data.length <= 0) _Monit["default"].create({
    landing: true
  }, function (err, data) {
    if (err) console.log(err);else console.log('create landing', data);
  });
}); // edit User
// const hash = bcrypt.hashSync("user$", 10)
// User.findByIdAndUpdate('626d3ca8145d430a06b403e9', { password: hash }, (err, data) => {
//     if (err) console.log(err)
//     else console.log('Edit user', data)
// })