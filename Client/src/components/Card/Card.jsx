import { connect } from 'react-redux';
import style from './Card.module.css'
import { Link } from 'react-router-dom';
import { addFavorite, removeFavorite } from '../Redux/actions';
import { useState, useEffect } from 'react';

function Card({ id, name, status, species, gender, origin, image, onClose, addFavorite, removeFavorite, myFavorites }) {
   //const {name, status, species, gender, origin, image, onClose} = props //destructuring

   const [isFav, setIsFav] = useState(false);

   const handleFavorite = () => {
      if(isFav) {
         setIsFav(false);
         removeFavorite(id);
      } else {
         setIsFav(true);
         addFavorite({ 
            id, 
            name, 
            status, 
            species, 
            gender, 
            origin, 
            image, 
            onClose, 
            addFavorite, 
            removeFavorite 
         });
      }
   };
   
   useEffect(() => {
      myFavorites.forEach((fav) => { //Intentar hacerlo con bucle For
         if(fav.id === id){
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   return ( 
      <div className={style.card}> 
      
        <button className={style.favBtn} onClick={handleFavorite}>
         {isFav ? '❤️' : '🤍'}
        </button>

        <button className={style.closeBtn} onClick={() => { onClose(id) }}>
         X
        </button>
         
        <Link to={`/detail/${id}`} > 
           <button className={style.nameBtn}>{name}</button>
        </Link>

        <div className={style.descriptionCard}>
            <p className={style.text}>Species: {species}</p>
            <p className={style.text}>Gender: {gender}</p>
        </div>
         
        <img className={style.cardImg} src={image} alt='' />

      </div>
  );
};

const mapDispatchToProps = (dispatch) => {
   return {
      addFavorite: (character) => {
         dispatch(addFavorite(character));
      },
      removeFavorite: (id) => {
         dispatch(removeFavorite(id));
      },
   };
};

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites,
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
 
