const express = require('express');
const {ViewPay} = require('../controllers/payments');

const router = express.Router();

router.route("/ViewPay")
    .get(ViewPay)

module.exports = router;