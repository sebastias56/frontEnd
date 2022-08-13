export default function validateInfo(data){
    
    let errores = {};

    
    if(!data.nombre.trim()){
        errores.nombre = "Ingresa tu nombre"
    }

    if (!data.apellido.trim()) {
        errores.apellido = 'Ingresa tu apellido';
      }
  
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
  
    if (!data.passwordConfirm) {
      errores.passwordConfirm = 'Ingresa de nuevo tu contraseña';
      return errores;
    }
    else if (data.password !== data.passwordConfirm) {
      errores.passwordConfirm = 'Las contraseñas no coinciden';
    }

    return errores;
}