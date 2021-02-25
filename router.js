var work = require('./work');
var fs = require('fs');
//var db = require('./db');
var url = require('url');
var express = require('express');

var router = express.Router();

router
.get('/',(req,res)=>{
	work.getAll(req,res);
})
	
module.exports = router;