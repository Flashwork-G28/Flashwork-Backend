const express = require('express');
// const { getAllStudent,regStudent } = require('../controllers/student');
const {getAccessToken, createAuthJobProvider } = require('../controllers/auth0Controller')

const router = express.Router();

router.route("/jobprovider")
    .post(createAuthJobProvider)

module.exports = router;