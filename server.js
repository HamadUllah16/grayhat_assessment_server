const express = require('express');
const app = express();
const cors = require('cors')
const connectDatabase = require('./config/database')
const jobRoutes = require('./routes/jobRoutes');
require('dotenv').config();

// middlewares
app.use(express.json());
app.use(cors({
    origin: '*'
}))


// database connection
connectDatabase().then((message) => {

    // job routes
    app.use('/api/job', jobRoutes)

    app.get('/', (req, res) => {
        res.status(200).json({ message: 'Server Up', database: message })
    })

    app.listen((process.env.PORT), () => {
        console.log(`Server Listening to Port: ${process.env.PORT}`)
    })

}).catch((err) => {
    console.error(err);
    return err;
})