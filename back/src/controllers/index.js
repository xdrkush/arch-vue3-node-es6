import TestControllers from './TestControllers'
import MonitControllers from './MonitControllers'

module.exports = {
    // TestControllers
    GetTest: new TestControllers().get,
    PostTest: new TestControllers().post,

    // MonitControllers
    GetMonit: new MonitControllers().get,

    // XXXControllers
    // GetXXX: new XXXControllers().get,
}