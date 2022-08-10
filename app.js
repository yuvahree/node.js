let express=require('express');
let app= express();

app.get('/',function(req,res){
    res.sendFile(__dirname + "/"+"index.html");
});
app.get('/home',function(req,res){
    res.send('<h1>hii'+req.query['username']+'</h1><br><h2>Mail id:'+req.query['mailid']+'</h2>');
});

app.listen(8080);