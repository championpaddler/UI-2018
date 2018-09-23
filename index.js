var path = require('path')

var express = require('express')
var app = express()

const data=require('./controllers/data')
const html=require('./controllers/file')
const count=require('./controllers/count')
// respond with "hello world" when a GET request is made to the homepage

app.get('/', function (req, res) {
    res.redirect('/index')

})


//routes
app.use(express.static(path.join(__dirname, '/public')));



app.get('/home', function (req, res) { res.sendFile(path.join(__dirname + '/home.html'))})
app.get('/index', function (req, res) {res.sendFile(path.join(__dirname + '/index.html'))})
app.get('/login', function (req, res) {res.sendFile(path.join(__dirname + '/public/login.html'))})
app.get('/Error', html.render)
app.get('/Overall', html.render)
app.get('/Critical', html.render)

app.get('/Robots', html.render)
app.get('/Info', html.render)
app.get('/Warn', html.render)
app.get('/Trace', html.render)
app.get('/warning', html.render)
app.get('/settings', function(req,res){
    res.sendFile(path.join(__dirname+'/settings.html'))
})
// app.get('/api/data/:id',data.data);
// app.get('/api/count',count.data);
app.get('*', function (req, res) {res.redirect('/index')});

    

//api's







app.listen(process.env.PORT||3000, function () {
    console.log('http://localhost:3000')
});