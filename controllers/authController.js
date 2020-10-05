import User from "../models/user.js";
import bcrypt from "bcrypt";
const authContoller = {
  getlogin: async (req, res) => {
    res.render("auth/login");
  },
  loginuser: async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const user = await User.findOne({ email: email });
    console.log(user);
    if (user == null) {
      res.redirect("/auth/login");
    } else if (await bcrypt.compare(password, user.password)) {
      res.redirect("/user/packages",{msg:"you are logged in"});
    }else{
        res.redirect("/auth/login");
    }
  },
};
export default authContoller;
