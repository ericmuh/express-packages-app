import User from "../models/user.js";
// bcrpyt
import  bcrypt from "bcrypt"

const adminController = {
  createuser: (req, res) => {
    bcrypt.hash(req.body.password, 10, function(err, hashedpassword) {
      // Store hash in your password DB.
      const formdata = {
        name: req.body.name,
        email: req.body.email,
        location: req.body.location,
        password: hashedpassword, //password not safe: has to be encrypted.. bcrypt
      };
      console.log("before add", formdata);
  
      const user = new User(formdata);
      user
        .save()
        .then(() => {
          console.log("user added", formdata);
          res.redirect("/admin/users");
        })
        .catch((error) => console.log(error));
  });
    
  },
  getusers: async (req, res) => {
    const users = await User.find().lean();
    res.render("admin/createuser", { users: users });
  },
};

export default adminController;

// no validation of data.
//no accountting for errors.
// no authentication.

