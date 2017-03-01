var express = require('express');
var router = express.Router();
var request = require('request');

/* GET home page. */
router.get('/', function(req, res, next) {
  var psuedoHal = '' +
          'GET      /rooms \n' +
          'GET      /rooms/:room_id/controls \n' +
          'GET      /rooms/:room_id/controls/:control_id/status \n' +
          'GET|POST /rooms/:room_id/controls/:control_id/options \n';

  res.send(psuedoHal);
});

router.get('/audio/*', function(req, res, next) {
    var path = 'http://localhost:3002/' + req.path.substring(7);
    console.log('requesting:  ' + path);
    request.get({url:path, timeout: 2500}, function (error, response, body) {
        res.status(response.statusCode).send(body);
    });
});

router.get('/lights/*', function(req, res, next) {
    var path = 'http://localhost:3001/' + req.path.substring(8);
    console.log('requesting:  ' + path);
    request.get({url:path, timeout: 2500}, function (error, response, body) {
        res.status(response.statusCode).send(body);
    });
});

router.post('/audio/*', function(req, res, next) {
    var path = 'http://localhost:3002/' + req.path.substring(7);
    console.log('posting to:  ' + path);
    request.post({url:path, form: req.body, timeout: 2500}, function(err,response,body) {
        res.status(response.statusCode).send(body);
    });
});

router.post('/lights/*', function(req, res, next) {
    var path = 'http://localhost:3001/' + req.path.substring(8);
    console.log('posting to:  ' + path);
    request.post({url:path, form: req.body, timeout: 2500}, function(err,response,body) {
        res.status(response.statusCode).send(body);
    });
});

module.exports = router;
