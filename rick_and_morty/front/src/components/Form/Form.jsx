import styles from './Form.module.css';
import { useState } from 'react';
import validation from './validation';

const Form = ({ Login }) => {

  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (event) => {    // Cuando hay cambios en el input       
    const property = event.target.name;     // Aca extraemos el name de cada input
    const value = event.target.value;       // Aca extraemos lo que se escribio

    setUserData({ ...userData, [property]: value});       // seteamos los valores, los que ya habian y la propiedad toma el valor de value
    setErrors(validation({ ...userData, [property]: value}))
  };

  const submitHandler = (event) => {
    event.preventDefault();                               // Previene que se recargue la página
    Login(userData);
  };

  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <div>
      <label htmlFor="username:">Username: </label>
        <input
          type="text"
          name="username"
          placeholder='Escribe tu email...'
          value={userData.username}
          onChange={handleInputChange}
        />
        {errors.username && <p style={{color:'red'}}>{errors.username}</p>}
      </div>
      <div>
        <label htmlFor="password:">Password: </label>
        <input
          type="text"
          name="password"
          placeholder='Escribe tu password...'
          value={userData.password}
          onChange={handleInputChange}
        />
        {errors.password && <p style={{color:'red'}}>{errors.password}</p>}
      </div>
      <div>
        <button className={styles.logB} type='submit'>LOGIN</button>
      </div> 
    </form>
  );
}

export default Form;
