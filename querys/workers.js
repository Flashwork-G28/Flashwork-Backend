exports.GET_WORKERS = 'SELECT user.user_id, user.first_name , user.last_name , job_seeker.description , job_seeker.category FROM user INNER JOIN job_seeker ON user.user_id = job_seeker.user_id;'

exports.GET_WORKERS_RATE = 'SELECT AVG(rate) AS rating , COUNT(rate_receiver_id= ?) AS rating_count ,(SELECT COUNT(status) FROM complet_job WHERE status=?  AND job_seeker_id= ?) AS complet_count FROM rate WHERE rate_receiver_id= ?;'
