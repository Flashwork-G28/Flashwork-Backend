const express = require('express');
const {getJobs, getLatestJobs, applyForJob, JobAdPost, JobAdView, DeleteJobs} = require('../controllers/jobs')

const router = express.Router();

router.route("/")
    .get(getJobs)

router.route("/last")
    .get(getLatestJobs)

router.route("/apply")
    .post(applyForJob)

router.route("/JobAdPost")
    .post(JobAdPost)

router.route("/JobAdView")
    .get(JobAdView)

router.route("/DeleteJobs")
    .delete(DeleteJobs)

module.exports = router;