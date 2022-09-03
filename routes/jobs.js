const express = require('express');
const {getJobs} = require('../controllers/jobs')

const router = express.Router();

router.route("/")
    .get(getJobs)

module.exports = router;