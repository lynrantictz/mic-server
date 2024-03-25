const { Employer, sequelize } = require('../models');

const getAll = async () => {
    try {
        return await Employer.findAll()
    } catch (error) {
        throw new Error(`Error fetching Employer: ${error}`);
    }
};

const register = async (inputs) => {
    try {
         const employee = await sequelize.transaction (async (t) => {
            return await Employer.create({
                user_id: inputs.user_id,
                employer_type_id: inputs.employer_type_id,
                country_id: inputs.country_id,
                tin: inputs.tin,
                name: inputs.name,
                address: inputs.address,
                phone: inputs.phone,
            }, { transaction: t })
        });
        return {employee}
    } catch (error){
        console.log(error)
    }
}

module.exports = { register };
