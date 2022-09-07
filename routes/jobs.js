const express = require('express');
const {getJobs, getLatestJobs, applyForJob} = require('../controllers/jobs')

const router = express.Router();

router.route("/")
    .get(getJobs)

router.route("/last")
    .get(getLatestJobs)

router.route("/apply")
    .post(applyForJob)

module.exports = router;