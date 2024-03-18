const { status } = require("express/lib/response");
const { t } = require("i18next");
const userRepository = require('../../repositories/user.repository')

const login = async (req, res) => {
    const { code, password } = req.body;
    try {
        const authResult = await userRepository.authenticate(code, password);
        if (authResult.error) 
        return res.status(401).json(formatErrorResponse(t('validation_error'),authResult.error));
        res.json(formatResponse(true, t('login_success'), authResult));
    } catch (error) {
        const errorMessage = 'An error occurred';
        const fullErrorMessage = `${errorMessage}: ${error.message}`;
        res.status(500).json(formatErrorResponse(t('server_error'), fullErrorMessage));
    }
};

const logout = async (req, res) => {
    try {
        res.clearCookie('accessToken');
        res.clearCookie('refreshToken');
        res.status(200).json(formatResponse(true,t('logout_success')));
    } catch (error) {
        console.error('Logout error:', error);
        res.status(500).json(formatErrorResponse(t('server_error')));
    }
};

module.exports = {login,logout};