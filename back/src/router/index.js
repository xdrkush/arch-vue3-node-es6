// Modules
import { Router } from 'express';

// Controllers
import {
    // Test
    GetTest, PostTest,
    // Monit
    GetMonit, EditMonit, EditTheme, EditThemes,
    GetPages, GetPage, CreatePage, PutPage, DeletePage,
    GetSections, CreateSection, PutSection, AddSectionToPage, DeleteSectionToPage, OrderSectionsToPage,
    // Profile
    GetProfile, PostProfile, PutProfile,
    // Authenticate
    LoginAuth, RegisterAuth,
    // User
    PutPassword, PutAccount, CheckPassword,
    // Session
    GetSession, GetSessions, GetSessionsWithDelay, ExtendSession, Logout
} from '../controllers';

// Middlewares
import {
    // Constructor
    isValid, isAdmin, isProp, isRoot, isPropOrIsRoot,
    // Function
    checkHeader
} from '../middlewares/index'

const router = Router()

router.use(checkHeader)

router.route('/')
    .get(GetTest)

router.route('/landing')
    .get(GetMonit)
    .put(isValid, isAdmin, isPropOrIsRoot, EditMonit)

router.route('/profile')
    .get(GetProfile)
    .post(isValid, isAdmin, isPropOrIsRoot, PostProfile)
    .put(isValid, isAdmin, isPropOrIsRoot, PutProfile)

router.route('/theme')
    .put(isValid, isAdmin, isPropOrIsRoot, EditTheme)

router.route('/pages')
    .get(GetPages)

router.route('/page')
    .post(isValid, isAdmin, isPropOrIsRoot, CreatePage)
    .put(isValid, isAdmin, isPropOrIsRoot, PutPage)

router.route('/page/:name')
    .get(GetPage)
    .delete(isValid, isAdmin, isPropOrIsRoot, DeletePage)

router.route('/sectiontopage')
    .post(isValid, isAdmin, isPropOrIsRoot, AddSectionToPage)
    .put(isValid, isAdmin, isPropOrIsRoot, DeleteSectionToPage)

router.route('/ordersectiontopage')
    .put(isValid, isAdmin, isPropOrIsRoot, OrderSectionsToPage)

router.route('/sections')
    .get(GetSections)

router.route('/section')
    .post(isValid, isAdmin, isPropOrIsRoot, CreateSection)
    .put(isValid, isAdmin, isPropOrIsRoot, PutSection)

router.route('/session')
    .get(GetSession)

router.route('/sessions')
    .get(isValid, isAdmin, isPropOrIsRoot, GetSessions)

router.route('/sessions/:delay')
    .get(isValid, isAdmin, isPropOrIsRoot, GetSessionsWithDelay)

router.route('/extendsession')
    .get(ExtendSession)

router.route('/auth')
    .put(LoginAuth)
    .post(RegisterAuth)

router.route('/logout')
    .get(Logout)

// router.route('/account')
// .post(isValid, isAdmin, PutAccount)
// .put(isValid, isAdmin, PutPassword)

router.route('/check/password')
    .put(CheckPassword)

module.exports = router