import Card from '../Card/Card';
import styles from './Cards.module.css'

// Recibe un arreglo de characters 

// La linea 8 y 9 se podrian escribir asi: export default function Cards({characters}) 

export default function Cards(props) {
   const { characters, onClose } = props; // Destructuring. El onClose viene de App y ahora va a Card
   // const onClose = () => window.alert("Emulamos que se cierra la card");  // Declaramos una constante para poder toda la función de onClose
   return (
      <div className={styles.divCards}>
         {characters.map(({id, name, species, gender, image}) => { // Se mapea para que a cada characters le apliqe la función Card
            return (                                  
               <Card
                  key={id}
                  id = {id}
                  name = {name}
                  species = {species}
                  gender = {gender}
                  image = {image}
                  onClose = {onClose}
               />
            );
         })}
      </div>
   );
}
// Cards le pasa a Card los props en un objeto {name, species, gender, image, onClose}


// La linea 13 se podria escribir: {characters.map(({character}) => {
// Pero el las lineas 16 a 19 se debe escribir {character.name} etc

// El objeto characters es un objeto con un array de objetos

//! Este componente de Cards su responsabilidad es mapear y pedirle a Card que se muestre
