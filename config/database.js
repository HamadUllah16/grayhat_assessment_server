const mongoose = require('mongoose');
require('dotenv').config()
async function connectDatabase() {
    console.log('Trying to connect to Database...')
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log('Database Connected.')
        return 'DB Connected.'
    } catch (error) {
        console.error('Error in Database Connection', error);
        throw error;
    }
}

module.exports = connectDatabase;