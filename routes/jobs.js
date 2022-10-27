const express = require('express');

const {getJobs, getLatestJobs, applyForJob, JobAdPost, JobAdView, DeleteJobs, applyJobs,requestJobs} = require('../controllers/jobs')


const router = express.Router();

router.route("/")
    .post(getJobs)

router.route("/last")
    .get(getLatestJobs)

router.route("/apply")
    .post(applyForJob)


router.route("/appliedJobs").get(applyJobs)
router.route("/requestJobs").get(requestJobs)

router.route("/JobAdPost")
    .post(JobAdPost)

router.route("/JobAdView")
    .get(JobAdView)

router.route("/DeleteJobs")
    .delete(DeleteJobs)


module.exports = router;