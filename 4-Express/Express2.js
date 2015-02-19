var express = require('express');
var app = express();
app.get('/', function(req, res) {
	res.setHeader('Content-Type', 'text/plain');
	res.end('Vous êtes à l\'accueil, que puis-je pour vous ?');
});
app.get('/sous-sol', function(req, res) {
	res.setHeader('Content-Type', 'text/plain');
	res.end('Vous êtes dans la cave à vins, ces bouteilles sont à moi !');
});
app.get('/etage/1/chambre', function(req, res) {
	res.setHeader('Content-Type', 'text/plain');
	res.end('Hé ho, c\'est privé ici !');
});
app.listen(8080);
