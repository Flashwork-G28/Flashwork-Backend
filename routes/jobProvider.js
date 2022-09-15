const express = require('express');
const {getBookingWorkers} = require('../controllers/jobProvider')

const router = express.Router();

router.route("/")
    .post(getBookingWorkers)

module.exports = router;