const express = require('express');
const {postChat} = require('../controllers/chat')

const router = express.Router();

router.route("/postChat")
    .post(postChat)

module.exports = router;