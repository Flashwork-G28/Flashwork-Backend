const express = require('express');
const {JobSeekerCompl} = require('../controllers/complaints');

const router = express.Router();

router.route("/JobSeekerCompl")
    .post(JobSeekerCompl)

module.exports = router;