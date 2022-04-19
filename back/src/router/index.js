// Modules
import express from 'express';

// Controllers
import TestControllers from '../controllers/TestControllers';

// Middlewares
import { TestMD } from '../middlewares/TestMiddleware';

const router = express.Router()

router.route('/')
    .get(TestMD, new TestControllers().get)
    .post(new TestControllers().post)

module.exports = router