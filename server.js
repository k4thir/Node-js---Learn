const http = require('http');
const fs = require('fs');                                            //to read HTML file
const _ = require('lodash');



const server = http.createServer((req,res) => {                     //creating server 
        // console.log("Request made")
        // console.log(req);
        // console.log(req.url ,req.method);

        //lodash
        const num = _.random(0,30);                                 //random method generates a random number between the boundaries given as arguments 
        console.log(num);


        const greet = _.once(() =>{                                  //_.once() method will help us to run the function only once 
            console.log('hello!!');
        })
        greet();                                                      //greet() function executes only once no matter how many times we call it
        greet();

        let path = './views/';
        switch(req.url){
            case '/':
                path += 'index.html';
                res.statusCode = 200;
                break;
            case '/about':
                path += 'about.html';
                res.statusCode = 200;
                break;
            case '/about-us':                                            //redirect to /about page
                res.statusCode = 301;
                res.setHeader('Location','/about');
                res.end();
            
            default :
                path += '404.html';
                res.statusCode = 404;
                break;
        }

        //SET HEADER CONTENT TYPE
        res.setHeader('Content-Type','text/html');
        // res.write("<p>Hello kay!!</p>");
        // res.write('<h1>hi</h1>')
        // res.end();

        fs.readFile(path,(err,data) => {                           //replacing './views/index.html' with path variable           
            if (err){
                console.log(err);
                res.end();                                         //or else the page will keep loading
            }else
            {
                // res.write(data);
                // res.end();                                      //if we send only one "data" we can directly send it with the res.end() .  

                res.end(data);
            }
        }) 


});

server.listen(3000,'localhost',()=>{
    console.log("listening for request made in port 3000")          //listening request made to the server 
});
