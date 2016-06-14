"use strict";
var express = require('express');
var path = require('path');
var stylus = require('stylus');
var app = express();
var server = require('http').Server(app);
app.set('view engine', 'jade');
app.set('views', path.join(__dirname, 'views'));
app.use(stylus.middleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));
app.get('/', displayIndex);
function displayIndex(req, res) {
    res.render('index', { isfree: false });
}
server.listen(3000);
//# sourceMappingURL=app.js.map