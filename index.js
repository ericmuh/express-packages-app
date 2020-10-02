const express = require("express");
const cors = require("cors");
const ehs = require("express-handlebars");
const mongoose = require("mongoose");
const homeController = require("./controllers/homeController");
const app = express();

const url = "mongodb://127.0.0.1:27017/myapp"

mongoose.connect(url).then(()=>{
    console.log("connected to database");
    app.listen(8000,homeController.listen);
}).catch((err)=>{
console.log(error);
})

app.get("/", homeController.gethome);



