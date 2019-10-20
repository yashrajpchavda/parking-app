module.exports.validateAddUserInput = (
    displayName,
    email,
    password,
    confirmPassword
) => {
    const errors = {};

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

module.exports.validateLoginInput = (email, password) => {
    const errors = {};

    if (email.trim() === '') {
        errors.email = 'Email must not be empty';
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
        errors.parkingSpot = 'Parking spot must be provided';
    }

    if (!carId) {
        errors.car = 'Car must be provided';
    }

    if (!userId) {
        errors.user = 'User must be provided';
    }

    return {
        errors,
        valid: Object.keys(errors).length < 1
    };
};

module.exports.validateReleaseParkingSpotInput = ({ spotId }) => {
    const errors = {};

    if (!spotId) {
        errors.parkingSpot = 'Parking spot id must be provided';
    }

    return {
        errors,
        valid: Object.keys(errors).length < 1
    };
};

module.exports.validateCreateCarInput = ({ name, plate }) => {
    const errors = {};

    if (!name || name.trim() === '') {
        errors.name = 'Please provide valid car name';
    }

    if (!plate || plate.trim() === '') {
        errors.plate = 'Please provide valid car plate';
    }

    return {
        errors,
        valid: Object.keys(errors).length < 1
    };
};

module.exports.validateAssignCarInput = ({ carId, userId }) => {
    const errors = {};

    if (!carId || carId.trim() === '') {
        errors.car = 'Please provide a valid car id';
    }

    if (!userId || userId.trim() === '') {
        errors.user = 'Please provide valid user id';
    }

    return {
        errors,
        valid: Object.keys(errors).length < 1
    };
};
