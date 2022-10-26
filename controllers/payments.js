const conn = require("../services/db");
const {VIEW_PAY} = require("../querys/payments");

exports.ViewPay = async (request, response) => {
    console.log(request.body);
    conn.query(VIEW_PAY, function(err, data, fields) {
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