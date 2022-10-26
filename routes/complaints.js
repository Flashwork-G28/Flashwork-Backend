const express = require('express');
const {JobSeekerCompl, ViewCompl, DeleteCompl} = require('../controllers/complaints');

const router = express.Router();

router.route("/JobSeekerCompl")
    .post(JobSeekerCompl)

router.route("/ViewCompl")
    .get(ViewCompl)

router.route("/DeleteCompl/:id")
    .delete(DeleteCompl)

module.exports = router;