const {dbConnection} = require('./db');

    
 async function main() {
    try{
        const db = await dbConnection();
        const collection = db.collection('Users');

        const filter = {name: "John Doe"};

        const DeleteResult = await collection.deleteMany(filter);
        console.log(DeleteResult.deletedCount);
    }
    catch(err){
        console.log("Error performing the task:",err);

    }
 }
 main(); 