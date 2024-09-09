// Entry Point
// Require neccsary modules
const express = require("express");

require("dotenv").config();

const connectToDatabase = require("./config/database.config");
const accountRoute = require('./router/account.route');
const errorHandler = require('./middleware/errorHandler.middleware');

// const notFound = require('./router/notFound.route');

// Express app
const app = express();

const port = process.env.PORT; // Running Port


//Express Json Parser
app.use(express.json())


// Routing
app.use("/" , accountRoute)



// Error Handling
app.use(errorHandler)
app.use("*", accountRoute)

app.listen(port, async () => {
  await connectToDatabase(); // Connection to Database
  console.log(`Server running at localhost ${port}`);
});


// Catches Unhandled Promises
process.on("unhandledRejection", (reason, promise) => {
  console.error("Unhandled Rejection at:", promise, "reason:", reason);
});
