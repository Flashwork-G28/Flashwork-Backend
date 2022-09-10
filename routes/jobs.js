const express = require('express');
const {getJobs, getLatestJobs, applyForJob, JobAdPost} = require('../controllers/jobs')

const router = express.Router();

router.route("/")
    .get(getJobs)

router.route("/last")
    .get(getLatestJobs)

router.route("/apply")
    .post(applyForJob)

router.route("/JobAdPost")
    .post(JobAdPost) 

module.exports = router;