const {dbConnection} = require('./db');

    
 async function main() {
    try{
        const db = await dbConnection();
        const collection = db.collection('Users');

        const UpdatedResult = await collection.updateMany({name: "John Doe"}, {$set: {age: 23}});
        console.log(UpdatedResult.modifiedCount);
    }
    catch(err){
        console.log("Error performing the task:",err);

    }
 }
 main(); 