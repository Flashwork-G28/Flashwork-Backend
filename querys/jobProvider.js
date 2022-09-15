
exports.GET_BOOKING_WORKERS = 'SELECT worker_booking.id , worker_booking.job_seeker_id,worker_booking.req_date, worker_booking.required_date, worker_booking.location, worker_booking.payment_type, worker_booking.pay, worker_booking.worker_count , worker_booking.description , worker_booking.category ,worker_booking.status , user.first_name , user.last_name, user.type, user.mobile FROM worker_booking LEFT JOIN user ON worker_booking.job_seeker_id = user.user_id WHERE worker_booking.job_provider_id= ? ORDER BY worker_booking.id DESC;'
