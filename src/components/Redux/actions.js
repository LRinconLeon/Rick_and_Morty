export const ADD_FAVORITE = "ADD_FAV";
export const REMOVE_FAVORITE ="REMOVE_FAV";

export const addFavorite = (character) => {
    return { type: ADD_FAVORITE, payload: character };
};

export const removeFavorite = (id) => {
    return { type: REMOVE_FAVORITE, payload: id };
};