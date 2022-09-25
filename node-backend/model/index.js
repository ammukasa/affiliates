const dbConfig = require("../database/db");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.affilates = require("./affiliates/affiliates.model")(sequelize, Sequelize);
db.hostarmadas = require("./hostarmada/hostarmada.model")(sequelize, Sequelize);
db.a2hostings = require("./a2hosting/a2hosting.model")(sequelize, Sequelize);
db.bluehosts = require("./bluehost/bluehost.model")(sequelize, Sequelize);
db.cloudways = require("./cloudways/cloudways.model")(sequelize, Sequelize);
db.fastcomets = require("./fastcomet/fastcomet.model")(sequelize, Sequelize);
db.godaddys = require("./godaddy/godaddy.model")(sequelize, Sequelize);
db.hostgators = require("./hostgator/hostgator.model")(sequelize, Sequelize);
db.hostingers = require("./hostinger/hostinger.model")(sequelize, Sequelize);
db.interservers = require("./interserver/interserver.model")(sequelize, Sequelize);
db.dreamhosts = require("./dreamhost/dreamhost.model")(sequelize, Sequelize);

module.exports = db;  
  