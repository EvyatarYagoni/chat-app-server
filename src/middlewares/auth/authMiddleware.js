const jwt = require('jsonwebtoken');

const authenticateTokenMiddleware = (req, res, next) => {
    const accessToken = req.cookies.accessToken;

    if (!accessToken) {
        console.log('No access token');
        return res.sendStatus(401);
    }

    jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) {
            console.log(err);
            return res.sendStatus(403);
        }

        req.user = user;

        console.log('user', user);



        next();
    });
};

module.exports = authenticateTokenMiddleware;
