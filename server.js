const express = require("express");
 cors = require("cors");

const app = express();

// var corsOptions = {
//   origin: "http://localhost:8081"
// };

app.use(cors());

// parse requests of content-type - application/json
app.use(express.json());


// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
const db = require("./node-backend/model/index");

db.sequelize.sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

// // drop the table if it already exists
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to BROSE'S application." });
});

require("./node-backend/routes/affiliates/affiliates.routes")(app);
require("./node-backend/routes/hostarmada/hostarmada.routes")(app);
require("./node-backend/routes/a2hosting/a2hosting.routes")(app);
require("./node-backend/routes/bluehost/bluehost.routes")(app);
require("./node-backend/routes/cloudways/cloudways.routes")(app);
require("./node-backend/routes/interserver/interserver.routes")(app);
require("./node-backend/routes/fastcomet/fastcomet.routes")(app);
require("./node-backend/routes/godaddy/godaddy.routes")(app);
require("./node-backend/routes/hostgator/hostgator.routes")(app);
require("./node-backend/routes/hostinger/hostinger.routes")(app);
require("./node-backend/routes/dreamhost/dreamhost.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
