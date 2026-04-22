const express = require("express");
const app = express();
const path = require('path');


//sendFiles use to send only a single file
app.get('/',(req,res) => {
   res.sendFile(path.join(__dirname,'Example', 'practice.html'))
})
// when you want to send all files, folder, img then use(express.static Middleware)
app.use(express.static('example')) 

app.listen(3000,() => {
    console.log('Server is running on port 3000.')
})