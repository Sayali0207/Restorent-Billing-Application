let mysql=require("mysql");
let conn=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database:"Project"
});
conn.connect(function(err){
    if(err){
        console.log("Error connecting to the database: " + err);
        return;
    }
    console.log("Connected to the database");
});
module.exports=conn;