const express = require('express');
const Country = require('../models/Country');

const router = express.Router();
/* Don't use this before you change the name of the file */
// Route to get all countries
router.get('/', (req, res, next) => {
    Country.find()
        .then(countries => {
            res.json(countries);
        })
        .catch(err => next(err));
});

// Route to add a country
router.post('/', (req, res, next) => {
    let { name, capitals, area, description } = req.body;
    Country.create({ name, capitals, area, description })
        .then(country => {
            res.json({
                success: true,
                country
            });
        })
        .catch(err => next(err));
});

module.exports = router;
