import useCharacter from "../../hooks/useCharacter";
// axios hace lo mimso que fetch 
// Se debe instalar
import styles from './Detail.module.css'

const Detail = () => {
    const character = useCharacter();

    return(
        <div className={styles.divContainer}>
        <div className={styles.detailCards}>
            {character.name ? (                                    // aca se pregunta si ya llego el name, y si si muestra las siguientes lineas
                <>
                <div>
                    <h2>{character.name}</h2>
                    <h3>{character.status}</h3>
                    <h3>{character.species}</h3>
                    <h3>{character.gender}</h3>
                    <h3>{character.origin?.name}</h3>               {/* El ? indica que cuando origin llegue ahora si siga a name, porque esos procesor de petición pueden demorar y arrojara un error*/}
                </div>
                <div>
                    <img src={character.image} alt="img" />
                </div>
                </>
                ) : (   
                    <div>                                              {/* Si no ha llegado el name, muestre el Loading...*/}
                        <h1></h1>
                        <p>Loading...</p>
                    </div>
            )}
        </div>
        </div>
    );
};
export default Detail;