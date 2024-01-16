const jwt = require("jsonwebtoken");
const User = require("../../models/user");

const generateAccessToken = (user) => {
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1d' });
}

const generateRefreshToken = (email) => {
    return jwt.sign(email, process.env.REFRESH_TOKEN_SECRET);
}

const refreshToken = async (req) => {
    const refreshToken = req?.cookies?.refreshToken;

    if (refreshToken === null) throw new Error("Refresh token is null");

    return jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET,async (err, email) => {
        if (err) throw new Error("Refresh token is not valid");

        const isRefreshTokenExist = await User.exists({ refreshToken: refreshToken });
        if (!isRefreshTokenExist) throw new Error("Refresh token is not valid");

        const user = await User.findOne({ email: email });

        if (!user) throw new Error("User not found");

        user.refreshToken = generateRefreshToken(email);
        await user.save();

        const accessToken = generateAccessToken({username: user.username, email: user.email, id: user._id});

        console.log('accessToken222222', accessToken);
        return {accessToken: accessToken};
    })
}

module.exports = {
    generateAccessToken,
    generateRefreshToken,
    refreshToken
}