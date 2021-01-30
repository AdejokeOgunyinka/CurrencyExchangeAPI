var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('GET Method does not exist. Add /api/rates to your url path.')
});

module.exports = router;
