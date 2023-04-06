// Antes de importar se debe instalar en la consola: npm install styled-components
// Se debe importar styled
import { useState } from "react";
import style from "./SearchBar.module.css";

// const Buttons = styled.button` 
//    border-radius: 5px;
//    margin: 10px;
//    padding: 5px;
//    background-color: white;
//    width: 100px;
//    height: 40px;
//    font-size: 20px;
//    font-weight: bold;
//    box-shadow: 5px 5px 5px 0px lightgray;
// `;

// Dentro de props viene la función onSearch => {onSearch} que viene de Nav y a su vez de App

export default function SearchBar({onSearch}) {

   const [id, setId] = useState("");   // El valor inicial de la caja de input es vacio ""

   const handleChange = (event) => {
      setId(event.target.value);        // Cuando cambie el valor de la caja de input setea el id
   };
   // (event.target.value) es el id que se digita en la caja y setId modifica el id existente

   return (
      <div className={style.bar}>
         <input type='search' onChange={handleChange} className={style.searchInput} placeholder=" id personaje"/> {/*Cada vez que cambie el input ejecuta la función handleChange*/}
         <button
            className={style.searchButton}
            onClick={() => {                           // Cuando se le da click al boton debe ejecutar una función que ejecute onSearch
               onSearch(id);
            }}
         >
            Agregar
         </button> 
      </div>
   );
}

