// importamos los estilos desde Card.modules.css 
import { Link } from 'react-router-dom';
import styles from './Card.module.css';
// en la linea anterior ./ significa en la misma carpeta 
import { connect } from "react-redux";

// Se exporta por default porque es la unica función 
// Nos llegan las siguientes props: name, spacies, gender, image, onClose
// Card utiliza props de app.js
// Los props llegan dentro de (props) 

// Podria escribir cada prop dentro de props 
// Se hace destructuring
// export default function Card({name, spacies, gender, image, onClose}) {
// Si se hace destructuring no se pone => name: {props.name}, sino name: {name}
function Card({id, name, species, gender, image, onClose }) {     // Card recibe a onClose de Cards por props
   return (
      <div className={styles.divCard}>
         <button onClick={() => onClose(id)} className={styles.closeBtn}>X</button>    {/*Finalmente onClose se ejecuta en Card al darle click al boton */}
         
         <Link to={`/detail/${id}`}>     {/*Al dar click en el nombre de la tarjeta me llevara al detalle del personaje con su id */}
            <h2>Name: {name}</h2>
         </Link>
         
         <h2>Species: {species}</h2>
         <h2>Gender: {gender}</h2>
         <img src={image} alt=""/>
      </div>
   );
}

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

// Card recibe los props de Cadrs

// Para trabajar con React no se pone class para los estilos sino se pone 'className'