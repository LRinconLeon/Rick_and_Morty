import Cards from './components/Cards/Cards.jsx';
import NavBar from './components/navBar/navBar.jsx';
import Form from './components/Forms/Forms.jsx';
import Favorites from './components/Favorites/Favorites.jsx';
import About from './views/About.jsx';
import Deatil from './views/Deatil.jsx';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { removeFavorite } from './components/Redux/actions.js';

//import ErrorPage from './views/error/errorPage.jsx';

const URL = 'http://localhost:3001/rickandmorty/login';

function App() {
   //* HOOKS
   const [characters, setCharacters] = useState([])
   const {pathname} = useLocation();
   const [access, setAccess] = useState(false);
   const navigate = useNavigate();

   useEffect(() => {
      !access && navigate('/');
   }, [access]);

// NO FUNCIONA CON LA NUEVA ACTUALIZACION:

   const login = async (userData) => {  
      try {
         const { email, password } = userData;
         const { data } = await axios(URL + `?email=${email}&password=${password}`);
         const { access } = data;

         setAccess(access);
         access && navigate('/home');
   
      } catch (error) {
         console.log(error.message);
      }
   }

//  SOLO FUNCIONA CON ESTA: 

//    const emailAddress = "lmrl@gmail.com";
//    const password = "larizza19";
   
//    const login = (userData) => {
//       if(userData.emailAddress === emailAddress && userData.password === password){
//          setAccess(true);
//          navigate("/home");
//       } else {
//          alert("Usuario incorrecto");
//       }  }

   const onSearch = async (id) => {  
      try {
         const { data } = await axios(`http://localhost:3001/rickandmorty/character/${id}`);

         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         };

      } catch (error) {
         alert('¡No hay personajes con este ID!');
      }
      
   }

   const onClose = (id) => {
      const characterFiltered = characters.filter(character => 
         Number(character.id) !== Number(id))
         setCharacters(characterFiltered) 
         removeFavorite(id); //esto es para poder remover fav con la x
   }

   return (
      <div> 

         {pathname !== '/' && <NavBar onSearch={onSearch} setAccess={setAccess}/>}
         
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


// MODIFICACION 2:

   // const onSearch = (id) => {  
   // axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
   //    if (data.name && !characters.find((character) => character.id === data.id)) {
   //       setCharacters((oldChars) => [...oldChars, data]);
   //    } else {
   //       window.alert('¡No hay personajes con este ID!');
   //    }
   // });
   // }


   //    const login = (userData) => {  
   //    const { email, password } = userData;
   //    axios(URL + `?email=${email}&password=${password}`)
   //    .then(response => response.data)
   //    .then((data) => {
   //       const { access } = data;
   //       setAccess(access);
   //       access && navigate('/home');
   //    });
   // }

// MODIFICAION 1:

   // const emailAddress = "lmrl@gmail.com";
   // const password = "larizza19";
   
   // const login = (userData) => {
   //    if(userData.emailAddress === emailAddress && userData.password === password){
   //       setAccess(true);
   //       navigate("/home");
   //    } else {
   //       alert("Usuario incorrecto");
   //    }
   // }
