// Modules
import { Router } from 'express';

// Controllers
import {
    // Test
    GetTest, PostTest,
    // Monit
    GetMonit, EditMonit, EditTheme,
    GetPages, GetPage, CreatePage, PutPage, DeletePage,
    GetSections, CreateSection, PutSection, AddSectionToPage, DeleteSectionToPage, OrderSectionsToPage,
    // Profile
    GetProfile, PostProfile, PutProfile,
    // Authenticate
    LoginAuth, RegisterAuth,
    // User
    PutPassword, PutAccount, CheckPassword,
    // Session
    GetSession, ExtendSession, Logout
} from '../controllers';

// Middlewares
import {
    // Constructor
    // isValid, isAdmin, isProp, isRoot,
    // Function
    checkHeader
} from '../middlewares/index'

const router = Router()

router.use(checkHeader)

router.route('/')
    .get(GetTest)
// .post(isValid, isAdmin, PostTest)

router.route('/landing')
    .get(GetMonit)
    .put(EditMonit)

router.route('/profile')
    .get(GetProfile)
    .post(PostProfile)
    .put(PutProfile)

router.route('/theme')
    .put(EditTheme)

router.route('/pages')
    .get(GetPages)

router.route('/page')
    .post(CreatePage)
    .put(PutPage)

router.route('/page/:name')
    .get(GetPage)
    .delete(DeletePage)

router.route('/sectiontopage')
    .post(AddSectionToPage)
    .put(DeleteSectionToPage)

router.route('/ordersectiontopage')
    .put(OrderSectionsToPage)

router.route('/sections')
    .get(GetSections)

router.route('/section')
    .post(CreateSection)
    .put(PutSection)

router.route('/session')
    .get(GetSession)

router.route('/extendsession')
    .get(ExtendSession)

router.route('/auth')
    .put(LoginAuth)
    .post(RegisterAuth)

router.route('/logout')
    .get(Logout)

router.route('/account')
// .post(isValid, isAdmin, PutAccount)
// .put(isValid, isAdmin, PutPassword)

router.route('/check/password')
    .put(CheckPassword)

module.exports = router