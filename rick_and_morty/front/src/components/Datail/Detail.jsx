import useCharacter from "../../hooks/useCharacter";
// axios hace lo mimso que fetch 
// Se debe instalar
import styles from './Detail.module.css'

const Detail = () => {
    const character = useCharacter();

    return(
        <div className={styles.detailCards}>
            {character.name ? (                                    // aca se pregunta si ya llego el name, y si si muestra las siguientes lineas
                <>
                    <h3>{character.name}</h3>
                    <p>{character.status}</p>
                    <p>{character.species}</p>
                    <p>{character.gender}</p>
                    <p>{character.origin?.name}</p>               {/* El ? indica que cuando origin llegue ahora si siga a name, porque esos procesor de petición pueden demorar y arrojara un error*/}
                    <img src={character.image} alt="img" />
                </>
            ) : (                                                 // Si no ha llegado el name, muestre el Loading...
                <h3>Loading...</h3>
            )}
        </div>
    );
};
export default Detail;