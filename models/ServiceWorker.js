const { default: mongoose } = require('mongoose');

const ServiceWorkerSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    phone: {
        type: String,
        required: true,
        unique: true
    },

})