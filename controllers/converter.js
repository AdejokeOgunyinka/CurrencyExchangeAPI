const axios = require('axios');
const { response } = require('express');

function ratesConverter(url){
    return axios.get(url)
    .then(response => {
        const data = response.data;
        const base = data.base;
        const date = data.date;
        const rates = data.rates;
        const result = {"results": {"base": base, "date": date, "rates": rates} }
        return result;
    }).catch(error=> {
        // console.log(error);
        return error;
    })
}

module.exports = ratesConverter;
