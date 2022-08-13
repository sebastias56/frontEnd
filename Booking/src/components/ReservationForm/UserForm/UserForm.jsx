import "./UserForm.css";

function Userform(props) {
    const {handleChangeUserCity} = props;
    const usuario=JSON.parse(sessionStorage.getItem("user"));
    
    //funcion para cambiar la ciudad del usuario
    const handleChangeCity = (e) => {
        handleChangeUserCity(e.target.value);
    }
    
    return (
        <section className="user-data-inputs">
            <h2 className="reservation-form-title">Completa tus datos</h2>
            <div className="user-data-inputs-container">
                <fieldset className="section-inputs-container">
                    <label className="data-user-label">
                        Nombre
                        <input type="text" name="name" title="Nombre" value={usuario.nombre} className="reservation-input-disabled" disabled />
                    </label>
                    <label className="data-user-label">
                        Apellido
                        <input type="text" name="surname" title="Apellido" value={usuario.apellido} className="reservation-input-disabled" disabled />
                    </label>
                </fieldset>
                <fieldset className="section-inputs-container">
                    <label className="data-user-label">
                        Correo electrónico
                        <input type="email" id="reservation-email" name="email" title="Correo electrónico" value={usuario.email} className="reservation-input-disabled" disabled />
                    </label>
                    <label className="data-user-label">
                        Ciudad
                        <input onChange={handleChangeCity} type="text" name="city" title="Completa con tu ciudad de residencia" className="reservation-input" placeholder="¿De dónde eres?" required />
                    </label>
                </fieldset>
            </div>
        </section>
    );
};

export default Userform;