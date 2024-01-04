const {generateAccessToken, generateRefreshToken} = require("../jwt/jwtService");
const User = require("../../models/user");
const bcrypt = require("bcrypt");

exports.login = async (req, res) => {
    const {email, password} = req.body;

    console.log(email, password);

    // Authenticate user
    const user = await User.findOne({ email: email });
    if (!user) {
        throw new Error('Email does not exist');
    }
    // compare password
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
        throw new Error('Password is not correct');
    }

    const userForToken = {
        username: user.username,
        email: user.email
    }

    const accessToken = generateAccessToken(userForToken);
    const refreshToken = generateRefreshToken(userForToken);
    // refreshToken.push(refreshToken);

    return { accessToken: accessToken, refreshToken: refreshToken };
}

exports.signup = async (req, res) => {
    const {username, email, password} = req.body;

    // check if email is taken
    const isEmailTaken = await User.exists({ email: email });
    if (isEmailTaken) {
        throw new Error('Email is already taken');
    }

    // create new user
    await User.create({
        username: username,
        email: email,
        password: bcrypt.hashSync(password, 10)
    });

    const user = {
        username: username,
        email: email
    }

    const accessToken = generateAccessToken(user);
    const refreshToken = generateRefreshToken(user);

    return { accessToken: accessToken, refreshToken: refreshToken };
}

exports.logout = (req, res) => {
    res.send('Logout2');
}
