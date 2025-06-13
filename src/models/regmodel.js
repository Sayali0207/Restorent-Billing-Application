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

exports.addcategory = function(category_name) {
    return new Promise((resolve, reject) => {
        con.query(
            "INSERT INTO category(cat_name) VALUES(?)",
            [category_name],
            (err, result) => {
                if (err) { 
                    console.log("Error in adding category:", err);
                    reject("Error in adding category" );
                } else {
                    console.log("Category added successfully");
                    resolve("Category added successfully" );
                }
            }
        );
    });
}
exports.viewcategory = function() {
    return new Promise((resolve, reject) => {
        con.query("SELECT * FROM category", (err, result) => {
            if (err) {
                console.log("Error in fetching categories:", err);
                reject("Error in fetching categories");
            } else {
                console.log("Categories fetched successfully");
                console.log(result);
                resolve(result);
            }
        });
    });
}
exports.deletecat = function(id) {
    return new Promise((resolve, reject) => {
        con.query("DELETE FROM category WHERE cat_id=?", [id], (err, result) => {
            if (err) {
                console.log("Error in deleting category:", err);
                  con.query("SELECT * FROM category", (err, result) => {
            if (err) {
                console.log("Error in fetching categories:", err);
                reject({msg:"Error in fetching categories",cate:result });
            } else {
                console.log("Categories fetched successfully");
                console.log(result);
                resolve({msg:"Error in deleting category", cate: result });
            }
            });
         }
             else {
                con.query("SELECT * FROM category", (err, result) => {
                 if (err) {
                console.log("Error in fetching categories:", err);
                reject({msg:"Error in fetching categories",cate:result });
                 } else {
                console.log("Categories fetched successfully");
                console.log("Category deleted successfully");
                console.log(result);
                resolve({msg:"Category deleted successfully", cat: result });
            }
        });
            }
        });
    });
}