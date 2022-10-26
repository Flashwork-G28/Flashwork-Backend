const conn = require("../services/db");
const {POST_CHAT, GET_CHAT} = require("../querys/chat");

exports.postChat = async (request, response ) => {
    console.log(request.body);
    conn.query(POST_CHAT, [request.body.sender_id, request.body.receiver_id, request.body.message], function(err, data, fields) {
        if(err) {
            console.log(err);
            response.status(401).json('Sorry!! Unable to add')
        } else {
            console.log(data);
            response.status(201).json('Added successfully')
        }
    })
}

exports.getChat = async (request, response ) => {
    console.log(request.query);
    console.log(request.params);
    conn.query(GET_CHAT, [request.params.user_id], function(err, data, fields) {
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