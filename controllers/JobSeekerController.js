const conn = require("../services/db");
const {GET_Profile_Edit} = require("../querys/JobSeeker");


exports.createJobSeeker = async (request, response ) => {


    conn.query(GET_Profile_Edit, (err, data, fields) => {
        if(err) {
            // console.log(err);
            response.status(401).json({
                data: err
            })
        }
        else {

            response.status(200).send(
                data
            )
        console.log(data);



        }
    })
}