import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"; 
import { getFavorites } from "../../redux/actions";
import Card from "../Card/Card";
import styles from './Favorite.module.css'


const Favorites = () => {
    const dispatch = useDispatch();

    const favorites = useSelector((state) => state.myFavorites);

    useEffect(() => {
        dispatch(getFavorites());
    }, []);

    return(
        <div className={styles.divFavorite}>
            {favorites.map(({id, name, species, gender, image}) => {
                return (
                    <Card 
                        key={id}
                        id = {id}
                        name = {name}
                        species = {species}
                        gender = {gender}
                        image = {image}
                    />
                );
            })}
        </div>
    )
};

export default Favorites;