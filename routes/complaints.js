const express = require('express');
const {JobSeekerCompl, ViewCompl} = require('../controllers/complaints');

const router = express.Router();

router.route("/JobSeekerCompl")
    .post(JobSeekerCompl)

router.route("/ViewCompl")
    .get(ViewCompl)

module.exports = router;