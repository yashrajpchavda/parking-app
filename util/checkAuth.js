const jwt = require('jsonwebtoken');
const { AuthenticationError } = require('apollo-server-express');

const checkAuth = context => {
    const authHeader = context.req.headers.authorization;

    if (authHeader) {
        const token = authHeader.split('Bearer ')[1];

        if (token) {
            try {
                const user = jwt.verify(
                    token,
                    process.env.JWT_SECRET_KEY || 'very secret key'
                );
                return user;
            } catch (err) {
                throw new AuthenticationError('Invalid/Expired token');
            }
        }

        throw new AuthenticationError(
            "Authentication token must be 'Bearer [token]'"
        );
    }

    throw new AuthenticationError('Authorization header must be provided');
};

const checkAdminAuth = context => {
    const user = checkAuth(context);

    if (!user.isAdmin) {
        throw new AuthenticationError(
            'You are not authorized to perform this action'
        );
    }

    return user;
};

module.exports = {
    checkAuth,
    checkAdminAuth
};
