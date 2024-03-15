const { status } = require("express/lib/response");
const { t } = require("i18next");
const userRepository = require('../../repositories/user.repository')

const login = async (req, res) => {
    const { code, password } = req.body;
    try {
        const authResult = await userRepository.authenticate(code, password);
        if (authResult.error) {
            return res.status(401).json(formatErrorResponse(t('validation_error'),authResult.error));
        }
        res.json(formatResponse(true, t('login_success'), authResult));
    } catch (error) {

        const errorMessage = t('server_error');
        const fullErrorMessage = `${errorMessage}: ${error.message}`;
        console.error(fullErrorMessage);
        res.status(500).json(formatErrorResponse(errorMessage, fullErrorMessage));
    }
};

const logout = async (req, res) => {
    try {
        res.clearCookie('accessToken');
        res.clearCookie('refreshToken');
        res.status(200).json(formatResponse(true,'Logout successful'));
    } catch (error) {
        console.error('Logout error:', error);
        res.status(500).json(formatErrorResponse('Internal server error'));
    }
};

module.exports = {login,logout};