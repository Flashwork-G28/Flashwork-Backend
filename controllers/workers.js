const conn = require("../services/db");
const {GET_WORKERS,POST_WORKERS_BOOK} = require("../querys/workers");


exports.getWorkers = async (request, response ) => {

    conn.query(GET_WORKERS, (err, data, fields) => {

        if(err) {
            response.status(401).json({
                data: err
            })
        } else {

            response.status(200).send(
                data
            );
        }

    })
}

exports.postWorkersBook = async (request, response ) => {
    conn.query(POST_WORKERS_BOOK,[request.body.job_seeker_id,
        request.body.job_provider_id,
        request.body.req_date,
        request.body.city,
        request.body.payment_type,
        request.body.pay,
        request.body.description,
        request.body.job_seeker_id], (err, data, fields) => {

        if(err) {
            console.log(err);
            response.status(401).json({
                data: err
            })
        } else {
            response.status("201").json({
                data: "success",
                message: "Insert data"
            })
        }

    })

}

exports.getMAWorkers = async (request, response ) => {

    conn.query(GET_MAWORKERS, (err, data, fields) => {

        if(err) {
            response.status(401).json({
                data: err
            })
        } else {

            response.status(200).send(
                data
            );
        }

    })
}