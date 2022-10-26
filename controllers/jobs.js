const conn = require("../services/db");
const {GET_JOBS,GET_LATESTJOBS, APPLY_FOR_JOB, APPLIED_JOBS,REQUEST_JOBS} = require("../querys/jobs");
const {request} = require("express");

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

exports.applyJobs = async (request, response) => {
    conn.query(APPLIED_JOBS, (err, data, fields) => {
        if(err){
            response.status(401).json({
                data: err
            })
        } else {
            response.status(200).send(
                data
            )
        }
    })
}

exports.requestJobs = async (request, response) => {
    conn.query(REQUEST_JOBS, (err, data, fields) => {
        if(err){
            response.status(401).json({
                data: err
            })
        } else {
            response.status(200).send(
                data
            )
        }
    })
}