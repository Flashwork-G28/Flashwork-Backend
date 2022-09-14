const conn = require("../services/db");
const {GET_JOBS,GET_LATESTJOBS, APPLY_FOR_JOB} = require("../querys/jobs");

exports.getJobs = async (request, response ) => {
    console.log(request.body);


    const search = (data) => {
        // console.log(request.body.category.length > 0 || request.body.type.length > 0 || request.body.location.length > 0 || request.body.size.length > 0)
        if (request.body.category.length > 0 || request.body.type.length > 0 || request.body.location.length > 0 || request.body.size.length > 0) {
            return (data.filter((item)=>
                item.amc==request.body.size
                && item.city==request.body.city
                && item.category==request.body.category
                && item.apply_type==request.body.apply_type));
        }
        else {
            return data;
        }
    }


    conn.query(GET_JOBS, (err, data, fields) => {
        if(err) {
            // console.log(err);

            response.status(401).json({
                data: err
            })
        } else {
             // console.log(data);
            response.status(200).send(
                search(data)
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