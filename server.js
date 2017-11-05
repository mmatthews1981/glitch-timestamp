// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();
var moment = require( 'moment' );

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.get("/:string", function (request, response) {
  var string = request.params.string;
  
  var res = {
    unix: null,
    natural: null
  };
  
  if(!isNaN(string)) {
    res.unix = string;
    res.natural = moment.unix(string).format("MMMM D, YYYY");
  }
  
  if(moment(string).isValid()){
    res.unix = moment(string).format("X");
    res.natural = moment(string).format("MMMM D, YYYY");
  } 
  
  response.send(res);

});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
