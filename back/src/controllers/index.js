import TestControllers from './TestControllers'
import MonitControllers from './MonitControllers'
import ProfileControllers from './ProfileControllers'
import AuthControllers from './AuthControllers'
import UserControllers from './UserControllers'
import SessionControllers from './SessionControllers'
import PageControllers from './PageControllers'
import SectionControllers from './SectionControllers'

// Script for interact with DB
// require('../config/script_db')

module.exports = {
    // TestControllers
    GetTest: (req, res) => new TestControllers().get(req, res),
    PostTest: (req, res) => new TestControllers().post(req, res),

    // MonitControllers
    GetMonit: (req, res) => new MonitControllers().get(req, res),
    EditMonit: (req, res) => new MonitControllers().put(req, res),
    EditTheme: (req, res) => new MonitControllers().editTheme(req, res),

    // ProfileControllers
    GetProfile: (req, res) => new ProfileControllers().get(req, res),
    PostProfile: (req, res) => new ProfileControllers().post(req, res),
    PutProfile: (req, res) => new ProfileControllers().put(req, res),

    // PageControllers
    GetPages: (req, res) => new PageControllers().get(req, res),
    GetPage: (req, res) => new PageControllers().getByName(req, res),
    CreatePage: (req, res) => new PageControllers().post(req, res),
    PutPage: (req, res) => new PageControllers().put(req, res),
    DeletePage: (req, res) => new PageControllers().delete(req, res),

    // SectionControllers
    GetSections: (req, res) => new SectionControllers().get(req, res),
    CreateSection: (req, res) => new SectionControllers().post(req, res),
    PutSection: (req, res) => new SectionControllers().put(req, res),
    AddSectionToPage: (req, res) => new SectionControllers().addSectionToPage(req, res),
    DeleteSectionToPage: (req, res) => new SectionControllers().deleteSectionToPage(req, res),

    // AuthControllers
    LoginAuth: (req, res) => new AuthControllers().login(req, res),
    RegisterAuth: (req, res) => new AuthControllers().create(req, res),

    // UserControllers
    PutAccount: (req, res) => new UserControllers().putAccount(req, res),
    PutPassword: (req, res) => new UserControllers().putPassword(req, res),
    CheckPassword: (req, res) => new UserControllers().checkPassword(req, res),
    
    // SessionControllers
    GetSession: (req, res) => new SessionControllers().get(req, res),
    Logout: (req, res) => new SessionControllers().logout(req, res),
    ExtendSession : (req, res) => new SessionControllers().extendSession(req, res)
    // XXXControllers
    // GetXXX: (req, res) => new XXXControllers().get,
}