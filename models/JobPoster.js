const mongoose = require('mongoose');

const JobPosterSchema = mongoose.Schema({
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
    }
})

module.exports = mongoose.model('JobPoster', JobPosterSchema);