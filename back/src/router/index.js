// Modules
import express from 'express';

// Controllers
import TestControllers from '../controllers/TestControllers';
import MonitControllers from '../controllers/MonitControllers';

// Middlewares
import { TestMD } from '../middlewares/TestMiddleware';

const router = express.Router()
// let cb = new TestControllers();
// // cb.connectedCallback()

router.route('/')
    .get(TestMD, new TestControllers().get)
    .post(new TestControllers().post)

router.route('/landing')
    .get(TestMD, new MonitControllers().get)

module.exports = router