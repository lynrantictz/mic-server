const { UserType } = require('../models');

const getAll = async () => {
    try {
        return await UserType.findAll()
    } catch (error) {
        throw new Error(`Error fetching users: ${error}`);
    }
};

module.exports = { getAll };
