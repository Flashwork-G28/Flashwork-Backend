const express = require('express');
const {getBookingWorkers} = require('../controllers/jobProvider')

const router = express.Router();

router.route("/")
    .get(getBookingWorkers)

module.exports = router;