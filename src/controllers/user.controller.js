const User = require("../database/model/user");

const userController = {
    create : (req, res) => {},
    find : async (req, res) => {
        try {
            const user = await User.findById(req.params.id);
            if(user) return res.status(200).json(user); 
            return res.status(404).json({ message: "User not found" });
        } catch (error) {
            return res.status(500).json({ message: "Error querying user" });
        }
    },
    findAll : async (req, res) => {
        try {
            const users = await User.find();
            return res.status(200).json(users); 
        } catch (error) {
            return res.status(500).json({ message: "Error querying users" });
        }
    },
    update : (req, res) => {},
    delete : (req, res) => {},
}

module.exports = userController;