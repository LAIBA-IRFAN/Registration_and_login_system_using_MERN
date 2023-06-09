const jwt = require('jsonwebtoken');
const Student = require('../models/student')

const auth = async(req,res,next)=>{
    try{
        const token = await req.headers.authorization;
        if(!token){
            res.status(404).send('The token doesnot exist')
        }
        res.json(token)
        const verify = jwt.verify(token, process.env.SECRET_KEY)
        const user = await Student.findOne({_id:verify._id})
        next();
    }

    catch(err){
        console.log(err) 
    }   
}

module.exports = auth; 