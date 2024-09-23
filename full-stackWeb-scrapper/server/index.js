const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

const scrapers = require('./scrapers');
const db = require('./db'); // This module should contain the updated TypeORM setup

app.use(bodyParser.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");  // Consider security implications in production
    res.header("Access-Control-Allow-Headers", "Content-Type");
    next();
});

// Initialize the TypeORM connection
db.initializeDataSource().then(() => {
    console.log('Data Source has been initialized!');

    // Setup your API endpoints
    app.get('/creators', async (req, res) => {
        try {
            const creators = await db.getAllCreators();
            res.send(creators);
        } catch (error) {
            res.status(500).send(error.message);
        }
    });

    app.post('/creators', async (req, res) => {
        console.log(req.body);
        const channelData = await scrapers.scrapeChannel(req.body.channelURL);
        const creators = await db.insertCreator(channelData.name, channelData.avatarURL, req.body.channelURL);
        res.send(creators);
    });

    // Start listening on the specified port
    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`);
    });

}).catch(error => {
    console.error('Failed to initialize the data source:', error);
    process.exit(1); // Exit process with error code
});
