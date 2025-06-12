let app = require('./src/app.js');





app.get('/', (req, res) => {
    res.send("Welcome in Our Restaurant");
});

app.listen(2000, () => {
    console.log("Server running on port 2000");
});