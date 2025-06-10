let express=require('express');
let app=express();
let bodyParser=require('body-parser');
let db=require('./db');

app.use(bodyParser.json());


app.get('/',(req,res)=>{
     res.write("Welcomw in Our Restorent");
    res.end();
})
   
app.listen(2000,(req,res)=>{
    console.log("Server running on port 2000");
})
