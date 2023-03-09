//import './App.css' 
//import Card from './components/Card/Card.jsx' 
import Cards from './components/Cards/Cards.jsx';
import Nav from "./components/Nav/Nav.jsx"
//import SearchBar from './components/SearchBar/SearchBar.jsx';
//import characters from './data.js';
import style from "./App.module.css";
import { useState } from 'react';
// Rick son objetos que vienen de data.js 
// characters viene solo, no dentro de un objeto, porque viene por export defauld

// Dentro de app hay dos componentes (SearchBar y Cards) con diferentes props que se le pasan a los hijos (SearchBar y Cards)
// El padre que es App le envia props a los hijos (Cards) que es un objeto llamado characters
 
function App () {
  // En la siguiente linea se hace destructuring de un array
  // El estado (useSatate) devuelve un array con dos elementos, el estado (characters) con un valor inicial (que para nuestro caso es [], el que esta es useSatete([])) y la función que es la UNICA encargada de modificar el estado
  // characters es un estado de App
  const [characters, setCharacters] = useState([]);

  const onSearch = (id) => {
    const URL_BASE = "https://be-a-rym.up.railway.app/api";
    const KEY = "10057de3f785.b338ae7bc8031b0e1a82";

    fetch(`${URL_BASE}/character/${id}?key=${KEY}`)
       .then((response) => response.json())
       .then((data) => {
          if (data.name && !characters.find((char) => char.id === data.id)) {
            setCharacters((oldChars) => [...oldChars, data]);
          } else {
            window.alert('No hay personajes con ese ID');
          }
       });
  }
// La función onSearch:
// 1. hace una petición a la API
// 2. Si recibe un valor real agrega el valor al estado del padre, si no devuelve un alert

  const onClose = (id) => {
    // Se utiliza filter porque no modifica el array original
    setCharacters(characters.filter((char) => char.id !== id));
  };

  return (
    <div className='App' style={{ padding: '25px' }}>
      <div className={style.nav}>
        <Nav onSearch={onSearch} /> 
      </div>
      <div>
        <Cards characters={characters} onClose={onClose} />
      </div>
    </div>
  );
}

export default App;

// [...oldChars, data] Esa es la forma en que se le agregan elementos a el estado