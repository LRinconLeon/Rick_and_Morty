const users = require('../utils/users')

const login = (req, res) => { 
    const { email, password } = req.query;

    const userFound = users.find((user) => 
    user.email === email && user.password === password)

    return userFound 
    ? res.status(200).json({ access: true }) 
    : res.status(404).json({ access: false }); 
    
}

module.exports = { login };



    //deberia de ser 404

    // if(userFound) return res.status(200).json({access: true})
    // return res.status(200).json({ access: false })
      