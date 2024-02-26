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


//Server port connection
exp.listen(process.env.Port, () => {
  console.log(`server connection with port number: ${process.env.Port}`);
});
