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
                    <button className={styles.B}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        ABOUT
                    </button>
                </Link>
                <Link to="/home">
                    <button className={styles.B}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        HOME
                    </button>
                </Link>
                <Link to="/favorites" >
                    <button className={styles.B}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        FAVORITES
                    </button>
                </Link>
                <Link to="/" >
                    <button className={styles.B}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        LOGOUT
                    </button>
                </Link>
            </div>
        );
    }
}
// Ahora Nav le pasa onSearch a searchBar po props 

export default Nav;
