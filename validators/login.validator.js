const { check, validationResult } = require('express-validator');

const loginValidationHandler = [
    check('code').notEmpty().withMessage('Code is required'),
    check('password').notEmpty().withMessage('Password is required'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json(formatErrorResponse('Validation Error',errors.array()));
        }
        next();
    }
];

module.exports = { loginValidationHandler };
