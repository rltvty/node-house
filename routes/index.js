var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var psuedoHal = '' +
          'GET      /rooms \n' +
          'GET      /rooms/:room_id/controls \n' +
          'GET      /rooms/:room_id/controls/:control_id/status \n' +
          'GET|POST /rooms/:room_id/controls/:control_id/options \n';

  res.send(psuedoHal);
});

module.exports = router;
