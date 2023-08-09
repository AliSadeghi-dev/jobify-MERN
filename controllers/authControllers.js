const register = async (req, res) => {
  res.json("register");
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
