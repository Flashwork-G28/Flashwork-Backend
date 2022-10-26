const {createJobSeeker,ProviderProfile,updateSeeker} = require("../controllers/JobSeekerController");
const express = require('express');


const router = express.Router();
router.route("/profile")
    .get(createJobSeeker);
router.route("/jobProviderProfile")
    .get(ProviderProfile);
router.route("/updateProfile").post(updateSeeker)
console.log("check here")

module.exports = router;