import express from "express";
import cors from "cors";
import ehbs from "express-handlebars";
import mongoose from "mongoose";
import dotenv from "dotenv";
import homeController from "./controllers/homeController.js";
import adminRoutes from "./routes/admin.js";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/user.js";
const app = express();
dotenv.config()
const PORT = process.env.PORT || 8002;
//* express handlebars middleware
app.engine("hbs", ehbs({ extname: "hbs", defaultLayout: "main" }));
app.set("view engine", "hbs");

//* body parser middleware
app.use(express.urlencoded({ extended: false }));

const url = "mongodb://127.0.0.1:27017/myapp";
mongoose
  .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("connected to database");
    app.listen(PORT, homeController.listen(PORT));
  })
  .catch((err) => {
    console.log(error);
  });

app.get("/", homeController.gethome);
app.get("/test", (req, res) => {
  res.render("packages/package");
});

app.use("/admin", adminRoutes);
app.use("/auth", authRoutes);
app.use("/user", userRoutes);

// serves static files
app.use(express.static("public"));
