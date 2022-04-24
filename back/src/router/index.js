// Modules
import express from 'express';

// Controllers
import {
    // Test
    GetTest, PostTest,
    // Monit
    GetMonit,
    // User
    GetProfile, PostProfile, PutProfile,
    // Authenticate
    LoginAuth, RegisterAuth
} from '../controllers';

// Middlewares
import { TestMD } from '../middlewares/TestMiddleware';

const router = express.Router()

router.route('/')
    .get(TestMD, GetTest)
    .post(PostTest)

router.route('/landing')
    .get(TestMD, GetMonit)

router.route('/profile')
    .get(GetProfile)
    .post(PostProfile)
    .put(PutProfile)

router.route('/auth')
    .put(LoginAuth)
    .post(RegisterAuth)

module.exports = router