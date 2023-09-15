import { useState } from "react";
import style from "./SearchBar.module.css"

export default function SearchBar(props) {
   const {onSearch} = props;
   const [id, setId] = useState("");

   function handleChange (event){
      event.preventDefault();
      let input = event.target.value 
      setId(input)
   }

   function handleKeyPress(event) {
      if (event.key === "Enter") {
         onSearch(id); // Llama a la función onSearch cuando se presiona "Enter"
         setId(""); // Borra el contenido del campo de entrada
      }
   }

  function handleButtonClick() {
    onSearch(id); // Llama a la función onSearch cuando se hace clic en el botón
    setId(""); // Borra el contenido del campo de entrada
   }


   return (
      <div className={style.buscador}>
         <input 
         type='search' 
         className={style.imput} 
         placeholder="Please insert ID" 
         value={id} 
         onChange={handleChange}
         onKeyPress={handleKeyPress}
         /> 

         <button className={style.btn} onClick={handleButtonClick}>Search</button>
         
      </div>
   );
}
