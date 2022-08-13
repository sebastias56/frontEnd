export default function validateInfo(data){
    
    let errores = {};
    
    if (!data.email) {
      errores.email = 'Ingresa tu email';
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      errores.email = 'Email invalido';
    }
    if (!data.password) {
      errores.password = 'Ingresa tu contraseña';
    } else if (data.password.length < 6) {
      errores.password = 'Tu contraseña debe tener más de 6 carácteres';
    }

    return errores;
}