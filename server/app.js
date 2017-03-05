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
app.get('/login', function(request, response){
	response.render('login', {})
})


app.post('/users', function(request, response){
	users.push({username: request.body.username, password: request.body.password})
	console.log(users);
	response.render('register');
})

app.post('/loggin', function(request, response){
	console.log(request.body.username);
	console.log(request.body.password);
	for(i=0; i<users.length; i++){
		if(users[i].username === request.body.username){
			if(users[i].password === request.body.password){
				response.send("You're in!")
			} else {
				response.send("Failed to log in");
			}
		}
	}
})




server.listen(4000, function(){
	console.log("listening at 4000");
})
