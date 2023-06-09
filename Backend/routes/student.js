const express = require("express");
const app = express()
const cookieParser = require('cookie-parser')
const router = new express.Router();
const Student = require('../models/student')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const auth = require('../middleware/auth')
 
app.use(express.json())
app.use(cookieParser())

router.post("/students" , async(req,res)=>{
    const password = req.body.password;
    const confirmPassword = req.body.confirmPassword;

    try{
        if(password === confirmPassword){
            const addStudent = new Student(req.body)

            const success = await addStudent.save()
            res.status(201).send(success)

        }
        else{
            console.log("Password is not matching")
            res.send("Password is not matching")
        }
    }
    catch(err){
        res.status(500).send(err)

    }
})

router.post("/login" , async(req,res)=>{
    const emailAddress = req.body.emailAddress;
    const password = req.body.password ; 

    try{
        const StudentData = await Student.findOne({emailAddress:emailAddress})
        console.log(StudentData)

        if(StudentData){
            const result = await bcrypt.compare(password , StudentData.password)
            console.log(result)

            if(result){
                const token = await StudentData.generateToken();    

                // res.send(`Login successful`)
                res.json({token})
            }

            else{
                res.send(`Invalid email or password`)
            }
        }
    }
    catch(err){
        res.send(err)
    }
})


router.get("/newpage", auth , async(req,res)=>{
    try{
        console.log(`Hello World`)

    } 
    catch(err){
        console.log(err)
    }  

}

)



module.exports = router; 
