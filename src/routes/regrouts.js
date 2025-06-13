
let router = require('express').Router();
let controller = require('../controllers/admin_ctrl.js');
let con=require("../config/db.js");

router.get('/',controller.homepage);
router.get('/login', controller.login);
router.get('/register', controller.register);
router.post('/register', controller.registerUser);
router.post("/save",controller.saveuser)
router.post("/addadmin",controller.registerUser);
router.get('/admindashboard',controller.admindashboard);
router.get('/home',controller.home);
router.get('/addcategory',controller.addcategory);
router.post("/addcat",controller.addcat)
router.get('/viewcategory',controller.viewcategory);
router.get("/deletecat",controller.deletecat);
router.get('/search',(req,res)=>{
    let cat_name=req.query.sd;
    con.query("select * from category where cat_name like'%"+cat_name+"%'",(err,result)=>{
        res.json(result);
    });
})
module.exports = router;