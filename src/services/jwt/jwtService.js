const jwt = require("jsonwebtoken");
const User = require("../../models/User");

const generateAccessToken = (user) => {
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '15s' });
}

const generateRefreshToken = (email) => {
    return jwt.sign(email, process.env.REFRESH_TOKEN_SECRET);
}

const getNewAccessToken = () => {
    const refreshToken = req?.cookies?.refreshToken;

    if (refreshToken === null) throw new Error("Refresh token is null");

    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET,async (err, email) => {
        if (err) throw new Error("Refresh token is not valid");

        const isRefreshTokenExist = await User.exists({ refreshToken: refreshToken });
        if (!isRefreshTokenExist) throw new Error("Refresh token is not valid");

        const user = await User.findOne({ email: email });

        if (!user) throw new Error("User not found");

        user.refreshToken = generateRefreshToken(email);
        await user.save();

        const accessToken = generateAccessToken(user);
        return {accessToken: accessToken};
    })
}
const refreshTokens = [];

module.exports = {
    generateAccessToken,
    generateRefreshToken,
    refreshTokens
}