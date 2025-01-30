const UserService = require('../services/UserService');

class userController {
    // Get all user
    getUsers(req, res) {
        try {
            const users = UserService.getUsers();
            res.json(users);
        } catch(error) {
            res.status(500).json({ message: error.message });
        }
    }

    // Add a user
    addUser(req, res) {
        try{
            const newUser = UserService.addUser(req.body);
            res.status(201).json(newUser);
        } catch(error) {
            res.status(500).json({ message: error.message });
        }
    }
}

module.exports = new userController();