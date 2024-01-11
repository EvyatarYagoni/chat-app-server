const jwt = require('jsonwebtoken');

const verifyJWTMiddleware = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const isBarer = authHeader?.startsWith('Barer ');

    if (!authHeader || !isBarer) {
        return res.status(401).send({ message: 'Unauthorized' });
    }

    const token = authHeader?.split(' ')[1];

    if (!token) {
        return res.status(401).send({ message: 'Unauthorized' });
    }

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) {
            return res.status(401).send({ message: 'Unauthorized' });
        }
        req.user = user;
        next();
    });

};

module.exports = verifyJWTMiddleware;
