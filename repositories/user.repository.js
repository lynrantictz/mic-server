const { User, UserType } = require('../models');
const bcrypt = require('bcryptjs');
const { generateAccessToken, generateRefreshToken } = require('../services/auth.service');

const getAll = async () => {
    try {
        return await User.findAll()
    } catch (error) {
        throw new Error(`Error fetching users: ${error}`);
    }
};

const findByCode = async (code) => {
    try {
        return await User.findOne({ where: { code: code }})
    } catch (error) {
        throw new Error(`Error fetching users: ${error}`);
    }
};

const authenticate = async (code, password) => {
    try {
        const user = await User.findOne({
            where: { code: code },
            include: [{ model: UserType, as: 'userType' }]
        });
        if (!user) {
            return { error: 'User not found' };
        }

        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return { error: 'Wrong password' };
        }

        // If user and password are valid, generate tokens
        const accessToken = generateAccessToken(user);
        const refreshToken = generateRefreshToken(user);

        return { user, accessToken, refreshToken };
    } catch (error) {
        throw new Error(`Error authenticating user: ${error}`);
    }
};


module.exports = { getAll, findByCode, authenticate };
