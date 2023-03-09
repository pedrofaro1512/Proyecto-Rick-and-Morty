// importamos los estilos desde Card.modules.css 
import styles from './Card.module.css'
// en la linea anterior ./ significa en la misma carpeta 

// Se exporta por default porque es la unica función 
// Nos llegan las siguientes props: name, spacies, gender, image, onClose
// Card utiliza props de app.js
// Los props llegan dentro de (props) 

// Podria escribir cada prop dentro de props 
// Se hace destructuring
// export default function Card({name, spacies, gender, image, onClose}) {
// Si se hace destructuring no se pone => name: {props.name}, sino name: {name}
export default function Card({id, name, species, gender, image, onClose }) {
   return (
      <div className={styles.divCard}>
         <button onClick={() => onClose(id)} className={styles.closeBtn}>X</button>
         <h2>Name: {name}</h2>
         <h2>Species: {species}</h2>
         <h2>Gender: {gender}</h2>
         <img src={image} alt=""/>
      </div>
   );
}

// Card recibe los props de Cadrs

// Para trabajar con React no se pone class para los estilos sino se pone 'className'