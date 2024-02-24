const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    complient: {
        type: String,
        require: true
    },
},{timestamps: true})

module.exports = mongoose.model("user",userSchema);