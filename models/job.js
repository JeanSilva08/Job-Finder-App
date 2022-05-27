const Sequelize = require("sequelize");
const sequelize = require("../db/connection");
const db = require("../db/connection");

const job = db.define("job", {
  title: {
    type: Sequelize.STRING,
  },
  discription: {
    type: Sequelize.STRING,
  },
  salary: {
    type: Sequelize.STRING,
  },
  company: {
    type: Sequelize.STRING,
  },
  email: {
    type: Sequelize.STRING,
  },
  new_job: {
    type: Sequelize.INTEGER,
  },
});

module.exports = Job
