/* To connect node js project with mongodb*/
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/Edureka", { useNewUrlParser: true }, (error)=>{
    if(!error)
    {
        console.log("Success Connecting to MongoDB");
    }
    else
    {
        console.log("Error connecting database");
    }
});
const course = require("./course.model");