//import './App.css' 
//import Card from './components/Card/Card.jsx' 
import Cards from './components/Cards/Cards.jsx';
import Nav from "./components/Nav/Nav.jsx"
//import SearchBar from './components/SearchBar/SearchBar.jsx'; 
//import characters from './data.js';
//import style from "./App.module.css";
import { useEffect, useState } from 'react';
// Importamos Route y routes para generar rutas 
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
//import Home from './views/Home/Home.jsx';
import About from './components/About/About.jsx';
import Detail from './components/Datail/Detail.jsx';
import Form from './components/Form/Form.jsx';

// Rick son objetos que vienen de data.js 
// characters viene solo, no dentro de un objeto, porque viene por export defauld

// Dentro de app hay dos componentes (SearchBar y Cards) con diferentes props que se le pasan a los hijos (SearchBar y Cards)
// El padre que es App le envia props a los hijos (Cards) que es un objeto llamado characters
 
function App () {

  // En la siguiente linea se hace destructuring de un array
  // El estado (useSatate) devuelve un array con dos elementos, el estado (characters) con un valor inicial (que para nuestro caso es [], el que esta es useSatete([])) y la función que es la UNICA encargada de modificar el estado
  // characters es un estado de App
  //! HOOKS
  const [characters, setCharacters] = useState([]); 
  const { pathname } = useLocation();          // Destructuring de locayion que tiene dentro una propiedad que se llama pathname
  const [access, setAccess] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {                             // Si access es falso nos envia a navigate /, osea no nos deja entrar
    !access && navigate("/");
  }, [access]);

  // ! Credenciales Fake
  const username = "pedro@gmail.com";
  const password = "123abc";
  
  //! EVENT HANDLERS
  // La función onSearch agrega personajes
  const onSearch = (id) => {
    const URL_BASE = "https://be-a-rym.up.railway.app/api";
    const KEY = "10057de3f785.b338ae7bc8031b0e1a82";

    if(characters.find((char) => char.id === id)) {   // Si el caracter ya esta arroja un alert
      return alert("Personaje repetido");
    }

    fetch(`${URL_BASE}/character/${id}?key=${KEY}`)
       .then((response) => response.json())
       .then((data) => {                                                         // data es el personaje que nos traemos por la petición
          if (data.name) {    // Si el data es correcto
            setCharacters((oldChars) => [...oldChars, data]);                    // agregelo a lo que ya habian
            // setCharacters([...characters, data])                              // La anterior linea se puede escribir asi también
          } else {
            window.alert('Algo esta incorrecto');
          }
       });
  };
// La función onSearch:
// 1. hace una petición a la API con el id
// 2. Si recibe un valor real agrega el personaje al estado del padre App, si no devuelve un alert

// La función onClose quita personajes
  const onClose = (id) => {
    // Se utiliza filter porque no modifica el array original
    setCharacters(characters.filter((char) => char.id !== id));
  };
    // El filter recibe en cada paso un personaje y se fija si el personaje tenga un id diferente a id que quiero borrar

  const login = (userData) => {           // Validación con datos creados mas arriba
    if(userData.username === username && userData.password === password) {  // Si es correcto lo que se escribio
      setAccess(true);                                                      // Cambiamos Access a true y
      navigate("/home");                                                    // navigate nos lleva al home
    } else {
      alert("Datos incorrectas");                                // Si los datos son incorrectos arroja un alert
    }
  };

  // Se debe pasar la función onSearch a Nav
  return (
    <div className='App' style={{ padding: '25px' }}>
      {pathname !== "/" && <Nav onSearch={onSearch}/>}   {/*Si el pathname es diferente a '/', mostrar Nav*/}
      <Routes>
        <Route path="/" element={<Form Login={login} />} />
        <Route
          path="/home" 
          element={<Cards characters={characters} onClose={onClose}/>} 
        />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:detailId" element={<Detail />} />    {/*El : sirve para despues recuperar ese dato, ese dato va a estar en useParams*/}
      </Routes>
    </div>
  );
}
/*El onClose debe llegar a Card, pero debe pasar por Cards */
export default App;

// [...oldChars, data] Esa es la forma en que se le agregan elementos a el estado