 var path=require('path') 
 exports.render=(req,res)=> {
    res.sendFile(path.join(__dirname + '/../data.html'));
}