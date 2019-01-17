const db = require("./db")
const Sequelize = require("sequelize");

const Student = db.define("student",{
    firstName:{
        type:Sequelize.STRING,
        allowNull: false
    },
    lastName:{
        type:Sequelize.STRING,
        allowNull: false
    },
    email: {
        type:Sequelize.STRING,
        allowNull: false,
        isUnique: true,
        validate: {
            isEmail: true
        }
    },
    imageUrl:{
        type:Sequelize.STRING,
        defaultValue:"http://www.colby.edu/visitors/wp-content/uploads/sites/8/2018/01/17-087_Campus-Map_MapOnly-011518.jpg"
    },
    gpa:{
        type:Sequelize.DECIMAL(4,2)
    }

});

module.exports = Student;