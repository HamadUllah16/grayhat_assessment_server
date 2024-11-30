const Job = require("../models/Job");


async function addJob(req, res) {
    const { email, title, company, jobType, salaryRange } = req.body;

    try {
        if (email, company, jobType, salaryRange) {
            const job = await Job.create({
                poster: email,
                title,
                company,
                jobType,
                salaryRange
            });
            console.log('Job Post Created: ', job)
            return res.status(200).json({ message: 'Job Posted', job })
        }
        return res.status(400).json({ message: 'Parameters required: title, company, jobType, salaryRange' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error.', error })
    }
}

async function getAllJobs(req, res) {
    try {
        const allJobPosts = await Job.find({});
        if (allJobPosts) {
            console.log("All Jobs Fetched: ".allJobPosts)
            return res.status(200).json({ message: 'All Jobs Fetched.', allJobPosts });
        }
        return res.status(301).json({ message: "No jobs found." })
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: 'Internal Server Error', error })
    }

}

async function applyToJob(req, res) {
    const { jobId, name, email } = req.body;
    try {
        if (jobId, name, email) {
            const job = await Job.findById(jobId);
            if (jobId) {
                job.appliedCandidates.push({
                    name,
                    email
                })
                await job.save();
                console.log('Worker applied to job: ', job._id, { name, email })
                return res.status(200).json({ message: "Workder apply successful.", jobId, name, email })
            }
            return res.status(404).json({ message: "Job not found." })
        }
        return res.status(400).json({ message: 'Missing parameters.' })
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: "Internal Server Error", error })
    }
}


module.exports = { addJob, getAllJobs, applyToJob }