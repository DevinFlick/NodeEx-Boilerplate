var express = require('express'),
  cors = require('cors'),
  bodyParser = require('body-parser'),
  server = express(),

  port = process.env.PORT || 8080;

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: true}));
server.use(express.static(__dirname + '/public'));
server.use(cors());

server.get('/', function(req, res, next){
 res.sendFile('index.html', {root: __dirname + '/public'});
});

server.listen(port, function(){
 console.log("Now listening my man! on port" + port);
});
