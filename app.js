require('dotenv').config({ path: './config.env' });
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dbConnection = require('./config/dbConfig');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

const actorRoutes = require('./routes/actorRoutes');

async function server() {
    try {
        const db = await dbConnection();
        console.log('Connected to MongoDB');
        app.set('db', db);

        app.use(actorRoutes);

        app.use((err, req, res, next) => {
            console.error(err.stack);
            res.status(500).send('Something broke!');
        });

        app.listen(port, () => console.log(`Server running on port ${port}`));
    } catch (err) {
        console.error('Failed to connect to MongoDB', err);
    }
}

server();

