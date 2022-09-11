const conn = require("../services/db");
const {GET_WORKERS} = require("../querys/workers");
const {GET_WORKERS_RATE} = require("../querys/workers");


exports.getWorkers = async (request, response ) => {
    let userdata = [];

    function insw(object){
        userdata = [...userdata,object];
        console.log(userdata);
    };

    conn.query(GET_WORKERS, (err, data, fields) => {

        let rating;
        let rating_count;
        let complet_count;
        if(err) {
            // console.log(err);
            response.status(401).json({
                data: err
            })
        } else {

            data.map(value => {
                conn.query(GET_WORKERS_RATE,[value.user_id,'1',value.user_id,value.user_id], (err, data_worker, fields) => {
                    if(err) {
                        response.status(401).json({
                            data_worker: err
                        })
                    } else {
                        // console.log(data_worker)
                        let string=JSON.stringify(data_worker);
                        let json =  JSON.parse(string);
                        rating = json[0].rating;
                        rating_count = json[0].rating_count;
                        complet_count = json[0].complet_count;
                        var worker = {"user_id":value.user_id ,"first_name":value.first_name,"last_name":value.last_name,"description":value.description,"categories":value.category, "rating":rating,"rating_count":rating_count,"complet_count":complet_count};
                        insw(worker);
                        // userdata = [...userdata,worker];
                        // console.log(userdata);
                        // return userdata;

                    }
                })

            })
            // console.log(userdata);
            response.status(200).json({
                data: userdata
            });
        }

    })
}