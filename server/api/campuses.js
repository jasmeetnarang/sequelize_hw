const router = require('express').Router()
const { Campus } = require('../models');

module.exports = router;

router.get('/', async (req,res) => {
    const campuses = await Campus.findAll();
    console.log(campuses);
    res.send(campuses);
})
