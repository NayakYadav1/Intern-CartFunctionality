const fs = require('fs');
const path = require('../data/users.json');

const readUsers = () => {
    return JSON.parse(fs.readFileSync(path));
};

const writeUsers = () => {
    fs.writeFileSync(path, JSON.stringify(users, null, 2));
}

module.exports = {
    createUser: (req, res) => {
        const users = readUsers();
        const newUser = { id: Date.now(), ...req.body };
        users.push(newUser);
        writeUsers(users);
        res.status(201).json(newUser)
    }
}