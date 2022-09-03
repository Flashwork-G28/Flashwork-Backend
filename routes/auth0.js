const express = require('express');
const { createAuthJobProvider, createAuthJobSeeker, createAuthManPower} = require('../controllers/auth0Controller')

const router = express.Router();

router.route("/jobprovider")
    .post(createAuthJobProvider)

router.route("/jobseeker")
    .post(createAuthJobSeeker)

router.route("/manpower")
    .post(createAuthManPower)

module.exports = router;