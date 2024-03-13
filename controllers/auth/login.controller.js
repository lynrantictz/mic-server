const { status } = require("express/lib/response");
const userTypeRepo = require('../../repositories/userType.repository')
const userRepository = require('../../repositories/user.repository')
const bcrypt = require('bcryptjs');
const { generateAccessToken, generateRefreshToken } = require('../../services/auth.service');

const login = async (req, res) => {
    const { code, password } = req.body;
    try {
        const authResult = await userRepository.authenticate(code, password);
        if (authResult.error) {
            // If authentication failed, return the error message
            return res.status(401).json(formatResponse(false, authResult.error, {}));
        }
        // If authentication succeeded, return tokens
        res.json(formatResponse(true, 'Login Successfully', authResult));
    } catch (error) {
        res.status(500).json(formatResponse(false, 'Internal server error. '+ error, {}));
    }
};

const logout = async (req, res) => {
    try {
        const { code, password } = req.body;
        const users = await userTypeRepo.getAll();
        res.status(200).json(users);
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = {login,logout};