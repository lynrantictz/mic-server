const { status } = require("express/lib/response");
const { t } = require("i18next");
const employerRepository = require('../repositories/employer.repository')

const register = async (req, res) => {
    req.body.user_id = req.user.userId
    try {
        const registerResult = await employerRepository.register(req.body);
        console.log(registerResult)
        if (registerResult.error) 
        return res.status(401).json(formatErrorResponse(t('validation_error'),registerResult.error));
        res.json(formatResponse(true, t('employeer_registered'), registerResult));
    } catch (error) {
        const errorMessage = 'An error occurred';
        const fullErrorMessage = `${errorMessage}: ${error.message}`;
        res.status(500).json(formatErrorResponse(t('server_error'), fullErrorMessage));
    }
};

module.exports = {register};