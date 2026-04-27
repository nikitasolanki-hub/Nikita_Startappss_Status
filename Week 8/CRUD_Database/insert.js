const {dbConnection} = require('./db');

    
 async function main() {
    try{
        const db = await dbConnection();
        const collection = db.collection('Users');

        const data = [
            {name: "John Doe", age:23}, 
            {name: "Jock cena", age:20}, 
        ]
      
        const InsertResult = await collection.insertMany(data);
        console.log(InsertResult);
    }
    catch(err){
        console.log("Error performing the task:",err);

    }
 }
 main(); 