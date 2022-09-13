const express = require('express');
const router_auth0 = require('./routes/auth0');
const router_jobs = require('./routes/jobs');
// const errorHandler = require('./utils/errorHandler');
const router_JobSeeker= require("./routes/JobSeeker");
const app = express();
app.use(express.json( ));
const PORT = 8000;
let cors = require('cors');

app.use(cors())
// app.use(errorHandler);



app.use("/register",router_auth0);
app.use("/jobs",router_jobs);
app.use("/jobseeker",router_JobSeeker)




// app.all("*", (req, res, next) => {
//     next(new AppError(`url ${req.originalUrl} not found`, 404));
// })

app.listen (PORT,() => {
    console.log('server running on port ' + PORT);
});