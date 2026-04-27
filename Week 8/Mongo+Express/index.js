const express = require('express');
const app = express();
const { dbConnection } = require('./database');

// Get Method 
app.get('/', async(req, res) =>{
    try{
        const db = await dbConnection();
        const collection = db.collection('Users');
        const Users = await collection.find().toArray();
        res.json(Users); 
    }
    catch(err){
        console.log('Error fetching Users:', err);
        res.status(500).json({error: 'Internal Server Error'});
    }
}) 

//Post Method
 app.use(express.json());

app.post('/Users',async(req, res) =>{
    try{
        console.log(req.body)
        const db = await dbConnection();
        const collection = db.collection('Users');
        //let result = await collection.insertOne({name: 'John Jack', age: 30});
        let result = await collection.insertOne(req.body);

        res.json("Updated Successfully");
        res.status(201).json(result);
    }
    catch(err){
        console.error('Error inserting User:', err);
        res.status(500).json({error: 'Internal Server Error'});
    }
});

//(PUT Method )Delete Method
app.put('/Users/:name', async(req, res) =>{
    console.log(req.params)    
    const db = await dbConnection();
    const collection = db.collection('Users');
    let result = await collection.updateOne({name:req.params.name}, {$set:req.body});
    res.json("Put Updated Successfully");
})

//DELETE Method
app.delete('/Users/:name', async(req, res) =>{
    console.log(req.params)    
    const db = await dbConnection();
    const collection = db.collection('Users');
    const userName = req.params.name;
    collection.deleteOne({name:userName})
    res.json("Deleted Successfully");
})


app.listen(5000, () => {
    console.log('Server is running on port 5000');
});  
