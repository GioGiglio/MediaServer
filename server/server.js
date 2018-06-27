const express = require('express');;
const fs = require('fs');
const path = require('path');
const app = express();;


// Configuration
app.use(express.json());

app.listen(50002, () => console.log('App listening on port 50002!'));

app.get('/', function(req, res){
	res.sendFile(path.resolve('public/index.html'));
});

// serve static files
app.use(express.static('public'));


app.get('/api/videos', function(req, res){
	fs.readdir('public/videos', (err, files) => {
		if (err){
			throw err;
			res.sendStatus(500);
		}
		else{
			res.status(200).json(files);
		}
	});
});