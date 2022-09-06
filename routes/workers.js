const express = require('express');
const {getWorkers} = require('../controllers/workers')

const router = express.Router();

router.route("/")
    .get(getWorkers)

module.exports = router;