const express = require('express');
const morgan = require('morgan');
const app = express();  
const logger = require('morgan');


//Middleware function logRequest(req, res, next) 

// const logger = (req, res, next) => { 
//     console.log(`${new Date()}, Request[${req.method}, [${req.url}]]`);
//     next(); 
// }
// const authorize = (req, res, next) => { 
//     console.log("Authorized request");
//     next(); 
// }

// app.use([authorize, logger]);


// Morgan use for logging HTTP requests in the console. 
// It provides various pre-defined formats for logging, such as 'dev', 'combined', 'common', 'short', and 'tiny'.
//  You can also create custom formats if needed. By using Morgan, you can easily track incoming requests, 
// their methods, URLs, response status codes, and response times, 
// which can be helpful for debugging and monitoring your Express application.

app.use(morgan('dev'));
app.use(morgan('short'));

app.get('/',(req, res) => {
    res.send('Home');
})
app.get('/about',(req,res) => {
res.send('About')
})
app.get('/contact',(req,res) => {
res.send('Contact')
})



app.listen(3000, () => {
    console.log("Server is running on port 3000");
})