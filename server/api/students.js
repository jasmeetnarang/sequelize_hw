const router = require('express').Router()
const { Student } = require('../models');

module.exports = router;

router.get('/', async (req,res) => {
    const students = await Student.findAll();
    console.log(students)
    res.send(students);
} )
