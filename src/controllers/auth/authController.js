const authService = require('../../services/auth/authService');

exports.login = (req, res) => {
    const tokenObject = authService.login(req, res); // Get the data from the authService
    res.json(tokenObject);
}

exports.signup = (req, res) => {
    res.send('Signup2');
}

exports.logout = (req, res) => {
    res.send('Logout2');
}




