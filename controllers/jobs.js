const conn = require("../services/db");
const {GET_JOBS,GET_LATESTJOBS, APPLY_FOR_JOB, JOB_AD_POST} = require("../querys/jobs");

exports.getJobs = async (request, response ) => {
    // console.log(request.body);
    conn.query(GET_JOBS, (err, data, fields) => {
        if(err) {
            // console.log(err);
            response.status(401).json({
                data: err
            })
        } else {
            // console.log(data);
            response.status(200).send(
                data
            )
        }
    })
}

exports.getLatestJobs = async (request, response ) => {
    // console.log(request.body);
    conn.query(GET_LATESTJOBS, (err, data, fields) => {
        if(err) {
            // console.log(err);
            response.status(401).json({
                data: err
            })
        } else {
            // console.log(data);
            response.status(200).send(
                data
            )
        }
    })
}
exports.applyForJob = async (request, response ) => {
    // console.log(request.body);
    conn.query(APPLY_FOR_JOB,[request.body.job_id,request.body.seeker_id], (err, data, fields) => {
        if(err) {
            // console.log(data);
            response.status(401).json({
                data: err
            })
        } else {
            // console.log(data);
            response.status("201").json({
                data: "success",
                message: "Insert data"
            })
        }
    })
}
exports.JobAdPost = async (request, response ) => {

    console.log(request.body);

    conn.query(JOB_AD_POST, [request.body.title, request.body.category, request.body.apply_type, request.body.city, request.body.rmc, request.body.amc, request.body.pay, request.body.job_date, request.body.description, request.body.status, request.body.seeker_id], function(err, data, fields) {
        if(err) {
            console.log(err);
            response.status(401).json('Sorry!! Unable to add')
        } else {
            console.log(data);
            response.status(201).json('Added successfully')
        }
    })
}