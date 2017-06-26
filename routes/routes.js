var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'we.match' });
});

// GET registartion page
router.get('/register', function(req, res, next) {
  res.render('register', { title: 'Registration' });
});

// GET login page
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Login' });
});

module.exports = router;
