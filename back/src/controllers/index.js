import TestControllers from './TestControllers'

module.exports = {
    // TestControllers
    GetTest: new TestControllers().get,
    PostTest: new TestControllers().post

    // XXXControllers
    // GetXXX: new XXXControllers().get,
}