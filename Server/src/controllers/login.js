const { User } = require('../DB_connection');

module.exports = async (req, res) => {
    const { email, password } = req.query;

    try {
        if (!email || !password) return res.status(400).send('Faltan datos');
        
        const foundEmail = await User.findOne({where: { email }}); //devuelve true o false
        if(!foundEmail) return res.status(404).send('Usuario no encontrado');

        return foundEmail.password === password
        ? res.json({ access: true })
        : res.status(403).json({error: error.message});
    } catch (error) {
        return res.status(500).json({error: error.message});
    }
};