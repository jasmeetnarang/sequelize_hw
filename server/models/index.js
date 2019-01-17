const db = require('./db');
const Campus = require('./campuses');
const Student = require('./students');

module.exports = {
    db,Campus,Student
}

Campus.hasMany(Student);

Student.belongsTo(Campus);

