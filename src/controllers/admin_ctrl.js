let model=require('../models/regmodel.js');
exports.homepage = (req, res) => {
  console.log("Session username:", req.session.username);
  console.log("Session staff_name:", req.session.staff_name);

  if (!req.session.username && !req.session.staff_name) {
    // No logged-in user info
    res.render("home");
  } else if (req.session.username === "admin") {
    // Admin logged in
    console.log("admin");
    res.render("admindashboard");
  } else if (req.session.staff_name) {
    // Staff logged in
    console.log("staff");
    res.render("staffdashboard");
  } else {
    // Fallback: no valid session found
    res.render("home");
  }
};
exports.home=(req,res)=>
{
    res.render('home');
}
exports.login=(req, res) => {
    res.render('login');
}
exports.register=(req, res) => {
    res.render('register',{msg:""});
}
exports.registerUser=(req, res) => {
    res.send('User Register succesfully');
}
exports.admindashboard=(req, res) => {
    
}
    
exports.saveuser = (req, res) => {
    let username = req.body.username;
    let password = req.body.password;
    
    let r = model.saveuser(username, password);

    r.then((result) => {
        if (result.role === "admin") {
            req.session.username = result.role;
            res.render("admindashboard", { msg: "Welcome " + req.session.username });
        }
        else if (result.role === "staff") {
            req.session.staff_name = result.data[0].staff_name; // use 'req.session', not 'res.session'
            res.render("staffdashboard", { msg: "Welcome " + req.session.staff_name });
        }
        else {
            res.send(result);
        }
    }).catch((err) => {
        console.error(err);
        res.status(500).send("Internal Server Error");
    });
};
