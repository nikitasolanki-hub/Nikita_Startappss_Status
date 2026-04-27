const {MongoClient} = require('mongodb');   
const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);
const dbName = 'MyDatabase';


//MpngoDB connection

const dbConnection = async () => {
    try {
        await client.connect();
        console.log('Connected Successfully to Database');
        const db = client.db(dbName);
        return db;
    }
    catch (err) {
        console.error('Error connecting to MongoDB:', err);
        throw err;
    }
}

module.exports = {dbConnection};

