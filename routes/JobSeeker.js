const {createJobSeeker} = require("../controllers/JobSeekerController");
const express = require('express');

const router = express.Router();
router.route("/profile")
    .get(createJobSeeker)

module.exports = router;