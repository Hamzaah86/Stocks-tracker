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

//get Api Search

router.post('/search-stock', (req, res, next) => {
    console.log(req.body, 'req.body');

    let symbol = req.body.body;
    let range = req.body.range;
    console.log(symbol, 'SYMBOL!');
    axios
        .get(
            `https://cloud.iexapis.com/stable/stock/${symbol}/chart/${range || 'ytd'}?token=${
                process.env.APIKEY2
            }`
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

router.get('/add-stock', (req, res, next) => {
    const { _id } = req.user;
    User.findById({ _id }).then(user => {
        console.log(user);
        res.json(user);
    });
});

/* Adds user stocks to database */
router.post('/add-stock', (req, res, next) => {
    const { body } = req.body;
    const { _id } = req.user;

    User.findByIdAndUpdate({ _id }, { $addToSet: { watchList: body } }).then(response => {
        console.log(response, 'from mongo');
    });
});

const getPrice = symbol => {
    console.log(symbol, 'SYMBOLS, line 80');
    let range;
    return axios
        .get(
            `https://cloud.iexapis.com/stable/stock/${symbol}/chart/${range || 'ytd'}?token=${
                process.env.APIKEY2
            }`
        )
        .then(response => {
            let { data } = response;
            return data;
        })
        .catch(err => {
            console.error('err');
        });
};

router.post('/get-prices', (req, res, next) => {
    let symbols = req.body.body;
    console.log(symbols);
    const promisesArray = symbols.map(symbol => getPrice(symbol));
    Promise.all(promisesArray).then(results => {
        /* console.log(results); */

        res.json(results);
    });
});

module.exports = router;

/* OLD ONE */
/* `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=5min&apikey=${
    process.env.APIKEY
}/`; */
