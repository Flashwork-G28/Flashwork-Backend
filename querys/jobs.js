exports.GET_JOBS = 'SELECT jobs.id,jobs.title,jobs.category,jobs.apply_type,jobs.city,DATE_FORMAT(jobs.job_date, \'%Y %M %d\') AS job_date,jobs.pub_date,jobs.description,jobs.user_id,user.img,jobs.amc,jobs.pay FROM jobs,user WHERE jobs.user_id = user.user_id'

exports.GET_LATESTJOBS = 'SELECT jobs.id,jobs.title,jobs.category,jobs.apply_type,jobs.city,jobs.job_date,jobs.pub_date,jobs.description,jobs.user_id,user.img,jobs.amc,jobs.pay FROM jobs,user WHERE jobs.user_id = user.user_id ORDER BY jobs.id DESC LIMIT 1'

exports.APPLY_FOR_JOB = 'INSERT INTO job_apply ( id, job_id, seeker_id, date) VALUES (NULL,?, ?,CURRENT_TIMESTAMP);'

exports.UPDATE_AMC = 'UPDATE jobs SET amc = amc - 1 WHERE id = ?'

exports.JOB_AD_POST = 'INSERT INTO jobs (title, category, apply_type, city, rmc, amc, pay, pub_date, job_date, description, status, user_id) VALUES (?, ?, ?, ?, ?, ?, ?, CURRENT_TIMESTAMP, ?, ?, ?, ?);'

exports.JOB_AD_VIEW = 'SELECT * FROM jobs WHERE jobs.user_id = ?;'

exports.JOB_DELETE = 'DELETE FROM jobs WHERE (jobs.user_id = ?) && (jobs.id = ?);'