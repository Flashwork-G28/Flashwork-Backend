const express = require('express');
const {getBookingWorkers, getSavedWorkers} = require('../controllers/jobProvider')

const router = express.Router();

router.route("/")
    .post(getBookingWorkers)

router.route("/saveWorkers")
    .post(getSavedWorkers)

module.exports = router;