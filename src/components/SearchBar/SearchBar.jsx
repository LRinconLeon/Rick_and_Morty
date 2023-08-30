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

   return (
      <div className={style.buscador}>
         <input type='search' className={style.imput} placeholder="Buscar personaje" value={id} onChange={handleChange}/> 
         <button className={style.btn} onClick={() => onSearch(id)}>Agregar</button>
      </div>
   );
}
