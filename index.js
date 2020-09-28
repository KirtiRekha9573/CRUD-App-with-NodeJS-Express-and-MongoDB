const connection = require("./model");
const express = require("express");
const application = express();
const path = require("path");
const expressHandlerbars = require("express-handlebars");
const bodyparser = require("body-parser");
const CourseController = require("./controllers/courses");

/*Creating express application*/
/*Some configurations on express application*/
application.use(bodyparser.urlencoded({
    extended: true
}));

/*Setting up the views for application*/
application.set('views', path.join(__dirname, "/views"))

application.engine("hbs", expressHandlerbars({
    extname: "hbs", 
    defaultLayout:"mainlayout",
    //layoutsDir: __dirname + "views/layouts"
})
);
/*To tell node and express, that we have view engine that has handle bars*/
application.set("view engine", "hbs")

/*Set up our application to route or handle our url*/
application.get("/", (req, res)=>{
   // res.send('<h1>Hello World</h1>')
   res.render("index", {})
})
//To set up a router//
application.use("/course", CourseController)

application.listen("3000", ()=>{
    console.log("Server started");
});

