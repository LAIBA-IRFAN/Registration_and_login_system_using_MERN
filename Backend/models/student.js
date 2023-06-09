const mongoose = require("mongoose")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const studentSchema = new mongoose.Schema(
    {
        firstName:{
            type:String,
            required:true
        },
        lastName:{
            type:String,
            required:true
        },
        emailAddress:{
            type:String,
            required:true
        },
        phoneNumber:{
            type:Number,
            required:true
        },
        password:{
            type:String,
            required:true
        },
        confirmPassword:{
            type:String,
            required:true
        },
        tokens:[{
            token:{
                type:String,
                required:true
            }
        }]

    }
)

studentSchema.methods.generateToken = async function(){
    try{
        const token = jwt.sign({_id:this._id},process.env.SECRET_KEY )
        console.log(token)
        this.tokens = this.tokens.concat({token:token})
        await this.save();
        return token;
    }       
    catch(err){     
        console.log(err)
    }
    
}


studentSchema.pre('save', async function(next){
    if(this.isModified('password')){
        this.password = await bcrypt.hash(this.password , 12);
        this.confirmPassword = this.password
    }
    next();           
})

const Student = new mongoose.model("Student", studentSchema)


module.exports = Student;