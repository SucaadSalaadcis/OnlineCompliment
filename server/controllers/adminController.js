const adminModel = require("../models/adminModel");

// register admin 
const registerAdmin = async (req, res)=> {
    const newAdmin = await adminModel(req.body);
    const saveAdmin = newAdmin.save();
    if(saveAdmin){
        res.send(newAdmin);
    }
}


// find existing user in database 
const loginAdmin = async (req, res) => {
    const adminData = await adminModel.findOne({
        username: req.body.username,
        password: req.body.password
    })
    if(adminData){
        res.send(adminData)
    }else {
        res.send({error: "User not found"})
    }
}

module.exports = {registerAdmin, loginAdmin};