const conn = require("../services/db");
const {POST_CHAT} = require("../querys/chat");

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