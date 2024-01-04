const authService = require('../../services/auth/authService');

exports.login = async (req, res) => {
    const tokenObject = await authService.login(req, res); // Get the data from the authService
    res.json(tokenObject);
}

exports.signup = async (req, res) => {
    const tokenObject = await authService.signup(req, res); // Get the data from the authService
    res.json(tokenObject);
}

exports.logout = (req, res) => {
    res.send('Logout2');
}




