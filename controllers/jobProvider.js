const conn = require("../services/db");
const {GET_BOOKING_WORKERS,GET_SAVED_WORKERS,GET_NOTIFICATION,GET_NOTIFICATION_COUNT,GET_JOB_ONGOIN} = require("../querys/jobProvider");

exports.getBookingWorkers = async (request, response ) => {
    // console.log(request.body);

    conn.query(GET_BOOKING_WORKERS,[request.body.job_provider_id], (err, data, fields) => {

        if(err) {
            response.status(401).json({
                data: err
            })
        } else {
            // console.log(data);
            response.status(200).send(
                data
            );
        }

    })
}

exports.getSavedWorkers = async (request, response ) => {
    conn.query(GET_SAVED_WORKERS,[request.body.job_provider_id], (err, data, fields) => {
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

exports.getNotification = async (request, response ) => {

    conn.query(GET_NOTIFICATION,[request.body.job_provider_id], (err, data, fields) => {

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

exports.getNotificationCount = async (request, response ) => {

    conn.query(GET_NOTIFICATION_COUNT,[request.body.job_provider_id], (err, data, fields) => {


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

exports.getOngoinAdvertiesment = async (request, response ) => {

    conn.query(GET_JOB_ONGOIN,[request.body.job_provider_id], (err, data, fields) => {


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













