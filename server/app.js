var express = require('express'),
	app		= express(),
	server	= require('http').createServer(app),
	path	= require('path'),
	bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

var users = [{username: "testing", password: 1234}]

app.get('/', function(request, response){
	console.log("lalala")
})

app.get('/register', function(request, response){
	response.render('register', {})
})

app.post('/register', function(request, response){
	users.push({username: request.body.username, password: request.body.password})
	console.log(users);
	response.render('register');
})




server.listen(4000, function(){
	console.log("listening at 4000");
})
