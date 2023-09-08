import Cards from './components/Cards/Cards.jsx';
import NavBar from './components/navBar/navBar.jsx';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import About from './views/About.jsx';
import Deatil from './views/Deatil.jsx';
import Form from './components/Forms/Forms.jsx';
import Favorites from './components/Favorites/Favorites.jsx';
import { removeFavorite } from './components/Redux/actions.js';
//import ErrorPage from './views/error/errorPage.jsx';

function App() {
   //* HOOKS
   const [characters, setCharacters] = useState([])
   const {pathname} = useLocation();
   const [access, setAccess] = useState(false);
   const navigate = useNavigate();

   useEffect(() => {
      !access && navigate("/");
   }, [access]);

   const emailAddress = "lmrl@gmail.com";
   const password = "larizza19";

   function onSearch(id) {  
   axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
      if (data.name && !characters.find((character) => character.id === data.id)) {
         setCharacters((oldChars) => [...oldChars, data]);
      } else {
         window.alert('¡No hay personajes con este ID!');
      }
   });
   }

   function onClose (id) {
      let deleted = characters.filter((character)=>character.id !==(id))
      setCharacters(deleted);
      removeFavorite(id);
   }

   function login (userData){
      if(userData.emailAddress === emailAddress && userData.password === password){
         setAccess(true);
         navigate("/home");
      } else {
         alert("Usuario incorrecto");
      }
   }

   return (
      <div className='App'> 

         {pathname !== '/' && <NavBar onSearch={onSearch} />}
         
         <Routes>
            <Route path='/' element={<Form login={login} />} />

            <Route path='/home' element={<Cards characters={characters} onClose={onClose} />} />
            
            <Route path='/about' element={<About />} />

            <Route path='/favorites' element={<Favorites />} />

            <Route path='/detail/:id' element={<Deatil />} />

            {/* <Route path='*' element={<ErrorPage />} /> */}
         </Routes>
        
      </div>
   );
}

export default App;
