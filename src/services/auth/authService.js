const {generateAccessToken, generateRefreshToken} = require("../jwt/jwtService");

exports.login = (req, res) => {
    res.send('Login3');

    // Authenticate user
    console.log(req.body, "sdffdssdfdafs");

    res.send(req.body);

    const username = req.body.username;
    const password = req.body.password;

    const user = {
        username: username,
    }

    const accessToken = generateAccessToken(user);
    const refreshToken = generateRefreshToken(user);
    refreshToken.push(refreshToken);

    return { accessToken: accessToken, refreshToken: refreshToken };
}

exports.signup = (req, res) => {
    res.send('Signup2');
}

exports.logout = (req, res) => {
    res.send('Logout2');
}
