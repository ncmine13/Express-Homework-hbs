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

var dataBaseData = [{
	"username": "Silly Goose",
	"url": "http://d2fbmjy3x0sdua.cloudfront.net/sites/default/files/styles/hero_cover_bird_page/public/Canada%20Goose_KK_APA_2013_28563_226667_BenjaminSchelling.jpg",
	"about": "I like to QQUAAACKK and drink milk"
}]

app.get('/', function(request, response){
	response.render('home')
})

app.get('/register', function(request, response){
	response.render('register', {})
})

app.get('/login', function(request, response){
	response.render('login', {})
})

app.get('/home', function(request, response){
	response.render('home');
})

app.get('/profile', function(request, response){
	response.render('profile', {userdata: dataBaseData})
})

app.post('/users', function(request, response){
	users.push({username: request.body.username, password: request.body.password})
	console.log(users);
	response.render('login');
})

app.post('/profile', function(request, response){
	console.log(request.body.username);
	console.log(request.body.password);
	for(i=0; i<users.length; i++){
		if(users[i].username === request.body.username){
			if(users[i].password === request.body.password){
				console.log("lala");
				response.render('profile', {userdata: dataBaseData})
				//render home page
			} else {
				response.send("Failed to log in");
				//allow them to retry
			}
		}
	}
})

server.listen(4000, function(){
	console.log("listening at 4000");
})
