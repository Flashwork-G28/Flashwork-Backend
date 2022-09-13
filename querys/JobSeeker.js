// exports.GET_Profile_Edit= "SELECT * FROM user";

exports.GET_Profile_Edit= "SELECT user.first_name, user.last_name, user.email,user.mobile,user.city,job_seeker.description FROM user INNER JOIN job_seeker ON user.user_id=job_seeker.user_id  WHERE user.email='dil@gmail.com'"
