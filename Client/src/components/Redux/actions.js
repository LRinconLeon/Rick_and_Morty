import { ADD_FAVORITE, REMOVE_FAVORITE, FILTER_CARDS, ORDER_CARDS } from "./actions-types";
import axios from 'axios';

export const addFavorite = (character) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav';

    return async (dispatch) => {
        try {
            const {data} = await axios.post(endpoint, character);  

            if(!data.length) throw Error('No favorites found'); //Si viene vacio lanza error

            return dispatch({
                type: ADD_FAVORITE,
                payload: data, 
            });

        } catch (error) {
            console.log(error.message);
        }
    };
}

export const removeFavorite = (id) => {
    const endpoint = `http://localhost:3001/rickandmorty/fav/${id}`; 
    return async (dispatch) => { 
        try {
            const { data } = await axios.delete(endpoint);

            return dispatch({
                type: REMOVE_FAVORITE,
                payload: data,
            });

        } catch (error) {
            console.log(error.message);
        }
    };
}

export const filterCards = (gender) => {
    return { type: FILTER_CARDS, payload: gender };
}

export const orderCards = (order) => {
    return { type: ORDER_CARDS, payload: order};
};



// PRIMERA MODIFICACION:

// export const addFavorite = (character) => {
//     const endpoint = 'http://localhost:3001/rickandmorty/fav';
//     return (dispatch) => {
//        axios.post(endpoint, character)  
//        .then(({ data }) => {
//             return dispatch({
//                 type: ADD_FAVORITE,
//                 payload: data,
//           });
//        });
//     };
// };

// export const removeFavorite = (id) => {
//     //return { type: REMOVE_FAVORITE, payload: id };
//     const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
//     return (dispatch) => { 
//         axios.delete(endpoint)
//         .then(({ data }) => {
//             return dispatch({
//                 type: REMOVE_FAVORITE,
//                 payload: data,
//             });
//         });
//     }
// };