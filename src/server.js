var express = require('express'),
    bodyParser = require('body-parser'),
    path = require('path'),
    http  = require('http');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'dist')));
app.get("*"), (req , res) => {
    res.sendFile(path.join(__dirname,'dist/index.html'));
}

var port = process.env.PORT || '8888';
app.set('port',port);
var server = http.createServer(app);
server.listen(port,()=> console.log('Server is running on port ' + port));