const userService = require('../../services/user/userService');

exports.getAllUsers = async (req, res) => {
    try {
        const allUsers = await userService.getAllUsers();

        res.status(200).send({ message: 'Get users successful', data: allUsers });
    } catch (error) {
        res.status(401).send({ error: 'Get users failed', message: error.message });
    }
}




