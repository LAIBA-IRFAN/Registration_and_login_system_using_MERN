const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://laibair123:database(123)@cluster0.iooxnrj.mongodb.net/?retryWrites=true&w=majority"
,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
)

.then(()=>{
    console.log("Mongo DB connected successfully")
})

.catch((err)=>{
    console.log(`Connection failed due to ${err}`)
})