const conn = require("../services/db");

exports.INSERT_USER = 'INSERT INTO user (user_id, first_name, last_name, nid, street, city, mobile, email, type, status) VALUES (?, ?, ?, ?, ?, ?,?, ?,? , ?);'

exports.INSET_JOPPROVIDER = 'INSERT INTO job_provider (job_provider_id, gender, user_id) VALUES (NULL, ?, ?);'

exports.INSERT_JOBSEEKER = 'INSERT INTO job_seeker (job_seeker_id, gender, description, category, user_id) VALUES (NULL, ?, ?, ?, ?);'








