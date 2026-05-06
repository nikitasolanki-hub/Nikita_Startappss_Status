const {MongoClient} = require('mongodb');   
const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);
const dbName = 'MyDatabase';


//MpngoDB connection

async function main() {
    
    await client.connect();
    console.log('Connected to Server');   
    const db = client.db(dbName);    
    const collection = db.collection('Users');
    const findResult = await collection.find({}).toArray();
    console.log(findResult);
    }

main();