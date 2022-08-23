const conn = require("../services/db");
exports.INSERT_USER = 'INSERT INTO user (user_id, first_name, last_name, nid, street, city, mobile, email, type, status) VALUES (NULL, ?, ?, ?, ?, ?,?, ?,? , ?);'

exports.GET_USER_ID = 'SELECT user_id FROM `user` WHERE nid = '

exports.INSERT_SEEKER = 'INSERT INTO job_seeker (job_seeker_id, gender, description, category, user_id) VALUES (NULL, ?, ?, ?, ?);'

exports.INSERT_SEEKER_USER =  `INSERT INTO user (user_id, first_name, last_name, nid, street, city, mobile, email, type, status) VALUES (NULL, ?, ?, ?, ?, ?, ?, ?, ?, ?); INSERT INTO job_seeker (job_seeker_id, gender, description, category, user_id) VALUES (NULL, ?, ?, ?, LAST_INSERT_ID());`

