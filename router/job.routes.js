const { createJob, getAllJobs, removeJob, showStats, updateJob } = require('../controllers/jobsController'); 

const {Router} = require('express')
const router = Router();


router.route("/").post(createJob).get(getAllJobs);
router.route("/stats").get(showStats);
router.route('/:id').delete(removeJob).patch(updateJob);



module.exports = {
    JobsRoutes:router
};
