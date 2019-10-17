module.exports.validateAddUserInput = (
    username,
    displayName,
    email,
    password,
    confirmPassword
) => {
    const errors = {};

    if (username.trim() === '') {
        errors.username = 'Username must not be empty';
    }

    if (displayName.trim() === '') {
        errors.displayName = 'Display name must not be empty';
    }

    if (email.trim() === '') {
        errors.email = 'Email must not be empty';
    } else {
        const regex = /^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/;
        if (!email.match(regex)) {
            errors.email = 'Email must be a valid email address';
        }
    }

    if (password === '') {
        errors.password = 'Password must not be empty';
    } else if (password !== confirmPassword) {
        errors.confirmPassword = 'Passwords must match';
    }

    return {
        errors,
        valid: Object.keys(errors).length < 1
    };
};

module.exports.validateLoginInput = (username, password) => {
    const errors = {};

    if (username.trim() === '') {
        errors.username = 'Username must not be empty';
    }

    if (password === '') {
        errors.password = 'Password must not be empty';
    }

    return {
        errors,
        valid: Object.keys(errors).length < 1
    };
};

module.exports.validateOccupyParkingSpotInput = ({ spotId, carId, userId }) => {
    const errors = {};

    if (!spotId) {
        errors.parkingSpot = 'Parking spot id must be provided';
    }

    if ((carId && !userId) || (userId && !carId)) {
        errors.carOrUser = 'Both car and user ids must be provided';
    }

    return {
        errors,
        valid: Object.keys(errors).length < 1
    };
};
