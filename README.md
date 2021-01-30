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