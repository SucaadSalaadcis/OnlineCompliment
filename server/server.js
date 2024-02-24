const express = require("express");
const mongoose = require("mongoose");
const app = express();

const cors = require("cors");
app.use(express.json());

app.use(cors());


// db connecting
mongoose.connect("mongodb://0.0.0.0:27017/Complient").then(()=>{
    console.log("Database Connected..")
}).catch((error)=> console.log(error));

const user = require("./routes/userRoutes");
const admin = require("./routes/adminRouter");
app.use(user);
app.use(admin);

const PORT = 3000;

app.listen(PORT, () => console.log(`Server Is Running On Port ${PORT}`));