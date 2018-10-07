var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* POST home page. */
router.post('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* PUT home page. */
router.put('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* DELETE home page. */
router.delete('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
