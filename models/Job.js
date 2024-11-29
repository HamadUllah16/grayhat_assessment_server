const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema({
    poster: {
        type: String,
        unique: true,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true
    },
    jobType: {
        type: String,
        required: true
    },
    salaryRange: {
        type: String,
        required: true
    },
    appliedCandidates: {
        type: Array,
        default: []
    }
}, { timestamps: true });

module.exports = mongoose.model('Job', JobSchema);
