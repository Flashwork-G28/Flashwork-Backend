const conn = require("../services/db");
const {GET_BOOKING_WORKERS} = require("../querys/jobProvider");

exports.getBookingWorkers = async (request, response ) => {
    console.log(request.body);

    conn.query(GET_BOOKING_WORKERS,[request.body.job_provider_id], (err, data, fields) => {

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