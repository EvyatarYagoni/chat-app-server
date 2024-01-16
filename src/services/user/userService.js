const User = require("../../models/user");

exports.getAllUsers = async () => {
    return User.find();
}
