const ratesConverter = require('../controllers/converter')

const express = require('express');
const router = express.Router();


/* GET home page. */
router.get('/', async function(req, res, next) {
    const base = req.query.base
    const currency = req.query.currency
    const base_url = `https://api.exchangeratesapi.io/latest`
    const extended_url =  `${base_url}?base=${base}&symbols=${currency}`
    base ? url = extended_url : url = base_url
    
    const data = await ratesConverter(url)
    if (data.name == 'Error'){
        res.status(data.response.status).send(data.response.data)
    }
    else{
        res.json(data)
    }
});

module.exports = router;
