const express = require('express');
const router_student = require('./routes/student');
const errorHandler = require('./utils/errorHandler');
const app = express();
app.use(express.json( ));
const PORT = 8000;

app.use(errorHandler);


// not need

app.all('/', (req, res) => {
    console.log(req.body);

    // res.send({
    //     data: "hii"
    // }) //send data

    res.status(200).json({
        data: "hi with status"
    })//send with status
})

////////////////////////////////

app.use("/student",router_student);

// app.all("*", (req, res, next) => {
//     next(new AppError(`url ${req.originalUrl} not found`, 404));
// })

app.listen (PORT,() => {
    console.log('server running on port ' + PORT);
});