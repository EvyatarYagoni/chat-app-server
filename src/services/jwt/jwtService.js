const jwt = require("jsonwebtoken");

const generateAccessToken = (user) => {
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '15s' });
}

const generateRefreshToken = (user) => {
    return jwt.sign(user, process.env.REFRESH_TOKEN_SECRET);
}

const getNewAccessToken = (refreshToken) => {
    if (refreshToken === null) throw new Error("Refresh token is null");
    if (!refreshTokens.includes(refreshToken)) throw new Error("Refresh token is not valid");
    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET,(err, user) => {
        if (err) throw new Error("Refresh token is not valid");
        const accessToken = generateAccessToken({name: user.name});
        return {accessToken: accessToken};
    })
}
const refreshTokens = [];

module.exports = {
    generateAccessToken,
    generateRefreshToken,
    refreshTokens
}