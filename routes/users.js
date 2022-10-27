const express = require('express');
const {getUsers, updateUsers} = require('../controllers/users')

const router = express.Router();

router.route("/")
    .get(getUsers)

router.route("/updateStatus")
    .put(updateUsers)

module.exports = router;