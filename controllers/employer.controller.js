const { status } = require("express/lib/response");
const { t } = require("i18next");
const employerRepository = require('../repositories/employer.repository')

const register = async (req, res) => {
    req.body.user_id = req.user.userId
    try {
        const registerResult = await employerRepository.register(req.body);
        if (registerResult.error) 
        return res.status(401).json(formatErrorResponse(t('validation_error'),registerResult.error));
        res.json(formatResponse(true, t('employeer_registered'), registerResult));
    } catch (error) { 
        const errorMessage = 'An error occurred';
        const fullErrorMessage = `${errorMessage}: ${error.message}`;
        res.status(500).json(formatErrorResponse(t('server_error'), fullErrorMessage));
    }
};

const updateStatus = async (req, res) => {
    try {
        const updateResult = await employerRepository.updateStatus(req.params.uuid);
        if (updateResult.error) 
        return res.status(401).json(formatErrorResponse(t('validation_error'),updateResult.error));
        res.json(formatResponse(true, t('status_update'), registerResult));
    } catch (error) { 
        const errorMessage = 'An error occurred';
        const fullErrorMessage = `${errorMessage}: ${error.message}`;
        res.status(500).json(formatErrorResponse(t('server_error'), fullErrorMessage));
    }
};

module.exports = {register, updateStatus};