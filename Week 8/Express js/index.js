const express = require('express');
const app = express();
const path = require('path')


app.get('/',(req, res)=> { 
    res.send("Hello World") 
    //res.status(404).send("<h1>Something Happened very soon !  </h1>") (Status)
})
app.get('/Contact',(req, res)=> { 
    res.send("<h1>Contact</h1>") 
})
app.get('/files',(req, res)=> { 
    res.sendFile(path.join(__dirname,'index.html')) ;
})
app.get('/jsonres',(req, res)=> {                
    res.json([{
        firstName:'join',
        lastName:'cena'
    },{
        firstName:'cody',
        lastName:'Rhodes'
    }])
})
//for all path 
// app.all('*',(req,res) => {
//     res.send("Not Found");
// })

// app.listen(3000,()=>{
//     console.log("Server is running")
// })