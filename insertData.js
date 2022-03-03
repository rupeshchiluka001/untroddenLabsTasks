(() => {
    const MongoCLient = require('mongodb').MongoClient;
    require('dotenv').config();

    const DB_STRING = "mongodb://localhost:27017/";
    const DB_NAME = "temperatureDB";
    const COLLECTION_NAME = "temperatureValues";

    const temperatureRecords = [
        {
            "metadata": { "sensorId": 5578, "type": "temperature" },
            "timestamp": `ISODate("2021-05-18T00:00:00.000Z")`,
            "temp": 12
        },
        {
            "metadata": { "sensorId": 5578, "type": "temperature" },
            "timestamp": `ISODate("2021-05-18T04:00:00.000Z")`,
            "temp": 11
        },
        {
            "metadata": { "sensorId": 5578, "type": "temperature" },
            "timestamp": `ISODate("2021-05-18T08:00:00.000Z")`,
            "temp": 11
        },
        {
            "metadata": { "sensorId": 5578, "type": "temperature" },
            "timestamp": `ISODate("2021-05-18T12:00:00.000Z")`,
            "temp": 12
        },
        {
            "metadata": { "sensorId": 5578, "type": "temperature" },
            "timestamp": `ISODate("2021-05-18T16:00:00.000Z")`,
            "temp": 16
        },
        {
            "metadata": { "sensorId": 5578, "type": "temperature" },
            "timestamp": `ISODate("2021-05-18T20:00:00.000Z")`,
            "temp": 15
        },
        {
            "metadata": { "sensorId": 5578, "type": "temperature" },
            "timestamp": `ISODate("2021-05-19T00:00:00.000Z")`,
            "temp": 13
        },
        {
            "metadata": { "sensorId": 5578, "type": "temperature" },
            "timestamp": `ISODate("2021-05-19T04:00:00.000Z")`,
            "temp": 12
        },
        {
            "metadata": { "sensorId": 5578, "type": "temperature" },
            "timestamp": `ISODate("2021-05-19T08:00:00.000Z")`,
            "temp": 11
        },
        {
            "metadata": { "sensorId": 5578, "type": "temperature" },
            "timestamp": `ISODate("2021-05-19T12:00:00.000Z")`,
            "temp": 12
        },
        {
            "metadata": { "sensorId": 5578, "type": "temperature" },
            "timestamp": `ISODate("2021-05-19T16:00:00.000Z")`,
            "temp": 17
        },
        {
            "metadata": { "sensorId": 5578, "type": "temperature" },
            "timestamp": `ISODate("2021-05-19T20:00:00.000Z")`,
            "temp": 12
        }
    ];

    MongoCLient.connect(process.env.DB_STRING || DB_STRING, async (err, db) => {
        if (err) throw err;

        // create database
        const dbo = db.db(process.env.DB_NAME || DB_NAME);

        // store values in collection
        try {
            const res = await dbo.collection(process.env.COLLECTION_NAME || COLLECTION_NAME).insertMany(temperatureRecords);

            console.log("Documents inserted in Database!!");

            db.close();
        } catch (err) {
            throw err;
        }
    });
})();