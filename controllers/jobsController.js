const createJob = async (req, res) => {
  res.send("create job");
};

const getAllJobs = async (req, res) => {
  res.send("getAllJobs");
};

const updateJob = async (req, res) => {
  res.send("updateJob");
};
const removeJob = async (req, res) => {
  res.send("removeJob");
};

const showStats = async (req, res) => {
  res.send("showStats");
};


module.exports = {
    createJob,
    getAllJobs,
    updateJob,
    removeJob,
    showStats
}