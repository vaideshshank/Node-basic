//middleware are thepieces of code that run before the other code in any node file.



var express=require('express');
var app=express();

var bodyParser=require('body-parser');

//Middlewares---
app.use(bodyParser.urlencoded({extended:false}));
app.use('/images',express.static(__dirname+"/images"));		//middleware
app.use('/',function(req,res,next){
	console.log('This is the middleware.');
	next();
});

//----

app.set('view engine','ejs');


app.get('/',function(req,res){
	res.render('home');
});

app.get('/about',function(req,res){
	res.render('about');
});


app.get('/form',function(req,res){
	res.sendFile(__dirname+"/spare.html");
	console.log(__dirname);
	
});

app.post('/form/submit-student-data', function (req, res) {
    
    res.render('ejsfile',{
								firstname: req.body.firstName,
								lastname: req.body.lastName,
								hobbies:req.body.Hobbies
							});

    res.render('ejsfile.ejs',{firstname:req.body.firstName, lastname:req.body.lastName});
});

var server=app.listen(8000,function(){
	console.log('Server running');
});



