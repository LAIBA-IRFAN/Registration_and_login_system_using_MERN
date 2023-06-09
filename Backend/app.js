require('dotenv').config({path:'../.env'});
const express = require('express')
const app = express();
const cors = require('cors')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
require('./connection')
const studentRoute = require('./routes/student')
const port = process.env.port || 3000 ; 
app.use(express.json());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "*");
    res.header("Access-Control-Allow-Headers", 
               "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
  })

app.use(studentRoute)
app.use(cors())
app.use(cookieParser())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:false }));

console.log(process.env.SECRET_KEY)

app.listen(port , ()=>{
    console.log(`Database connected at port number ${port}`)
})
