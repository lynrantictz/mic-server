const { check, validationResult } = require('express-validator');
const { Employer } = require('../models');

const employeeValidationHandler = [
  check('employer_type_id').exists().withMessage('Employer type ID is required'),
  check('country_id').exists().withMessage('Country ID is required'),
  check('name').exists().withMessage('Name is required').isString(),
  check('address').exists().withMessage('Address is required').isString(),
  check('phone').exists().withMessage('Phone is required').isString(),
  check('tin')
    .exists().withMessage('TIN is required')
    .custom(async (value, { req }) => {
      const employer = await Employer.findOne({ where: { tin: value } });
      if (employer) {
        throw new Error('TIN must be unique');
      }
      return true;
    }),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json(formatErrorResponse('Validation Error',errors.array()));
    }
    next();
  }
];

module.exports = { employeeValidationHandler };
