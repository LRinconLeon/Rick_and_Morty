import { useSelector } from "react-redux"
import Card from "../Card/Card";

const Favorites = () => {
    const favorites = useSelector(state=> state.myFavorites);

    return (
        <>
        {favorites?.map(({ id, name, status, gender, image }) => {
            return (
                <Card
                key={id}
                id={id}
                name={name}
                status={status}
                gender={gender}
                image={image}
                />
            );
            })}
        </>
    );
};

export default Favorites;