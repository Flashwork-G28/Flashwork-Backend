const express = require('express');
const {getBookingWorkers, getSavedWorkers ,getNotification,getNotificationCount,getOngoinAdvertiesment} = require('../controllers/jobProvider')

const router = express.Router();

router.route("/")
    .post(getBookingWorkers)

router.route("/saveWorkers")
    .post(getSavedWorkers)

router.route("/notification")
    .post(getNotification)

router.route("/notificationCount")
    .post(getNotificationCount)

router.route("/ongoinAdvertiesment")
    .post(getOngoinAdvertiesment)




module.exports = router;