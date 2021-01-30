This is a currency converter API written in Express JS.
It fetches data from a currency converter API: https://exchangeratesapi.io/,
and returns a formatted version of the response:

```
    {
        "results": {
            "base": "CZK",
            "date": "2021-01-29",
            "rates": {
                "EUR": 0.0384319754,
                "SEK": 0.3885857033,
                "IDR": 653.1191391238
            }
        }
    }
```

To test the API, send a GET request to : 'https://adejoke-currency-converter.herokuapp.com/api/rates'. 
The API also takes params (base and currency) e.g
    ```https://adejoke-currency-converter.herokuapp.com/api/rates?base=CZK&currency=EUR,SEK,IDR```
    The request must either be sent without params or with both params. DO NOT try to send a request with only one param.
