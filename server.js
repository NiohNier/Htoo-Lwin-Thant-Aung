const express =  require('express');

const app = express()

app.get('',function(req,res){
   res.sendFile(__dirname + '/index.html');
});
 
app.listen(4000,function(){
     console.log("Express Started on Port 4000");
});