const express = require('express');
const {yearPayment, monthPayment} = require("../services/payment");
const router = express.Router();

router.route("/year")
    .post(yearPayment)

router.route("/month")
    .post(monthPayment)

module.exports = router;