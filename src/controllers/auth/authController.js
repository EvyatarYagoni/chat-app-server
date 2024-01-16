const authService = require('../../services/auth/authService');
const {asyncValidateData} = require("../../validations/validationUtils");
const loginRequestSchema = require("../../validations/requests/loginRequestValidation");
const signupRequestSchema = require("../../validations/requests/signupRequestValidation");
const jwtService = require("../../services/jwt/jwtService");

exports.login = async (req, res) => {
    try {
        await asyncValidateData(req.body, loginRequestSchema);

        const { accessToken, refreshToken } = await authService.login(req, res); // Destructure tokens from authService response

        // Add both tokens to cookies with HTTPOnly flag for security
        // res.cookie('accessToken', accessToken, { httpOnly: true, maxAge: 1000 * 60 * 60 * 24 * 7 }); // 7 days
        res.cookie('refreshToken', refreshToken, { httpOnly: true, maxAge: 1000 * 60 * 60 * 24 * 7 }); // 7 days

        // Respond with a success message or appropriate status
        res.status(200).send({ message: 'Login successful', accessToken });
    } catch (error) {
        // Handle errors appropriately, such as sending an error status or message
        res.status(500).send({ error: 'Login failed', message: error.message });
    }
};


exports.signup = async (req, res) => {
    try {
        await asyncValidateData(req.body, signupRequestSchema);

        const {accessToken, refreshToken} = await authService.signup(req, res); // Destructure tokens from authService response

        // Add both tokens to cookies with HTTPOnly flag for security
        // res.cookie('accessToken', accessToken, {httpOnly: true, maxAge: 1000 * 60 * 60 * 24 * 7}); // 7 days
        res.cookie('refreshToken', refreshToken, {httpOnly: true, maxAge: 1000 * 60 * 60 * 24 * 7}); // 7 days

        // Respond with a success message or appropriate status
        res.status(200).send({message: 'Signup successful', accessToken});
    } catch (error) {
        // Handle errors appropriately, such as sending an error status or message
        res.status(500).send({error: 'Signup failed', message: error.message});
    }
}

exports.logout = async (req, res) => {
    try {
        await authService.logout(req, res);

        // Respond with a success message or appropriate status
        res.status(200).send({ message: 'Logout successful' });
    } catch (error) {
        res.status(500).send({ error: 'Logout failed', message: error.message });
    }
}

exports.refreshToken = async (req, res) => {
    try {
        const {accessToken} = await jwtService.refreshToken(req);

        // Respond with a success message or appropriate status
        res.status(200).send({ message: 'Refresh successful', accessToken });
    } catch (error) {
        res.status(401).send({ error: 'Refresh failed', message: error.message });
    }
}

exports.getUser = async (req, res) => {
    try {
        console.log('req.user', req.user);
        const user = await authService.getUser(req.user.email);

        // Respond with a success message or appropriate status
        res.status(200).send({ message: 'Get user successful', user });
    } catch (error) {
        res.status(401).send({ error: 'Get user failed', message: error.message });
    }
}




