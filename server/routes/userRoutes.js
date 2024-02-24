const express = require("express");
const userController = require("../controllers/userController");


const router = express.Router();

router.post("/createUser",userController);


module.exports = router;
