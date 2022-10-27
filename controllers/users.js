const conn = require("../services/db");
const {GET_USERS, UPDATE_USERS} = require("../querys/users");

exports.getUsers = async (request, response ) => {
    // console.log(request.body);
    conn.query(GET_USERS, (err, data, fields) => {
        if(err) {
            // console.log(err);
            response.status(401).json({
                data: err
            })
        } else {
            // console.log(data);
            response.status(200).send(
                data
            )
        }
    })
}

exports.updateUsers = async (request, response ) => {
    // console.log(request.body);
    conn.query(UPDATE_USERS, [request.body.status, request.body.user_id], (err, data, fields) => {
        if(err) {
            console.log(err);
            response.status(401).json({
                data: err
            })
        } else {
            console.log(data);
            response.status(200).send(
                data
            )
        }
    })
}