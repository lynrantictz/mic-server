const { status } = require("express/lib/response");

const login = (req, res) => {
    const {code, password} = req.body
    
    res.json(code).status(200);
}

module.exports = {login};