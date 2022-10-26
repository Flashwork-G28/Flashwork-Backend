

exports.GET_WORKERS = "SELECT user.user_id,user.first_name,user.last_name,user.img,job_seeker.description,job_seeker.category,COUNT(complet_job.id) AS complet_count ,AVG(rate.rate) AS rate FROM user,rate,job_seeker,complet_job WHERE user.user_id=job_seeker.user_id AND user.user_id=complet_job.job_seeker_id AND complet_job.id=rate.complet_job_id AND complet_job.status='1' GROUP BY user.user_id;"

exports.POST_WORKERS_BOOK = 'INSERT INTO worker_booking (job_seeker_id, job_provider_id,req_date,required_date,location,payment_type,pay,worker_count,description,category,status) VALUES (?,? ,CURRENT_TIMESTAMP,?,?,?,?,1,?,(SELECT category FROM job_seeker WHERE job_seeker.user_id=?),0);'

exports.GET_MAWORKERS='SELECT * FROM (SELECT user.user_id AS u_id ,user.img,manpower.description, manpower.company_name, COUNT(complet_job.id) AS complet_count ,AVG(rate.rate) AS rate FROM user,rate,manpower,complet_job WHERE user.user_id=manpower.user_id AND user.user_id=complet_job.job_seeker_id AND complet_job.id=rate.complet_job_id AND complet_job.status=\'1\' GROUP BY user.user_id) AS MA LEFT JOIN manpower_category_list ON manpower_category_list.user_id=MA.u_id ORDER BY manpower_category_list.id;'

exports.POST_MANPOWER_BOOK = 'INSERT INTO worker_booking (job_seeker_id, job_provider_id,req_date,required_date,location,payment_type,pay,worker_count,description,category,status) VALUES (?,? ,CURRENT_TIMESTAMP,?,?,?,?,?,?,?,0);'

exports.POST_FAVOURITE = 'INSERT INTO favourite (seeker_manpower, job_provider_id) VALUES (?,?);'


exports.UPDATE_NOTIFICATION_BOOKING = 'INSERT INTO favourite (seeker_manpower, job_provider_id) VALUES (?,?);'



// UPDATE Customers
// SET ContactName = 'Alfred Schmidt', City = 'Frankfurt'
// WHERE CustomerID = 1;



