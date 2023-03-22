import React from "react";
import styles from "./About.module.css";

class About extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className={styles.about}>
                <p>
                Nuestra aplicación web es la solución perfecta para aquellos fanáticos de la famosa serie "Rick and Morty" 
                que desean conocer más acerca de sus personajes favoritos. Al ingresar un número en nuestra plataforma, 
                el usuario obtendrá información detallada sobre el personaje correspondiente como su nombre, 
                especie y genero, junto con una imagen que lo representa.
                </p>
                <p>
                Nuestra aplicación es fácil de usar y accesible para cualquier persona con conexión a internet. 
                Simplemente ingrese el número correspondiente al personaje que desea conocer y deje que nuestra 
                plataforma haga el resto. La información se presenta de manera clara y concisa, lo que facilita 
                la lectura y la comprensión de la misma.
                </p>
                <p>
                La imagen que acompaña cada carta es seleccionada cuidadosamente para representar al personaje 
                de la manera más precisa posible. En nuestro equipo de desarrollo nos esforzamos por hacer que 
                la experiencia del usuario sea lo más agradable posible, por lo que nos aseguramos de que cada 
                imagen sea de alta calidad y se ajuste perfectamente a la información presentada en la carta.
                </p>
            </div>
        );
    };
};
export default About;