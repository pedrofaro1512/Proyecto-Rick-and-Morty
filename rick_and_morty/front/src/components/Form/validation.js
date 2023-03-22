const validation = (userData) => {
    const errors = {};
    
    // Username    
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userData.username)) {
        errors.username = "Email invalido";
    }
    if (!userData.username) {
        errors.username = "Debes comletar este espacio";
    }
    if (userData.username.length > 35){
        errors.username= "No puede tener mas de 35 caracteres";
    }

    // Password
    if (userData.password.length < 6 || userData.password.length > 10){
        errors.password = "La contraseña debe tener entre 6 a 10 caracteres";
    }
    if (!/\d/.test(userData.password)){               // Validación para que tenga mínimo un número
        errors.password = "La contraseña debe tener al menos un número";
    }
    
    return errors;
};

export default validation;