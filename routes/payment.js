const express = require('express');
const {yearPayment, monthPayment,pro} = require("../services/payment");
const router = express.Router();

router.route("/year/:id/:price")
    .post(yearPayment)

router.route("/month/:id/:price")
    .post(monthPayment)

router.route("/pro")
    .post(pro)

module.exports = router;