const conn = require("../services/db");
const {GET_JOBS} = require("../querys/jobs");

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
            response.status(200).json({
                jobs: data
            })
        }
    })
}