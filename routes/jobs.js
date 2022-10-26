const express = require('express');
const {getJobs, getLatestJobs, applyForJob, applyJobs,requestJobs} = require('../controllers/jobs')

const router = express.Router();

router.route("/")
    .get(getJobs)

router.route("/last")
    .get(getLatestJobs)

router.route("/apply")
    .post(applyForJob)

router.route("/appliedJobs").get(applyJobs)
router.route("/requestJobs").get(requestJobs)

module.exports = router;