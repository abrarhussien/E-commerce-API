//express methods
const express = require("express");
const exp = express();

//env
require("dotenv").config();

//Converting from json to Object
exp.use(express.json());

//Database
require("./db/dbConnection");



//routes all methods from routing file
const reviewRoutes= require("./routes/review.route");
const userProfileRoutes= require("./routes/userProfile.route");

exp.use("/api/profile",userProfileRoutes );
exp.use("/api/product", reviewRoutes);

//Server port connection
exp.listen(process.env.Port, () => {
  console.log(`server connection with port number: ${process.env.Port}`);
});
