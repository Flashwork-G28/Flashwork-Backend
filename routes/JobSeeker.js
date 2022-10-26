const {createJobSeeker,ProviderProfile} = require("../controllers/JobSeekerController");
const express = require('express');


const router = express.Router();
router.route("/profile")
    .get(createJobSeeker);
router.route("/jobProviderProfile")
    .get(ProviderProfile);
console.log("check here")

module.exports = router;