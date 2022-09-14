const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/three_project_one', { logging: false });

module.exports = db;

//do not touch!!!