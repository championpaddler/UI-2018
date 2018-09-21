var path = require('path')

var express = require('express')
var app = express()

const data=require('./controllers/data')
// respond with "hello world" when a GET request is made to the homepage

app.get('/', function (req, res) {
    res.redirect('/index')

})


//routes
app.use('/', express.static(path.join(__dirname, '/public')));



app.get('/home', function (req, res) {
    res.sendFile(path.join(__dirname + '/home.html'))

})
app.get('/index', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'))

})
app.get('/login', function (req, res) {
    res.sendFile(path.join(__dirname + '/public/login.html'))

})

//api's
app.get('/api/data',data.data);

app.get('*', function (req, res) {
    res.redirect('/index')
});





app.listen(3000, function () {
    console.log('http://localhost:3000')
});