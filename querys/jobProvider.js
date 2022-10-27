
exports.GET_BOOKING_WORKERS = "SELECT worker_booking.id , worker_booking.job_seeker_id,worker_booking.req_date, worker_booking.required_date, worker_booking.location, (CASE worker_booking.payment_type WHEN \'1\' THEN \'Online\' WHEN \'0\' THEN \'Cash\' END)  AS payment_type , worker_booking.pay, worker_booking.worker_count , worker_booking.description , worker_booking.category ,(CASE worker_booking.status WHEN \'0\' THEN \'None\' WHEN \'1\' THEN \'Accept\' END) AS status , user.first_name , user.last_name, user.type, user.mobile FROM worker_booking LEFT JOIN user ON worker_booking.job_seeker_id = user.user_id WHERE worker_booking.job_provider_id=? ORDER BY worker_booking.id DESC;"

exports.GET_SAVED_WORKERS ="SELECT user.user_id,user.first_name,user.last_name,user.img,user.mobile,job_seeker.description,job_seeker.category,COUNT(complet_job.id) AS complet_count ,AVG(rate.rate) AS rate FROM user,rate,job_seeker,complet_job, favourite WHERE user.user_id=job_seeker.user_id AND user.user_id=complet_job.job_seeker_id AND complet_job.id=rate.complet_job_id AND favourite.job_provider_id= ? AND favourite.seeker_manpower=user.user_id AND complet_job.status=\'1\'  GROUP BY user.user_id;"

exports.GET_NOTIFICATION ="SELECT * FROM job_provider_notification WHERE user_id= ? ;"

exports.GET_NOTIFICATION_COUNT ="SELECT COUNT(user_id) AS count FROM job_provider_notification WHERE user_id= ? ;"

