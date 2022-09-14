const conn = require("../services/db");
const {JOB_SEEKER_COMPL} = require("../querys/complaints");

exports.JobSeekerCompl = async (request, response) => {
    console.log(request.body);
    conn.query(JOB_SEEKER_COMPL, [request.body.email, request.body.reason, request.body.rating], function(err, data, fields) {
        if(err) {
            console.log(err);
            response.status(401).json('Sorry!! Commplaint is not posted')
        } else {
            console.log(data);
            response.status(201).json('Complaint successful!')
        }
    })
}