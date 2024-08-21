const { MongoClient } = require('mongodb');

let client;

async function dbConnection() {
    try {
        const dbName = process.env.DB_NAME;
        const uri = process.env.DB_URI;
        if (!client) {
            client = new MongoClient(uri);
            await client.connect();
            console.log('Database connection established');
        }
        console.log("dbName", dbName);
        return client.db(dbName);
    } catch (err) {
        console.log('Error connecting to database:', err);
    }
}

module.exports = dbConnection;


