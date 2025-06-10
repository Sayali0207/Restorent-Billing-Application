let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let db = require('./src/config/db');

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send("Welcome in Our Restaurant");
});

app.listen(2000, () => {
    console.log("Server running on port 2000");
});