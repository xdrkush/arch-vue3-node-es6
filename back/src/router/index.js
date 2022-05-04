// Modules
import { Router } from 'express';

// Controllers
import {
    // Test
    GetTest, PostTest,
    // Monit
    GetMonit,
    // Profile
    GetProfile, PostProfile, PutProfile,
    // Authenticate
    LoginAuth, RegisterAuth,
    // User
    PutPassword, PutAccount, CheckPassword
} from '../controllers';

// Middlewares
import {
    // Constructor
    isValid, isAdmin, isProp, isRoot,
    // Function
    tokenVisitor
} from '../middlewares/index'

const router = Router()

router.use(tokenVisitor)

router.route('/')
    .get(GetTest)
    .post(PostTest)

router.route('/landing')
    .get(GetMonit)

router.route('/profile')
    .get(GetProfile)
    .post(isValid, isAdmin, PostProfile)
    .put(isValid, isAdmin, PutProfile)

router.route('/auth')
    .put(LoginAuth)
    .post(RegisterAuth)

router.route('/account')
    .post(isValid, isAdmin, PutAccount)
    .put(isValid, isAdmin, PutPassword)

router.route('/check/password')
    .put(isValid, isAdmin, CheckPassword)

module.exports = router