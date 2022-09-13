const conn = require("../services/db");
const {GET_BOOKING_WORKERS} = require("../querys/jobProvider");


exports.getBookingWorkers = async (request, response ) => {
    console.log(request);

    // conn.query(GET_BOOKING_WORKERS, (err, data, fields) => {
    //
    //     if(err) {
    //         response.status(401).json({
    //             data: err
    //         })
    //     } else {
    //
    //         response.status(200).send(
    //             data
    //         );
    //     }

    // })
}