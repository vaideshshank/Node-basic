var express=require('express');
var app=express();

var bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));
app.use('/images',express.static(__dirname+"/images"));
app.set('view engine','ejs');


app.get('/',function(req,res){
	res.sendFile(__dirname+"/spare.html");
	console.log(__dirname);
	
});

app.post('/submit-student-data', function (req, res) {
    var name=req.body.firstName+" "+req.body.lastName+"File : "+req.body.file;

    res.render('ejsfile.ejs',{
								firstname: req.body.firstName,
								lastname: req.body.lastName,
								hobbies:req.body.Hobbies
							});

    res.render('ejsfile.ejs',{firstname:req.body.firstName, lastname:req.body.lastName});
});

var server=app.listen(8000,function(){
	console.log('Server running');
});



