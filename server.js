const express = require('express');
const app = express();
const cors = require('cors')
const connectDatabase = require('./config/database')
require('dotenv').config();

// middlewares
app.use(express.json());
app.use(cors({
    origin: '*'
}))


// database connection
const conn = connectDatabase();

app.get('/', (req, res) => {
    res.status(200).json({ message: 'Server Up', conn })
})

app.listen((process.env.PORT), () => {
    console.log(`Server Listening to Port: ${process.env.PORT}`)
})