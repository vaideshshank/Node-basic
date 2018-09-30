var express=require('express');
var app=express();

var bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));
app.use('/images',express.static(__dirname+"/images"));

app.get('/',function(req,res){
	res.sendFile(__dirname+"/spare.html");
	console.log(__dirname);
	
});

/*app.get('/submit-student-data',function(req,res){
	var name=req.body.firstName+" "+req.body.lastName;var name=req.firstName+" "+req.lastName;

	res.send(name);
});
*/

app.post('/submit-student-data', function (req, res) {
    var name=req.body.firstName+" "+req.body.lastName+"File : "+req.body.file;

    res.send(name + " Successful Submission");
});
/*
app.put('/update-data', function (req, res) {
    res.send('PUT Request');
});

app.delete('/delete-data', function (req, res) {
    res.send('DELETE Request');
});
*/

var server=app.listen(8000,function(){
	console.log('Server running');
});


