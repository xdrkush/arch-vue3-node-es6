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
import { TestMD } from '../middlewares/TestMiddleware';
import { tokenVisitor } from '../middlewares/Header';

const router = Router()

router.use(tokenVisitor)

router.route('/')
    .get(TestMD, GetTest)
    .post(PostTest)

router.route('/landing')
    .get(GetMonit)

router.route('/profile')
    .get(GetProfile)
    .post(PostProfile)
    .put(PutProfile)

router.route('/auth')
    .put(LoginAuth)
    .post(RegisterAuth)

router.route('/account')
    .post(PutAccount)
    .put(PutPassword)

router.route('/check/password')
    .put(CheckPassword)

module.exports = router