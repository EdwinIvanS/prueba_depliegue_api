const User = require("../database/model/user");

const userController = {
  create: async (req, res) => {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }
    try {
      const user = new User(req.body);
      await user.save();
      res.status(201).json(user);
    } catch (error) {
      res.status(500).json({ message: "Error creating user" });
    }
  },
  find: (req, res) => {},
  findAll: (req, res) => {},
  update: (req, res) => {},
  delete: (req, res) => {},
};

module.exports = userController;
