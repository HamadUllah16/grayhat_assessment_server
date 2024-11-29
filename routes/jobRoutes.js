const router = require('express').Router();
const { addJob, getAllJobs, applyToJob } = require('../controllers/jobController');


router.post('/create-job-post', addJob)
router.get('/all-job-posts', getAllJobs)
router.post('/apply-to-job', applyToJob)


module.exports = router;