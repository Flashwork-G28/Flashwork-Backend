const express = require('express');
const { getAllStudent,regStudent } = require('./student');
const router = express.Router();

router.route("/")
    .get(getAllStudent)
    .post(regStudent)

module.exports = router;