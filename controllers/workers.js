const conn = require("../services/db");
const {GET_WORKERS} = require("../querys/workers");

exports.getWorkers = async (request, response ) => {
    // console.log("data");

    conn.query(GET_WORKERS, (err, data, fields) => {
        if(err) {
            // console.log(err);
            response.status(401).json({
                data: err
            })
        }
        else {
            // console.log(workers);
            response.status(200).send({
                data}
            )


        }
    })
}