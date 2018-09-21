var path = require('path')

var express = require('express')
var app = express()

const data=require('./controllers/data')
const html=require('./controllers/file')
// respond with "hello world" when a GET request is made to the homepage

app.get('/', function (req, res) {
    res.redirect('/index')

})


//routes
app.use(express.static(path.join(__dirname, '/public')));



app.get('/home', function (req, res) { res.sendFile(path.join(__dirname + '/home.html'))})
app.get('/index', function (req, res) {res.sendFile(path.join(__dirname + '/index.html'))})
app.get('/login', function (req, res) {res.sendFile(path.join(__dirname + '/public/login.html'))})
app.get('/errors', html.render)
app.get('/info', html.render)
app.get('/fatal', html.render)
app.get('/warning', html.render)
app.get('/api/data/:id',data.data);

app.get('*', function (req, res) {res.redirect('/index')});

    

//api's







app.listen(3000, function () {
    console.log('http://localhost:3000')
});