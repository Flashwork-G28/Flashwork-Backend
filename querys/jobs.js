exports.GET_JOBS = 'SELECT * FROM jobs,user WHERE jobs.user_id = user.user_id;'

exports.GET_LATESTJOBS = 'SELECT * FROM jobs,user WHERE jobs.user_id = user.user_id ORDER BY jobs.id DESC LIMIT 1'

exports.APPLY_FOR_JOB = 'INSERT INTO job_apply ( id, job_id, seeker_id, date) VALUES (NULL,?, ?,CURRENT_TIMESTAMP);'

exports.UPDATE_AMC = 'UPDATE jobs SET amc = amc - 1 WHERE id = ?'

exports.APPLIED_JOBS = 'SELECT user.first_name, user.last_name, jobs.category, jobs.status, user.city FROM user INNER JOIN jobs ON user.user_id=jobs.user_id'

exports.REQUEST_JOBS = 'SELECT user.first_name, user.last_name, jobs.category, jobs.status, user.city FROM user INNER JOIN jobs ON user.user_id=jobs.user_id'