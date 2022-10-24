
exports.GET_BOOKING_WORKERS = "SELECT worker_booking.id , worker_booking.job_seeker_id,worker_booking.req_date, worker_booking.required_date, worker_booking.location, (CASE worker_booking.payment_type WHEN \'1\' THEN \'Online\' WHEN \'0\' THEN \'Cash\' END)  AS payment_type , worker_booking.pay, worker_booking.worker_count , worker_booking.description , worker_booking.category ,(CASE worker_booking.status WHEN \'0\' THEN \'None\' WHEN \'1\' THEN \'Accept\' END) AS status , user.first_name , user.last_name, user.type, user.mobile FROM worker_booking LEFT JOIN user ON worker_booking.job_seeker_id = user.user_id WHERE worker_booking.job_provider_id=? ORDER BY worker_booking.id DESC;"

exports.GET_SAVED_WORKERS ='SELECT * FROM favourote;'

