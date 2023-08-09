const { Router } = require("express");
const { AuthRoutes } = require("./auth.routes");
const { JobsRoutes } = require("./job.routes");

const router = Router();

router.use("/auth", AuthRoutes);
router.use("/job", JobsRoutes);

module.exports = {
  AllRoutes: router,
};
