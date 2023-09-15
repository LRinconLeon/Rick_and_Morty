let myFavorites = [];

const postFav = (req, res) => {
    const character = req.body; 

    myFavorites.push(character)

    return res.status(200).json(myFavorites);
};

const deleteFav = (req, res) => {
    const { id } = req.params;
    
    myFavorites = myFavorites.filter((favorite) => Number(favorite.id) !== +id);

    return res.status(200).json(myFavorites);
};

module.exports = { postFav, deleteFav };

// RECAPITULACION:

// En deleteFav se tiene que modificar el array original (myFavorites) directamente y no hacer una constante extra
// para que asi no suceda el bug de poner favorito y cuando lo quites siga ahi. Por eso te marca la hw no declararla
// como constante sino como let porque se modificara.
// Esta seria la constates extra en donde si sucederia el bug:

// const characterFiltered = myFavorites.filter((favorite) => favorite.id !== +id);
// return res.status(200).json(myFavorites);