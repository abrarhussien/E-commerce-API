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
const productsRoutes = require("./routes/product.route");
const reviewRoutes= require("./routes/review.route");
const userProfileRoutes = require("./routes/userProfile.route");
const categoryRoutes = require("./routes/category.route");


exp.use("/api/products", productsRoutes);
exp.use("/api/categories", categoryRoutes);
exp.use("/api/profile",userProfileRoutes );
exp.use("/api/product", reviewRoutes);

//Server port connection
exp.listen(process.env.Port, () => {
  console.log(`server connection with port number: ${process.env.Port}`);
});
