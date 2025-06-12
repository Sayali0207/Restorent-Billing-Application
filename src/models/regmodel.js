let con=require("../config/db.js");

exports.saveuser = function(username, password) {
    return new Promise((resolve, reject) => {
        con.query("SELECT * FROM admin WHERE username=? AND password=?", [username, password], (err, result) => {
            if (err) {
                reject(err);
            } else if (result.length > 0) {
                  resolve({ data: result, role: "admin" })
            } else {
                con.query("SELECT * FROM staff WHERE staf_name=? AND email=?", [username, password], (err2, result2) => {
                    if (err2) {
                        reject(err2);
                    } else if (result2.length > 0) {
                        resolve({ data: result2, role: "staff" });
                    } else {
                        resolve("Invalid Username");
                    }
                });
            }
        });
    });
};

exports.registerAdmin = function(oldname, username, password, name, email, contact) {
    return new Promise((resolve, reject) => {
        // Check if oldname exists in admin table
       
        con.query("SELECT * FROM admin WHERE username=?", [oldname], (err, result) => {
            if (err) {
                reject(err);
            } else if (result.length === 0) {
                resolve("Old username does not exist");
            } else {
                // If oldname exists, insert new admin
                con.query(
                    "INSERT INTO admin (username, password) VALUES (?, ?)",
                    [username, password, name, email, contact],
                    (err2, result2) => {
                        if (err2) {
                            console.log("hello");
                            reject(err2);
                        } else {
                            resolve("Admin registered successfully");
                        }
                    }
                );
            }
        });
    });
}