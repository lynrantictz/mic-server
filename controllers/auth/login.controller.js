const { status } = require("express/lib/response");
const userTypeRepo = require('../../repositories/userType.repository')

const login = async (req, res) => {
    try {
        const { code, password } = req.body;
        const users = await userTypeRepo.getAll();
        res.status(200).json(users);
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
module.exports = {login};