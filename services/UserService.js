const fs = require('fs');
const path = require('path');

class UserService {
    constructor() {
        this.filePath = path.join(__dirname, '../data/users.json');
    }

    // Read all users
    getUsers() {
        const data = fs.readFileSync(this.filePath, 'utf-8');
        return JSON.parse(data);
    }

    // Add a new User
    addUser(user) {
        const users = this.getUsers();
        user.id = users.length + 1;
        users.push(user);
        fs.writeFileSync(this.filePath, JSON.stringify(users, null, 2));
        return user;
    }
}

module.exports = new UserService();