export default function validateInfo(data){
    
    let errores = {};


    if(!data.titulo.trim()){
        errores.titulo = "Ingresa Un Titulo";
    }

    if (!data.descripcion.trim()) {
        errores.descripcion = 'Ingresa una descripcion';
      }
  
    if (data.categoria === "") {
      errores.categoria = 'Selecciona una categoria';
    }
    if (data.ciudad === "") {
        errores.ciudad = 'Selecciona una ciudad';
        }
    if (data.imagenes.length <= 4) {
        errores.imagenes = 'Ingresa al menos 5 imagenes';
        }
    if(data.politicas[0].casa === "" || data.politicas[0].salud === "" || data.politicas[0].cancelacion ===""){
        errores.politicas = 'Ingrese politicas';
        }
    if(data.caracteristicas.length <= 0){
        errores.caracteristicas = 'Ingrese almenos 1 caracteristica';
        }


    return errores;
}