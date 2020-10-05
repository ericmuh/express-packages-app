import express from "express" 
import cors from "cors";
import ehbs from "express-handlebars";
import mongoose from "mongoose";
import homeController from "./controllers/homeController.js";
import adminRoutes from "./routes/admin.js"
const app = express();

//* express handlebars middleware
app.engine("hbs", ehbs({ extname: "hbs", defaultLayout: "main" }));
app.set("view engine", "hbs");

//* body parser middleware
app.use(express.urlencoded({ extended: false }));

const url = "mongodb://127.0.0.1:27017/myapp"
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true  }).then(()=>{
    console.log("connected to database");
    app.listen(8000,homeController.listen);
}).catch((err)=>{
console.log(error);
})

app.get("/", homeController.gethome);
app.get("/test",(req, res)=>{
    res.render("packages/package")
})

app.use("/admin",adminRoutes)
// serves static files
app.use(express.static("public"));