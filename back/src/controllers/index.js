import TestControllers from './TestControllers'
import MonitControllers from './MonitControllers'
import ProfileControllers from './ProfileControllers'
import AuthControllers from './AuthControllers'
import UserControllers from './UserControllers'

// Script for interact with DB
// require('../config/script_db')

module.exports = {
    // TestControllers
    GetTest: (req, res) => new TestControllers().get(req, res),
    PostTest: (req, res) => new TestControllers().post(req, res),

    // MonitControllers
    GetMonit: (req, res) => new MonitControllers().get(req, res),

    // ProfileControllers
    GetProfile: (req, res) => new ProfileControllers().get(req, res),
    PostProfile: (req, res) => new ProfileControllers().post(req, res),
    PutProfile: (req, res) => new ProfileControllers().put(req, res),

    // AuthControllers
    LoginAuth: (req, res) => new AuthControllers().login(req, res),
    RegisterAuth: (req, res) => new AuthControllers().create(req, res),

    // UserControllers
    PutAccount: (req, res) => new UserControllers().putAccount(req, res),
    PutPassword: (req, res) => new UserControllers().putPassword(req, res),
    CheckPassword: (req, res) => new UserControllers().checkPassword(req, res)

    // XXXControllers
    // GetXXX: (req, res) => new XXXControllers().get,
}