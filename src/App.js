import Cards from './components/Cards/Cards.jsx';
import NavBar from './components/navBar/navBar.jsx';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import About from './views/About.jsx';
import Deatil from './views/Deatil.jsx';
import Form from './components/Forms/Forms.jsx';
import Favorites from './components/Favorites/Favorites.jsx';
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

// const URL = 'https://rym2-production.up.railway.app/api';
   // const KEY = '?key=henrym-LRinconLeon';
   // axios(`${URL}/character/${id}/${KEY}`)
   function onSearch(id) {  

   axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
      if (data.name && !characters.find((character) => character.id === data.id)) {
         setCharacters((oldChars) => [...oldChars, data]);
      } else {
         window.alert('¡No hay personajes con este ID!');
      }
   });
   }

   function onClose (id) {
      let deleted = characters.filter((character)=>character.id !==(id))
      setCharacters(deleted)
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
