var express = require('express');

var app = express();

app.use(express.static(__dirname + '/public'));

var server = app.listen(process.env.PORT || 3000, function(){
    var port = server.address().port;
    console.log("App now running on port", port);
});