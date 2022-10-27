const conn = require("../services/db");
const {GET_Profile_Edit,GET_jobProviderProfile,UPDATE_PROFILE} = require("../querys/JobSeeker");


exports.createJobSeeker = async (request, response ) => {

    console.log("Hello");

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


exports.ProviderProfile = async (request, response ) => {

    console.log("asdggfg")
    conn.query(GET_jobProviderProfile, (err, data, fields) => {
        if(err) {
            console.log("thilina");
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
exports.updateSeeker = async (request, response ) => {
    console.log(request.body);
    conn.query(UPDATE_PROFILE,[[request.body.firstname],[request.body.lastname],[request.body.location],[request.body.mobile],[request.body.email]] ,(err, data, fields) => {
        if(err) {
            console.log("thilina");
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