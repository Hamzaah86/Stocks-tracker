const express = require('express');
const { isLoggedIn } = require('../middlewares');
const router = express.Router();
const axios = require('axios');
const User = require('../models/User');

router.get('/secret', isLoggedIn, (req, res, next) => {
    res.json({
        secret: 42,
        user: req.user
    });
});

router.get('/news', (req, res, next) => {
    res.json({});
});

router.get('/add-stocks', (req, res, next) => {
    res.json({ hello: 'hello' });
});

//get Api Search

router.post('/search-stock', (req, res, next) => {
    console.log(req.body.body, 'req.body');
    let symbol = req.body.body;
    axios
        .get(
            `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=5min&apikey=JU4AP53UTI3GGBYZ/`
        )
        .then(response => {
            console.log(response, 'response');
            const { data } = response;
            res.json(data);
        })
        .catch(err => {
            console.error(err);
        });
});

router.post('/search-name', (req, res, next) => {
    const { body } = req.body;
    console.log(body, 'REQ');
    axios
        .get(
            `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&apikey=${
                process.env.APIKEY
            }&keywords=${body}`
        )
        .then(response => {
            const { data } = response;
            console.log(data);
            res.json(data);
        })
        .catch(err => {
            console.error(err);
        });
});

router.post('/add-stock', (req, res, next) => {
    const { name } = req.body;
    console.log(req.body, 'here');
    const { _id } = req.user;
    console.log(_id, 'id');
    User.findByIdAndUpdate({ _id }, { $addToSet: { watchList: name } }).then(response => {
        console.log(response, 'from mongo');
    });
});

module.exports = router;
