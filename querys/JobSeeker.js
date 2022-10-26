
exports.GET_Profile_Edit= "SELECT user.first_name, user.last_name, user.email,user.mobile,user.city,job_seeker.description,job_seeker_qualification.qualification FROM user JOIN job_seeker ON user.user_id=job_seeker.user_id JOIN job_seeker_qualification ON user.user_id=job_seeker_qualification.user_id WHERE user.user_id='631ae8f68afc747ecd63887c'";


exports.GET_jobProviderProfile="SELECT job_provider.conpanyName,user.mobile,user.email,user.city,job_provider.description FROM job_provider INNER JOIN user ON user.user_id=job_provider.user_id WHERE user.user_id='631ad9a144b0c634e5246551'";

exports.UPDATE_PROFILE = "UPDATE user first_name = ?, last_name = ?, city = ?,mobile = ?, email = ? WHERE user.user_id='631ad9a144b0c634e5246551' "

