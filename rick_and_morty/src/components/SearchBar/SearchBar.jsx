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

// Dentro de props viene la función onSearch => {onSearch} que viene del padre App

export default function SearchBar({onSearch}) {

   const [id, setId] = useState("");

   const handleChange = (event) => {
      setId(event.target.value);
   };
   // (event.target.value) es el id que se digita en la caja y setId modifica el id existente

   return (
      <div className={style.bar}>
         <input type='search' onChange={handleChange} className={style.searchInput} />
         <button
            className={style.searchButton}
            onClick={() => {
               onSearch(id);
            }}
         >
            Agregar
         </button> 
      </div>
   );
}
// Cuando se da click ejecuta una función arrow que ejecuta la función onSearch
