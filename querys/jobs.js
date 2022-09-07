exports.GET_JOBS = 'SELECT * FROM jobs,user WHERE jobs.user_id = user.user_id;'

exports.GET_LATESTJOBS = 'SELECT * FROM jobs,user WHERE jobs.user_id = user.user_id ORDER BY jobs.id DESC LIMIT 1'

exports.APPLY_FOR_JOB = 'INSERT INTO job_apply ( id, job_id, seeker_id, date) VALUES (NULL,?, ?,CURRENT_TIMESTAMP);'
