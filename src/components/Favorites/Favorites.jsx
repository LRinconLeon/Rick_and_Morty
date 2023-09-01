import Card from "../Card/Card";
import { useDispatch, useSelector } from "react-redux"
import { removeFavorite } from "../Redux/actions";
import { filterCards, orderCards } from "../Redux/actions";
import { useState } from "react";

const Favorites = () => {

    const favorites = useSelector(state=> state.myFavorites);  
    // const mapStateToProps = (state) => {return{myFavorites: state.myFavorites}}
    const dispatch = useDispatch();
    const [aux, setAux] = useState(false);

    const handleRemoveFavorite = (id) => {
        dispatch(removeFavorite(id));
    }

    const handleOrder = (event) => {
        dispatch(orderCards(event.target.value));
        setAux(true);
    }

    const handleFilter = (event) => {
        dispatch(filterCards(event.target.value))
    }

    return (
        <>
        <select onChange={handleOrder}>
            <option value="A">Ascendente</option>
            <option value="D">Descenente</option>
        </select>

        <select onChange={handleFilter}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Genderless">Genderless</option>
            <option value="unknown">unknown</option>
            <option value="allCharacters">All Characters</option>
        </select>

        {favorites?.map(({ id, name, status, gender, image }) => {
            return (
                <Card
                key={id}
                id={id}
                name={name}
                status={status}
                gender={gender}
                image={image}
                onClose={handleRemoveFavorite}
                />
            );
            })}
        </>
    );
};

export default Favorites;  // export default connect(mapStateToProps, null)(Favorites)