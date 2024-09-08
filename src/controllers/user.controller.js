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
  find: async (req, res) => {
    try {
        const users = await User.findById(req.params.id);
        if (!users) return res.status(404).json({ message: "User not found" });
        return res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: "Error querying user" });
    }
  },
  findAll: async(req, res) => {
    try {
        const user = await User.find();
        if (!user) return res.status(404).json({ message: "User not found" });
        return res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: "Error querying user" });
    }
  },
  update: (req, res) => {},
  delete: (req, res) => {},
};

module.exports = userController;
