var http = require('http');
var fs = require('fs');
var moment = require('moment');
var template = require('art-template');
template.defaults.root = './';
var server = http.createServer();
var router = require('./router')
var express = require('express');
const app = express();

app.use(express.static('public'));
app.use(router);
app.engine('art',require('express-art-template'));


app.listen(443,function(){
	console.log('init success');
})