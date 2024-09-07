// Entry Point
// Require neccsary modules
const express = require("express");

require("dotenv").config();

const connectToDatabase = require("./config/database.config");
const createUser = require("./router/createUser.route");
const updateUser = require('./router/updateUser.route');
const errorHandler = require('./middleware/errorHandler.middleware');
const deleteUser = require('./router/deleteUser.route');
const getUser = require('./router/getUser.route');

const notFound = require('./router/notFound.route');

// Express app
const app = express();

const port = process.env.PORT; // Running Port


//Express Json Parser
app.use(express.json())


// Routing,
app.use("/createUser", createUser);//create
app.use("/updateUser" , updateUser); //Update
app.use("/deleteUser" , deleteUser); //Delete
app.use("/getUser" , getUser) ; //Get



// Error Handling
app.use(errorHandler)
app.use("*",notFound)

app.listen(port, async () => {
  await connectToDatabase(); // Connection to Database
  console.log(`Server running at localhost ${port}`);
});


// Catches Unhandled Promises
process.on("unhandledRejection", (reason, promise) => {
  console.error("Unhandled Rejection at:", promise, "reason:", reason);
});
