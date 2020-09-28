/*This file setsup the route, all the information about the route. Also, connects with MongoDB to get the data and return template*/
const express = require("express");
const mongoose = require("mongoose");

/*We need to configure all the routes. What routes will be handled by the controller*/
//Set up our router//
const router = express.Router();

//To create a model//
const CourseModel = mongoose.model("Course")

//From the course, we can write methods to get data from mongodb//
router.get("/add", (req, res)=>{
    res.render("add-course")
})

router.post("/add", (req, res)=>{
    console.log(req.body);
    var course = new CourseModel();
    course.courseName = req.body.courseName;
    course.courseDuration = req.body.courseDuration;
    course.courseFees = req.body.courseFees;
    course.courseId = Math.ceil(Math.random()* 100000000) + "";
    course.save((err, doc)=>{
        if(!err)
        {
            res.redirect("/course/list")
        }
        else
        {
            res.send("Error Occurred");
        }
    })
    
})

//Defining the router//
router.get("/list", (req, res)=>{
    //Gettings//
    CourseModel.find((err, docs)=>{
        if(!err)
        {
            console.log(docs);
            res.render("list", {data : docs})
        }
        else{
            res.send("Error Occurred")
        }
    })
    res.send("Course Controller")
});

//Exporting the router//
module.exports = router;