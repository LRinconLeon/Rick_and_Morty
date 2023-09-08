import { ADD_FAVORITE, REMOVE_FAVORITE, FILTER_CARDS, ORDER_CARDS } from "./actions-types"

const initialState = {
    myFavorites: [],
    allCharacters: [],
};

const rootReducer = (state = initialState, action) => {
    switch (action.type){
        case ADD_FAVORITE:
            return {
                ...state,
                myFavorites: [...state.allCharacters, action.payload],
                allCharacters: [...state.allCharacters, action.payload],
            };

        case REMOVE_FAVORITE:
            return {
                ...state,
                myFavorites: state.myFavorites.filter(
                    (char) => char.id !== action.payload   // *?*
                ),
            };
        
        case FILTER_CARDS:
            const allCharactersFiltered = state.allCharacters.filter(character => //Recuerda que filter crea un array nuevo, por lo tanto no modificara el original
                character.gender === action.payload)
            return {
                ...state,
                myFavorites: 
                action.payload === 'allCharacters'
                ? [...state.allCharacters]
                : allCharactersFiltered
            } 
        
        case ORDER_CARDS:
            const allCharactersCopy = [...state.allCharacters];
            return{
                ...state,
                myFavorites:
                    action.payload === 'A' 
                    ? allCharactersCopy.sort((a, b) => a.id - b.id) //Recuerda: sort ordena los elementos
                    : allCharactersCopy.sort((a, b) => b.id - a.id)
            }

        default:
            return { ...state };
    }
};

export default rootReducer;
