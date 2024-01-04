const authService = require('../../services/auth/authService');

exports.login = async (req, res) => {
    try {
        const { accessToken, refreshToken } = await authService.login(req, res); // Destructure tokens from authService response

        // Add both tokens to cookies with HTTPOnly flag for security
        res.cookie('accessToken', accessToken, { httpOnly: true, maxAge: 1000 * 60 * 60 * 24 * 7 }); // 7 days
        res.cookie('refreshToken', refreshToken, { httpOnly: true, maxAge: 1000 * 60 * 60 * 24 * 7 }); // 7 days

        // Respond with a success message or appropriate status
        res.status(200).send({ message: 'Login successful' });
    } catch (error) {
        // Handle errors appropriately, such as sending an error status or message
        res.status(500).send({ error: 'Login failed' });
    }
};


exports.signup = async (req, res) => {
    const { accessToken, refreshToken } = await authService.signup(req, res); // Destructure tokens from authService response

    // Add both tokens to cookies with HTTPOnly flag for security
    res.cookie('accessToken', accessToken, { httpOnly: true, maxAge: 1000 * 60 * 60 * 24 * 7 }); // 7 days
    res.cookie('refreshToken', refreshToken, { httpOnly: true, maxAge: 1000 * 60 * 60 * 24 * 7 }); // 7 days

    // Respond with a success message or appropriate status
    res.status(200).send({ message: 'Signup successful' });
}

exports.logout = (req, res) => {
    // Clear cookies
    res.clearCookie('accessToken');
    res.clearCookie('refreshToken');

    // Respond with a success message or appropriate status
    res.status(200).send({ message: 'Logout successful' });
}




