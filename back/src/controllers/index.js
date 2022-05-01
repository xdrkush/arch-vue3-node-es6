import TestControllers from './TestControllers'
import MonitControllers from './MonitControllers'
import ProfileControllers from './ProfileControllers'
import AuthControllers from './AuthControllers'
import UserControllers from './UserControllers'

// Script for interact with DB
// require('../config/script_db')

module.exports = {
    // TestControllers
    GetTest: new TestControllers().get,
    PostTest: new TestControllers().post,

    // MonitControllers
    GetMonit: new MonitControllers().get,

    // ProfileControllers
    GetProfile: new ProfileControllers().get,
    PostProfile: new ProfileControllers().post,
    PutProfile: new ProfileControllers().put,

    // AuthControllers
    LoginAuth: new AuthControllers().login,
    RegisterAuth: new AuthControllers().create,

    // UserControllers
    PutAccount: new UserControllers().putAccount,
    PutPassword: new UserControllers().putPassword,
    CheckPassword: new UserControllers().checkPassword

    // XXXControllers
    // GetXXX: new XXXControllers().get,
}