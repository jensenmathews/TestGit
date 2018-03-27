const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(module.filename);
const env = process.env.NODE_ENV || 'development';
const config = require('../config/config.json')[env];
const db = {};

//new Sequelize Connection;
const sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: config.dialect,
  define: {
    timestamps: false,
  },
  
  // SQLite only
  storage: '../Elios.db'//From Root directory
});

if (sequelize) {
  sequelize.authenticate().then(function (err) {
    if (err) {
      console.log("There is a connection ERROR");
    } else {
      console.log("Connection established successfully");
    }
  });
}

fs
  .readdirSync(__dirname)
  .filter(file => 
      (file.indexOf('.') !== 0) && 
      (file !== basename) && 
      (file.slice(-3) === '.js'))
  .forEach(file => {
    const model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

// Import Models such that I can use them in the api just by importing 'db'
db.Content = require('./Content')(sequelize, Sequelize);

module.exports = db;