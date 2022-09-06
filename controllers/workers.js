const conn = require("../services/db");
const {GET_WORKERS} = require("../querys/workers");

exports.getWorkers = async (request, response ) => {
    // console.log(request.body);
    // alert('in back end');
    conn.query(GET_WORKERS, (err, data, fields) => {
        if(err) {
            // console.log(err);
            response.status(401).json({
                data: err
            })
        } else {
            // console.log('back end data');
            // alert('in back end');
            console.log(data);
            response.status(200).json({
                workers: data

            })
            // alert('after the get data');
            console.log(workers);
        }
    })
}