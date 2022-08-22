const { INSERT_STUDENT } = require("../querys/student");
const conn = require("../services/db");
const AppError = require("../utils/appError");

exports.getAllStudent =(req, res, next) => {
    console.log('getAllStudent');
    conn.query("SELECT * FROM test", (err, data, fields) => {
        if(err) {
            console.log(err);
            res.status("401").json({
                data: err
        })
        } else {
            console.log(data);
            res.status("200").json({
                test: data
        })
    }
    })
    
};



exports.regStudent =(req, res, next) => {

    //f(!req.body) return next(new AppError("No form Data Found", 401));
    
    const values = [req.body.name];
    conn.query(INSERT_STUDENT,[values] ,(err, data, fields) => {
        //if(err) return next( new AppError(err, 500));
            
        res.status("201").json({
                data: "succes",
                message: "Insert data"
        })
        
    })
    
};