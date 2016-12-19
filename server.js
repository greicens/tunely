var express = require('express');
var bodyParser = require('body-parser');
var db = require('./models');
var controllers = require('./controllers');

console.log(controllers);
var app = express();

//what does this do?
app.use(express.static('public'));

app.get('/', function (req, res){
  res.sendFile('views/index.html',{root: __dirname});
});

app.get('/api', controllers.api.index);

app.get('/api/albums', controllers.albums.index);

app.listen(process.env.PORT || 3000, function(){
  console.log('Express server is up and running on http://localhost:3000/');
});
