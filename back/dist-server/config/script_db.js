"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _User = _interopRequireDefault(require("../models/User.model"));

var _Article = _interopRequireDefault(require("../models/Article.model"));

var _Monit = _interopRequireDefault(require("../models/Monit.model"));

var _bcrypt = _interopRequireDefault(require("bcrypt"));

console.log('Script DB starter ...');

function run() {
  // Create User
  _User["default"].find({}, /*#__PURE__*/function () {
    var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(err, data) {
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(data.length <= 0)) {
                _context.next = 5;
                break;
              }

              _context.next = 3;
              return _User["default"].create({
                name: 'user',
                nameCompany: 'Davroot Team',
                // Password is hashed in models | UserSchema.pre('save', ...
                password: 'user$',
                mail: 'user@...',
                address: "7 rue de joinville, 42 000, France",
                phone: '01.01.01.01.01',
                isProp: true,
                isAdmin: true,
                description: "Skevent dleout danvez biz-yod rumm goz gar tabut bazh mil skrijañ, Menez Du dec'h ehan kreisteiz neud tad eil huanadiñ bed lizherenn. Lies gwinegr c'hoar-gaer. Houlenn Menez Mikael anv koumoul, broust brumenn daoust ha. Ret ki lazhañ dianav gwenn hor beg-douar arabat skubañ ken truez tre kar hon leue droug-mor, chom hennezh hag Bro-saoz. Ma fazi geot kein gwechall, rak mil c'hwezhañ e fri hor kae diwar-benn"
              }, function (err, data) {
                console.log('Create User isProp OK !!!', data);
              });

            case 3:
              _context.next = 5;
              return _User["default"].create({
                name: 'davroot',
                // Password is hashed in models | UserSchema.pre('save', ...
                password: 'davroot$',
                mail: 'davroot@...',
                isAdmin: true,
                isRoot: true
              }, function (err, data) {
                console.log('Create User isRoot OK !!!', data);
              });

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }()); // Create Landing


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

}

run();