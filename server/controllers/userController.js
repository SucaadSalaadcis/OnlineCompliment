const userModel = require("../models/userModel");

// post
const createUser = async (req, res) => {
    const newData = await userModel(req.body);
    const saveData = newData.save();
    if(saveData) {
        res.send("Created...")
    }
}




module.exports = createUser;