// var http = require('http');
// var fs = require('fs');
// var url = require('url');
// var nodemailer = require('nodemailer');

// // var express = require('express');
// // var app = express();
// // var path = require('path');

// // Create a server
// http.createServer( function (request, response) {  
//    // Parse the request containing file name
//    var pathname = url.parse(request.url).pathname;
   
//    // Print the name of the file for which request is made.
//    console.log("Request for " + pathname + " received.");
   
//    // Read the requested file content from file system
//    fs.readFile(pathname.substr(1), function (err, data) {
//       if (err) {
//          console.log(err);
         
//          // HTTP Status: 404 : NOT FOUND
//          // Content Type: text/plain
//          response.writeHead(404, {'Content-Type': 'text/html'});
//       } else {	
//          //Page found	  
//          // HTTP Status: 200 : OK
//          // Content Type: text/plain
//          response.writeHead(200, {'Content-Type': 'text/html'});	
         
//          // Write the content of the file to response body
//          response.write(data.toString());		
//       }
      
//       // Send the response body 
//       response.end();
//    });   

// //    if (request.url === "/index") {
// //       console.log("A")
// //       fs.readFile("index.html", function (error, pgResp) {
// //           if (error) {
// //              console.log(error);
// //               response.writeHead(404);
// //               response.write('Contents you are looking are Not Found');
// //           } else {
// //              console.log("B");
// //               response.writeHead(200, { 'Content-Type': 'text/html' });
// //               console.log("C");
// //               response.write(pgResp);
// //               console.log("D");
// //           }
// //          console.log("E");
// //           response.end();
// //           console.log("F");
// //       });
// //   }

// //   if (request.url === "/vote") {
// //    fs.readFile("vote.html", function (error, pgResp) {
// //        if (error) {
// //            response.writeHead(404);
// //            response.write('Contents you are looking are Not Found');
// //        } else {
// //            response.writeHead(200, { 'Content-Type': 'text/html' });
// //            response.write(pgResp);
// //        }
        
// //        response.end();
// //    });
// // }

// }).listen(8081);

// // Console will print the message
// console.log('Server running at http://127.0.0.1:8081/');

const express = require('express')
const app = express()
var path = require('path')
// var voter_aadhar_num;
 
app.get('/', function(req, res) {
   res.sendFile(path.join(__dirname + '/index.html'));
   console.log(path.join(__dirname + '/index.html'));
});

app.get('/vote', function(req, res) {
   res.sendFile(path.join(__dirname + '/vote.html'));
});
 
app.listen(3000)

// var transporter = nodemailer.createTransport({
//    service: 'gmail',
//    auth: {
//      user: 'youremail@gmail.com',
//      pass: 'yourpassword'
//    }
//  });
 
//  var mailOptions = {
//    from: 'digitalvotingapp@gmail.com',
//    to: 'myfriend@yahoo.com',
//    subject: 'Sending Email using Node.js',
//    text: 'That was easy!'
//  };

//  function sendEmail(voter_email) {
//      mailOptions['to'] = voter_email;
//      transporter.sendMail(mailOptions, function(error, info){
//        if (error) {
//          console.log(error);
//        } else {
//          console.log('Email sent: ' + info.response);
//        }
//      });
//  }

var nodemailer = require("nodemailer");

var smtpTransport = nodemailer.createTransport({
   service: "gmail",
   host: "smtp.gmail.com",
   auth: {
       user: "digitalvotingapp@gmail.com",
       pass: "nitsrinagar03@"
   }
});

 app.get('/send',function(req,res){
   var mailOptions={
       to : req.query.to,
       subject : 'ACCOUNT FOR VOTING CREATED SUCCESSFULLY',
       text : req.query.text
   }
   console.log(mailOptions);
   smtpTransport.sendMail(mailOptions, function(error, response){
    if(error){
           console.log(error);
       res.end("error");
    }else{
           console.log("Message sent: " + response.message);
       res.end("sent");
        }
});
});