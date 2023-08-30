import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const Deatil = () => {
    const {id} = useParams();

    const [character, setCharacter] = useState({});
    
   // const URL = 'https://rym2-production.up.railway.app/api';
   // const KEY = '?key=henrym-LRinconLeon';
   // axios(`${URL}/character/${id}/${KEY}`)

    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
            if (data.name) {
                setCharacter(data);
            } else {
                window.alert('No hay personajes con ese ID');
            }
        });
        return setCharacter({});
    }, [id]);

    return (
        <div>
            {character.name ? (
                <>
                <img src = {character.image} alt=''/>
                <h2>Name: {character.name}</h2>
                <h2>Status: {character.status}</h2>
                <h2>Species: {character.species}</h2>
                <h2>Gender: {character.gender}</h2>
                <h2>Origin: {character.origin?.name}</h2> 
                </>
            ) : (
                <h3>Loading...</h3>
            )}
        </div>
    )
}
//linea 30: se le pone ? como para hacer una pausa, entra a origin, pausa, busca name. Sino a veces te dara undefine.
export default Deatil;