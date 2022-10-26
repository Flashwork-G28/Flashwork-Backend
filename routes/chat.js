const express = require('express');
const {postChat, getChat} = require('../controllers/chat')

const router = express.Router();

router.route("/postChat")
    .post(postChat)

router.route("/getChat/:user_id")
    .get(getChat)

module.exports = router;