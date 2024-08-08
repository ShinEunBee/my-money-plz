import { NextFunction } from "express";

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req:Request, res:Response, next:NextFunction) {
  res.render('index', { title: 'Express' });
});

router.use('/users', require('./users'));
router.use('/comment', require('./comment'));

module.exports = router;