var http=require('http');
var url=require('url');
var fs=require('fs');
var formidable=require('formidable');
var nodemailer=require('nodemailer');


http.createServer(function(req,res){
	res.writeHead(200,{'Content-Type':'text/html'});
	/*var x={name:"vaidesh",age:12};
	x=JSON.stringify(x);
	res.write(x);
	console.log(JSON.parse(x));*/
	

	var readStream=fs.createReadStream("sample.txt","utf8");
	var writeStream=fs.createWriteStream("sample1.txt","utf8");
	/*readStream.on("data",function(data){
		res.write(data);
		writeStream.write(data);
		console.log("data logged");

		res.end();
	});*/

	/*readStream.pipe(writeStream);
	console.log("made");
	res.end();
	*/

	/*fs.open("sample.txt","r",function(err,data){
		var buffer=new Buffer(1024);
		fs.read(data,buffer,0,buffer.length,0,function(err,bytes){
			if(err) throw err;
			 if(bytes){
			 	console.log(buffer.slice(0,bytes).toString());
			 }

			 fs.close(data,function(err){
			 	if(err) throw err;
			 	res.end();
			 });
		})
	})*/

	/*fs.readFile('sample.txt',function(err,data){
		debugger;
		if(err) throw err;
		console.log(data);
		res.end();
	});*/


	/*if(req.url=="/fileupload"){
		var form = formidable.IncomingForm();
		form.parse(req,function(err,fields,files){
			
			var prevPath=files.upload.path;
			var newPath='Recycle Bin/'+files.upload.name;
			
			fs.rename(prevPath,newPath,function(err){
				if(err) throw err;
				res.write('File uploaded and moved!');
				res.end();
			
		});

		fs.unlink(prevPath,function(err){
			if(err) throw err;
			res.write("deleted!");
			res.end();
		})
		});
	}else{


	res.write('<form action="fileupload" method="post" enctype="multipart/form-data">Name : <input type="text"><br>');
	res.write('Age : <input type="number"><br>');
	res.write('File : <input type="file" name="upload"><br>');
	res.write('<input type="submit"></form>');
	return res.end();
	}*/

	/*var transporter=nodemailer.createTransport({
		service:'gmail',
		auth : {
			user:'vaideshshanky@gmail.com',
			pass:'Vaidesh@123'
		}
	});

	var mailOptions={
		from:'vaideshshanky@gmail.com',
		to:'vaidesh1999@gmail.com',
		subject:"nodmailer",
		text:'This is node mailer from node.js'
	};

	transporter.sendMail(mailOptions,function(err,info){
		if(err) throw err;
		res.write('mail sent');
		res.end();
	});*/
}).listen(8080);