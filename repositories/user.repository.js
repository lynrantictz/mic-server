const { User, UserType, Role, Permission } = require('../models');
const bcrypt = require('bcryptjs');
const { generateAccessToken, generateRefreshToken } = require('../services/auth.service');

/**
 * Get Authenticated User with all required attributes
 * @param {*} id 
 * @returns 
 */
const getAuthUser = async (id) => {
    try {
        return await User.findOne({
            attributes: ['code', 'userName','isActive'],
            where: { id: id },
            include: [
                { 
                    model: UserType, 
                    as: 'userType',
                    attributes: ['name'] 
                },
                { 
                    model: Role,
                     as: 'roles',
                     attributes: ['name'],
                     through: { attributes: [] }
                },
                { 
                    model: Permission,
                     as: 'permissions',
                     attributes: ['name'],
                     through: { attributes: [] }
                }
            ]
        });
    } catch (error) {
        throw new Error(`Error fetching user: ${error}`);
    }
}

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
        const userCheck = await User.findOne({
            where: { code: code },
        });
        
        if (!userCheck) {
            return { error: 'User not found' };
        }

        const passwordMatch = await bcrypt.compare(password, userCheck.password);
        if (!passwordMatch) {
            return { error: 'Wrong password' };
        }

        const accessToken = generateAccessToken(userCheck);
        const refreshToken = generateRefreshToken(userCheck);

        const user = await getAuthUser(userCheck.id)

        return { user, accessToken, refreshToken };
    } catch (error) {
        throw new Error(`Error authenticating user: ${error}`);
    }
};


module.exports = { getAll, findByCode, authenticate };
