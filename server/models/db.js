const Sequelize = require("sequelize");
const db = new Sequelize("postgres://postgres:abc@localhost/uni");
// const Dog = require("./dogs");

module.exports = db