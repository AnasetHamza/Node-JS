var http = require('http');
var EventEmitter = require('events').EventEmitter;
var jeu = new EventEmitter();
	
var server = http.createServer();
server.on('request', function(req, res) {

	res.writeHead(200);
	res.end('Salut tout le monde !');
});


jeu.on('gameover', function(message){
	console.log(message);
});



server.listen(8080);




jeu.emit('gameover', 'Vous avez perdu !');
