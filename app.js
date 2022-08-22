const express = require('express');
const router_auth0 = require('./routes/auth0');
// const errorHandler = require('./utils/errorHandler');

const app = express();
app.use(express.json( ));
const PORT = 8000;
let cors = require('cors');

app.use(cors())

// app.use(errorHandler);



app.use("/register",router_auth0);

// not need

// app.all('/', (req, res) => {
//     console.log(req.body);
//     // res.send({
//     //     data: "hii"
//     // }) //send data
//     res.status(200).json({
//         data: "hi with status"
//     })//send with status
// })

////////////////////////////////

// app.use("/student",router_student);

// app.all("*", (req, res, next) => {
//     next(new AppError(`url ${req.originalUrl} not found`, 404));
// })

app.listen (PORT,() => {
    console.log('server running on port ' + PORT);
});