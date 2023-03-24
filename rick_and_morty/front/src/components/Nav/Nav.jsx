import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./Nav.module.css";

// Nav recibe la función onSearche en props  

class Nav extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={styles.Nav}>
                <SearchBar onSearch={this.props.onSearch} />
                <Link to="/about">
                    <h3>ABOUT</h3>
                </Link>
                <Link to="/home">
                    <h3>HOME</h3>
                </Link>
                <Link to="/" >
                    <h3>LOGOUT</h3>
                </Link>
                <Link to="/favorites" >
                    <h3>FAVORITES</h3>
                </Link>
            </div>
        );
    }
}
// Ahora Nav le pasa onSearch a searchBar po props

export default Nav;
