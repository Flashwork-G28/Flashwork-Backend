const express = require('express');
const {getWorkers , postWorkersBook ,getMAWorkers ,postManPowerBook, postFavourite} = require('../controllers/workers')

const router = express.Router();

router.route("/")
    .get(getWorkers)

router.route("/booking")
    .post(postWorkersBook)

router.route("/ManPower")
    .get(getMAWorkers)

router.route("/bookingMA")
    .post(postManPowerBook)

router.route("/favourite")
    .post(postFavourite)


module.exports = router;