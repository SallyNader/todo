var express = require('express'),
    bodyParser = require('body-parser'),
    path = require('path'),   
    http = require('http'),
    passport = require('passport'),
    session = require('express-session'),
    cookieParser = require('cookie-parser');

const mongoDB_connection = require('./connection/mongoDB');

var app = express();

var taskRoutes = require('./server/routes'),
    authRoutes = require('./server/authRoutes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(cookieParser());
app.use(session({secret: 'todo'}));

require('./config/passport')(app);

app.use(express.static(path.join(__dirname,'dist')));
app.use('/task',taskRoutes);
app.use('/signup',authRoutes);
app.get("*"), (req , res) => {
    res.sendFile(path.join(__dirname,'dist/index.html'));
}
var port = process.env.PORT || '8888';
app.set('port',port);
var server = http.createServer(app);
server.listen(port,()=> console.log('Server is running on port ' + port));