const express = require('express');
const app = express();
const Phone = require('./data');

app. get('/', (req, res)  => {
    res.send('<h1>Home Page</h1><a href="/api/phones">View Phones</a>')
})

    //app.get('/api/phones',(req,res) => {
    // const newItem = Phone.map((product) => {
    //     const {id,name,image} = product;
    //     return{id,name,image};
    // })
    // res.json(newItem);

//Params

// app.get('/api/phones/:phoneId',(req,res) => {
//     console.log(req.params);
//     const {phoneId} = req.params;
//     const singleProduct = Phone.find((product) => product.id === Number(phoneId));

//      if(!singleProduct){
//        res.status(404).send('Product Does Not Found');
//     }

//     res.json(singleProduct);

   
// })



//Query String



app.get('/api/v1/query',(req, res) => {
    //console.log(req.query)
    let sortedPhone = [...Phone];
    const {search, limit} = req.query;
    
    if(search) {
        sortedPhone = sortedPhone.filter((product) => {
            return product.name.toLowerCase().startsWith(search)
        });
        //res.send("Hiiii")
    }

    if(limit){
        const numberLimit = number(limit);

        if(isNaN(NumberLimit) || NumberLimit <= 0){
            return res.status(200).json({message: "Limit Is Not Valid"});
        } 
        sortedPhone = sortedPhone.slice(0, Number(limit)); 
    }
    res.json(sortedPhone)
    
})


app.listen(5000, () => {
    console.log("Started");
})



