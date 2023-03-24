import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
// axios hace lo mimso que fetch 
// Se debe instalar
import styles from './Detail.module.css'

const Detail = () => {
    const {detailId} = useParams();                            // useParams guarda el valor que hay en :detail que es el id de la url
       // Si hiciera un console mse mostraria el id del personaje
    const [character, setCharacter] = useState({});            // Para crear un estado

    useEffect(() => {
        const URL_BASE = "https://be-a-rym.up.railway.app/api";
        const KEY = "10057de3f785.b338ae7bc8031b0e1a82";

        axios(`${URL_BASE}/character/${detailId}?key=${KEY}`).then((response) => setCharacter(response.data));
    }, []);

    return(
        <div className={styles.detailCards}>
            {character.name ? (     // aca se pregunta si ya llego el name, y si si muestra las siguientes lineas
                <>
                    <h3>{character.name}</h3>
                    <p>{character.status}</p>
                    <p>{character.species}</p>
                    <p>{character.gender}</p>
                    <p>{character.origin?.name}</p>               {/* El ? indica que cuando origin llegue ahora si siga a name, porque esos procesor de petición pueden demorar y arrojara un error*/}
                    <img src={character.image} alt="img" />
                </>
            ) : (                                 // Si no ha llegado el name, muestre el Loading...
                <h3>Loading...</h3>
            )}
        </div>
    );
};
export default Detail;