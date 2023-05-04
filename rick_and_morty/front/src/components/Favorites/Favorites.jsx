import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"; 
import { getFavorites } from "../../redux/actions";
import Card from "../Card/Card";
import styles from './Favorite.module.css'
import { filterCards, orderCards } from "../../redux/actions";


const Favorites = () => {
    const dispatch = useDispatch();
    const [aux, setAux] = useState(false);

    const favorites = useSelector((state) => state.myFavorites);

    // const handleOrder = (event) => {
    //     event.preventDefault()
    //     dispatch(orderCards(event.target.value))
    //     setAux(!aux);
    // };

    // const handleFilter = (event) => {
    //     event.preventDefault()
    //     dispatch(filterCards(event.target.value))
    // };

    useEffect(() => {
        dispatch(getFavorites());
    }, []);

    return(
        <div className={styles.divFavorite}>
            {/* <select onChange={handleOrder} name="order" defaultValue={"DEFAULT"}></select> */}
            <select name="order" defaultValue={"DEFAULT"}>
                <option value="DEFAULT" disable>Select Order</option>
                <option value="A">Ascendente</option>
                <option value="D">Descendente</option>
            </select>

            {/* <select onChange={handleFilter} name="filter" defaultValue={"DEFAULT"}> */}
            <select name="filter" defaultValue={"DEFAULT"}>
            <option value="DEFAULT" disable>Select Filter</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Genderless">Genderless</option>
                <option value="unknown">unknown</option>
                <option value="allCharacters">All Characters</option>
            </select>

            {favorites?.map(({id, name, species, gender, image}) => {
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