const express = require('express');
const {getJobs, getLatestJobs} = require('../controllers/jobs')

const router = express.Router();

router.route("/")
    .get(getJobs)

router.route("/last")
    .get(getLatestJobs)

module.exports = router;