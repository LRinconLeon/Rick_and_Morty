const { Favorite } = require('../DB_connection');

module.exports = async(req, res) => {
    const { id } = req.params;
    try {
        const character = await Favorite.findByPk(id);
        await character.destroy();

        const allFavorites = await Favorite.findAll();
        return res.json(allFavorites)
    } catch (error) {
        return res.status(500).json({error: error.message});
    }
};

