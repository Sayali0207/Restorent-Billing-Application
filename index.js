<<<<<<< HEAD
=======
let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let db = require('./src/config/db');
>>>>>>> c377cd444140bb4fb5eddfe627a54a35eb64e126

let app=require("./src/app.js");

app.get('/', (req, res) => {
    res.send("Welcome in Our Restaurant");
});

app.listen(2000, () => {
    console.log("Server running on port 2000");
});