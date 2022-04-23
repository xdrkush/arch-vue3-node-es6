// Modules
import express from 'express';

// Controllers
import {
    // Test
    GetTest,
    PostTest,
    // Monit
    GetMonit
} from '../controllers';

// Middlewares
import { TestMD } from '../middlewares/TestMiddleware';

const router = express.Router()

router.route('/')
    .get(TestMD, GetTest)
    .post(PostTest)

router.route('/landing')
    .get(TestMD, GetMonit)

module.exports = router