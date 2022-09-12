const express = require('express');
const {getWorkers , postWorkersBook} = require('../controllers/workers')

const router = express.Router();

router.route("/")
    .get(getWorkers)

router.route("/booking")
    .post(postWorkersBook)

module.exports = router;