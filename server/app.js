var express = require('express'),
	app		= express(),
	server	= require('http').createServer(app),
	path	= require('path');



app.get('/', function(request, response){
	response.send("lalala")
})





server.listen(4000, function(){
	console.log("listening at 4000");
})
