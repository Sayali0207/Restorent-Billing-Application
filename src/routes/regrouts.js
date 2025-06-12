
let router = require('express').Router();
let controller = require('../controllers/admin_ctrl.js');

router.get('/',controller.homepage);
router.get('/login', controller.login);
router.get('/register', controller.register);
router.post('/register', controller.registerUser);
router.post("/save",controller.saveuser)
router.post("/addadmin",controller.registerUser);
router.get('/admindashboard',controller.admindashboard);
router.get('/home',controller.home);
module.exports = router;