var app = require('express')();
var http = require('http').Server(app);

/*app.get('/', function(req, res){
  res.send('<h1>Hello world</h1>');
});*/

app.get('/', function(req, res){
res.sendFile(__dirname + '/index.html');
});
   
http.listen(process.env.PORT, function(){
  console.log('listening on *:3000');
});