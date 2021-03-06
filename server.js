var express = require('express'),
    cors =require('cors'),
    bodyParser = require('body-parser'),
    path = require('path'),   
    http = require('http'),
    passport = require('passport'),
    cookieParser = require('cookie-parser'),   
    mongoose = require('mongoose');

const mongoDB_connection = require('./connection/mongoDB');

var app = express();

var taskRoutes = require('./server/routes'),
    authRoutes = require('./server/authRoutes'),
    user = require('./server/users'),
    favorite = require('./server/favoriteRoutes');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));


app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);

app.use(cookieParser());

app.use(express.static(path.join(__dirname,'dist')));
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());
app.use('/task', taskRoutes);
app.use('/signup', authRoutes);
app.use('/user', user);
app.use('/favorite', favorite);


app.get("*"), (req , res) => {
    res.sendFile(path.join(__dirname,'dist/index.html'));
}
var port = process.env.PORT || '8888';
app.set('port',port);
var server = http.createServer(app);
server.listen(port,()=> console.log('Server is running on port ' + port));