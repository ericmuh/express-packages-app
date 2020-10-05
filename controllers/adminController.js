import User from "../models/user.js";

const adminController = {
  createuser: (req, res) => {
    const formdata = {
      name: req.body.name,
      email: req.body.email,
      location: req.body.location,
      password: req.body.password, //password not safe: has to be encrypted.. bcrypt
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
  },
  getusers: async (req, res) => {
    const users = await User.find().lean();
    res.render("admin/createuser", { users: users });
  },
};

export default adminController;
