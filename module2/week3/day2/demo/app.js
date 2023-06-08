// ℹ️ Gets access to environment variables/settings
// https://www.npmjs.com/package/dotenv
require("dotenv").config();

// ℹ️ Connects to the database
require("./db");

// Handles http requests (express is node js framework)
// https://www.npmjs.com/package/express
const express = require("express");

// Handles the handlebars
// https://www.npmjs.com/package/hbs
const hbs = require("hbs");

const app = express();

// ℹ️ This function is getting exported from the config folder. It runs most pieces of middleware
require("./config")(app);

// default value for title local
const capitalize = require("./utils/capitalize");
const projectName = "demo";

app.locals.appTitle = `${capitalize(projectName)} created with IronLauncher`;

// 👇 Start handling routes here
const indexRoutes = require("./routes/index.routes");
const userRoutes = require('./routes/user.routes')
app.use("/", indexRoutes);

app.use("/user", userRoutes);

// para llamar a userRoutes, las rutas deben comenzar con /user, ej:
// http://localhost:3000/user/create


// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require("./error-handling")(app);

// lo de arriba es equivalente a:
// const require = (app) => {
//     app.use((req, res, next) => {
//       // this middleware runs whenever requested page is not available
//       res.status(404).render("not-found");
//     });
  
//     app.use((err, req, res, next) => {
//       // whenever you call next(err), this middleware will handle the error
//       // always logs the error
//       console.error("ERROR", req.method, req.path, err);
  
//       // only render if the error ocurred before sending the response
//       if (!res.headersSent) {
//         res.status(500).render("error");
//       }
//     });
//   };
// require(app);


module.exports = app;
