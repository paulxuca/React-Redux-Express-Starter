var path = require('path');
var express = require('express');
const app = express();
var PORT = process.env.PORT || 3000;

var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var webpack = require('webpack');
var config = require('./webpack.dev.config');
var compile = webpack(config);

app.use(webpackDevMiddleware(compile, {
	noInfo:true,
	publicPath: config.output.publicPath
}));

app.use(webpackHotMiddleware(compile));

app.get('/', function(req, res){
	res.sendFile(__dirname + '/dist/index.html');
});

app.listen(PORT, function(err){
	if(err) throw(err);
	console.log(`Listening to port ${PORT}`);
})