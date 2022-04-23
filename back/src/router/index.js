// Modules
import express from 'express';

// Controllers
import {
    GetTest,
    PostTest,
    GetMonit
} from '../controllers';

// Middlewares
import { TestMD } from '../middlewares/TestMiddleware';

const router = express.Router()
// let cb = new TestControllers();
// // cb.connectedCallback()

router.route('/')
    .get(TestMD, GetTest)
    .post(PostTest)

router.route('/landing')
    .get(TestMD, GetMonit)

module.exports = router