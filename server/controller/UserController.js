const { Sequelize } = require("sequelize");
const User = require("../model/User");

class UserController {
  async getOne(req, res) {
    const { id } = req.params;
    try {
      const result = await User.findByPk(id);
      if (!result) {
        res.json({ message: `No user found with id ${id}` });
      } else res.json(result);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async createUser(req, res) {
    const { full_name, email, password } = req.body;
    //   console.log(`GRABBING USERNAME FROM BODY: ${email}, ${full_name}`);
    //   console.log(`GRABBING PWD FROM BODY: ${password}`);

    try {
      const user = {
        full_name: full_name,
        email: email,
        password: password,
      };
      await User.create(user);

      res.json({ message: "User created!", user });
    } catch (error) {
      const errors = error.errors[0];

      let errMsg = errors.message;
      let type = errors.type;
      const target_value = errors.value;

      if (errMsg.includes("email must be unique")) {
        errMsg = "User e-mail already registered!";
        res.status(403).json({
          error_message: {
            errMsg,
            target_value,
          },
        });
      } else {
        res.status(500).json({ error_message: { errMsg, type, target_value } });
      }
    }
  }

  async getAll(req, res) {
    try {
      const result = await User.findAll();

      if (result.length === 0) {
        res.status(404).json({ message: "No users in databank!" });
      } else {
        res.status(200).json(result);
      }
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

module.exports = new UserController();
