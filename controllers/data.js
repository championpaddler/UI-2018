const csv=require('csvtojson')
var path=require('path')
exports.data=(req,res)=>{
    
    const csvFilePath=path.join(__dirname+'/../data.csv')
    console.log(csvFilePath)
csv()
.fromFile(csvFilePath)
.then((jsonObj)=>{
var arr = [];

for(var r of jsonObj)
{  var t=[]
     for (var key in r) {
        t.push(  r[key]  );
  
 }
 arr.push(t) 
}

   res.send(arr)
})
}