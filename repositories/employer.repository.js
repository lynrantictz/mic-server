const res = require('express/lib/response');
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
         const employer = await sequelize.transaction (async (t) => {
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
        return {employer}
    } catch (error){
        console.log(error)
    }
}

const updateStatus = async (uuid) => {
    try {
        return {uuid}
        // const employerQuery = await Employer.find({
        //     where:{ uuid: uuid }
        // })
        // if (!employerQuery) return { error: t('employeer_not_found') };
        // res.send(employerQuery)
        // const employer = await sequelize.transaction (async (t) => {
        //     // return await employerQuery.update({
        //     //     isActive: employerQuery.isActive == true ? false : true
        //     // },{ transaction: t })
        // })
        // return {employer};
    } catch (error) {
        
    }
}

module.exports = { register, updateStatus };
