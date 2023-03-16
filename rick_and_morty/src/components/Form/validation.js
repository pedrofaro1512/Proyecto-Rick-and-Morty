const validation = (userData, errors, setErrors) => {
    // Para el username
    if (!userData.username)
        setErrors({...errors, username: "Debes comletar este espacio" });   // Si no hay nada en username setear errors con el mensaje
    else if (userData.username.length > 35)
        setErrors({...errors, username: "No puede tener mas de 35 caracteres" });
    else if (
        !/^\w+([-]?\w+)*@\w+([-]?\w+)*(\w{2,3})+$/.test(userData.username)
    ) {
        setErrors({ ...errors, username: "Email invalido" });
    } else {
        setErrors({ ...errors, username: "" });
    }

    // Para el password
    if (userData.password.length < 6 || userData.password.length > 10){
        setErrors({ ...errors, password: "La contraseña debe tener entre 6 a 10 caracteres"})
    } else if (!/\d/.test(userData.password)){                // Validación para que tenga mínimo un número
        setErrors({ ...errors, password: "La contraseña debe tener al menos un número"})
    } else {
        setErrors({ ...errors, password: "" });
    } 
};

export default validation;