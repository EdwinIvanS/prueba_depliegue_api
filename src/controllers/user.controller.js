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
  update: async (req, res) => {    
    try {
        const userUpdate = await User.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
          });
          if(userUpdate) return res.status(200).json(userUpdate);
          else return res.status(404).json({ message: "User not found" });
    } catch (error) {
        return res.status(500).json({ message: "Error updated user" });
    }
  },
  delete: async (req, res) => {
    try {
        const userDelete = await User.findByIdAndDelete(req.params.id);
        if(userDelete) return res.status(200).json({ message: "User deleted successfully" });
        else return res.status(404).json({ message: "User not found" });
    } catch (error) {
        return res.status(500).json({ message: "Error updated user" });
    }
  },
};

module.exports = userController;
