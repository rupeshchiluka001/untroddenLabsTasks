// DB_STRING, database name, collection name should be in .dotenv file
const MongoClient = require('mongodb').MongoClient;
require('dotenv').config();

const DB_STRING = "mongodb://localhost:27017/";
const DB_NAME = "temperatureDB";
const COLLECTION_NAME = "temperatureValues";

MongoClient.connect(process.env.DB_STRING || DB_STRING, async (err, db) => {
    if (err) throw err;

    var dbo = db.db(process.env.DB_NAME || DB_NAME);

    try {
        // getting values from database
        let res = await dbo.collection(process.env.COLLECTION_NAME || COLLECTION_NAME).find({});

        res = await res.toArray();

        // finding average of temperature
        const average = ( res.reduce((sum, currentRecord) => sum + currentRecord.temp, 0) / res.length );

        console.log(average);

        db.close();
    } catch (err) {
        throw err;
    }
});