const {Router} = require('express');
const { register, login, updateUser } = require('../controllers/authControllers');

const router = Router();

router.route('/register').post(register);
router.route('/login').post(login);
router.route("/update").patch(updateUser);

module.exports = {
  AuthRoutes: router,
};