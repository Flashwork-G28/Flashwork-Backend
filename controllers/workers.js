const conn = require("../services/db");
const {GET_WORKERS} = require("../querys/workers");
const {GET_WORKERS_RATE} = require("../querys/workers");


exports.getWorkers = async (request, response ) => {
    let userdata = [];
    conn.query(GET_WORKERS, (err, data, fields) => {
        if(err) {
            // console.log(err);
            response.status(401).json({
                data: err
            })
        } else {
            // console.log(data);
            data.map(value => {
                // console.log(value.user_id)
                conn.query(GET_WORKERS_RATE,[value.user_id,'1',value.user_id,value.user_id], (err, data_worker, fields) => {
                    // console.log("tewst");
                    if(err) {
                        // console.log(err);
                        response.status(401).json({
                            data_worker: err
                        })
                    } else {
                        // let rate= data1.AVG(rate);
                        console.log(data_worker);
                        console.log("hi");

                    }
                })
            })

            response.status(200).send(
                data
            )
        }
    })
}