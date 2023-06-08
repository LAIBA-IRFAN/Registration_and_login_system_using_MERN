const jwt = require('jsonwebtoken');
const Student = require('../models/student')

const auth = async(req,res,next)=>{
    try{
        const token = await req.headers.authorization;
        console.log(`The token is  ${token}`)
        const verify = jwt.verify(token, process.env.SECRET_KEY)
        const user = await Student.findOne({_id:verify._id})

        res.json(user)
        next();
    }

    catch(err){
        console.log(err) 
    }   
}

module.exports = auth; 