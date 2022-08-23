const express = require('express');
// const { getAllStudent,regStudent } = require('../controllers/student');
const { createAuthJobProvider } = require('../controllers/auth0Controller')

const router = express.Router();

router.route("/jobprovider")
    .post(createAuthJobProvider)

router.route("/jobseeker")
    .post(createAuthJobProvider)

router.route("/manpower")
    .post(createAuthJobProvider)

module.exports = router;