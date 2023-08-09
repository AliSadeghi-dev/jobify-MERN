const userModel = require("../models/User");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError } = require("../errors/index");

const register = async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    throw new BadRequestError("please provide all values");
  }
  const userAlreadyExist = await userModel.findOne({ email });
  if (userAlreadyExist) {
    throw new BadRequestError("Email already in use.");
  }
  const user = await userModel.create({ name, email, password });
  const token = user.createJWT();
  res.status(StatusCodes.OK).json({
    user: {
      email: user.email,
      lastName: user.lastName,
      location: user.location,
      name: user.name,
    },

    location: user.location,
  });
};

const login = async (req, res) => {
  res.json("login");
};

const updateUser = async (req, res) => {
  res.json("updateUser");
};

module.exports = {
  register,
  login,
  updateUser,
};
