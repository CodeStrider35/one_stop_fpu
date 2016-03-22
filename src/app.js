var express = require('express');

var app = express();

app.use('/static', express.static(__dirname + '/public'));

app.get('/src/public/index.html', function (req, res){
    res.render()
});

var port = process.env.PORT || 3000;

app.listen(port, function(){
    console.log("Listening on localhost 3000");
});