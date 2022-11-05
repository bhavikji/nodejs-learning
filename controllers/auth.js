const User = require("../models/user");

exports.getLogin = (req, res, next) => {
  const isLoggedIn =
    req.get("Cookie").split(";")[1].trim().split("=")[1] === "true";
  res.render("auth/login", {
    path: "/login",
    pageTitle: "Login",
    isAuthenticated: isLoggedIn,
  });
};

exports.postLogin = (req, res, next) => {
  User.findById("63654329a44f58602f567314").then((user) => {
    req.session.isLoggedIn = true;
    req.session.user = user;
    req.session.save(err=> {
      console.log(err);
      res.redirect("/");
    }); 
  }).catch(err => {console.log(err)});
};

exports.postLogout = (req, res, next) => {
  req.session.destroy(() => {
    res.redirect("/");
  });
};
