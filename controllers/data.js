const csv=require('csvtojson')
var path=require('path')
exports.data=(req,res)=>{
    
  
  const csvFilePath=path.join(__dirname+'/../data.csv')
    console.log(csvFilePath)
csv()
.fromFile(csvFilePath)
.then((jsonObj)=>{

//preprocess data
    var arr = [];
for(var r of jsonObj)
{  var t=[]
     for (var key in r) {
        t.push(  r[key]  );
  
 }
 arr.push(t) 
}
var datasend=[];

if(req.params.id==="errors")
{
    
    for (var i of arr)
    {
       if(i[2]!=""&&i[2]=="Error")
       {
           datasend.push(i);
       }
    }

}
else if(req.params.id==="info")
{
  
    for (var i of arr)
    {
       if(i[2]!=""&&i[2]=="Info")
       {
           datasend.push(i);
       }
    }
}
else if(req.params.id==="fatal")
{
  
    for (var i of arr)
    {
       if(i[2]!=""&&i[2]=="Fatal")
       {
           datasend.push(i);
       }
    }

}
else if(req.params.id==="critical")
{
  
    for (var i of arr)
    {
       if(i[2]!=""&&i[2]=="critical")
       {
           datasend.push(i);
       }
    }

}
res.send(datasend)



if(req.params.id==="count")
{  
    var count=[0,0,0,0,0];
    
    for (var i of arr)
    {
       if(i[2]!=""&&i[2]=="Error")
       {
           count[0]=count[0]+1;
       }
    



   
       if(i[2]!=""&&i[2]=="Info")
       {
        count[1]=count[1]+1;
       }
  
  if(i[2]!=""&&i[2]=="Fatal")
       {
          
        count[2]=count[2]+1;

       }

  
       if(i[2]!=""&&i[2]=="critical")
       {
        count[3]=count[3]+1;
       }
    }


}

})





}