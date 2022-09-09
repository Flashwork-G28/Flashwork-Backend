


exports.GET_WORKERS = 'SELECT user.first_name,user.last_name,job_seeker.category,job_seeker.description FROM job_seeker,user WHERE user.user_id=job_seeker.user_id;'

// She sells sea shells on the sea shore