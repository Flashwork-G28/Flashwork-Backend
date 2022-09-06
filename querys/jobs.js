exports.GET_JOBS = 'SELECT * FROM jobs,user WHERE jobs.user_id = user.user_id;'

exports.GET_LATESTJOBS = 'SELECT * FROM jobs,user WHERE jobs.user_id = user.user_id ORDER BY jobs.id DESC LIMIT 1'