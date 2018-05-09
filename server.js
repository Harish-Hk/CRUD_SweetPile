var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var mongoose = require('mongoose');
mongoose.connect('mongodb://hk:hk@ds115740.mlab.com:15740/sweet');


var Sweet = mongoose.model('sweet', mongoose.Schema({
	name: String,
	state: String,
	price: String,
	quantity: String
}));



app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/client'));

app.get('/api/sweet', function (req, res) {
	Sweet.find(function (err, sweets) {
		if (err)
			res.send(err);
		res.json(sweets);
	});
});

app.get('/api/sweet/:id', function (req, res) {
	Sweet.findOne({
		_id: req.params.id
	}, function (err, sweet) {
		if (err)
			res.send(err);
		res.json(sweet);
	});
});
app.post('/api/sweet', function (req, res) {
	Sweet.create(req.body, function (err, sweet) {
		if (err)
			res.send(err);
		res.json(sweet);
	});
});

app.delete('/api/sweet/:id', function (req, res) {
	Sweet.findOneAndRemove({
		_id: req.params.id
	}, function (err, sweet) {
		if (err)
			res.send(err);
		res.json(sweet);
	});
});
app.put('/api/sweet/:id', function (req, res) {
	var query = {
		name: req.body.name,
		state: req.body.state,
		price: req.body.price,
		quantity: req.body.quantity,

	};
	Sweet.findOneAndUpdate({
		_id: req.params.id
	}, query, function (err, sweet) {
		if (err)
			res.send(err);
		res.json(sweet);
	});
});
app.listen(process.env.PORT || 3000, function () {
	console.log('server is running on port 3000..');
});
