import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import validate from "./InfoValidator"
import { 
    faMartiniGlass,
    faChevronLeft,
    faPlusCircle,
    faWifi, 
    faSwimmer,
    faCoffee,
    faUtensils,
    faSnowflake,
    faSmokingBan,
    faCocktail,
    faPaw,
    faCar,
    faConciergeBell,
    faDumbbell,
    faSpa,
    faTv,
    faTimesCircle
} from "@fortawesome/free-solid-svg-icons";
import "./CreateProduct.css"
import { useEffect } from "react";
import axios from "axios";


function CreateProduct() {
 
    const [pushName, setPushName] = useState("");
    const [pushAddress, setPushAddress] = useState("");
    const [pushDescription, setPushDescription] = useState("");
    const [pushCategory, setPushCategory] = useState("");
    const [pushCity, setPushCity] = useState("");
    const [pushCharacteristics, setPushCharacteristics] = useState([]);
    const [pushImage, setPushImage] = useState("");
    const [pushImages, setPushImages] = useState([]);
    const [pushRules, setPushRules] = useState("");
    const [pushSanity, setPushSanity] = useState("");
    const [pushCancellationPolicy, setPushCancellationPolicy] = useState("");
    const [cities , setCities] = useState([]);
    const [categories , setCategories] = useState([]);
    const [characteristics , setCharacteristics] = useState([]);
    const [errores , setErrores] = useState({});

    useEffect (() => {
        //peticiones para obtener las categorias, ciudades, caracteristicas
        const getCategories = async () => {
            try {
                const result = await axios.get('http://apigrp11-env.eba-2kkfuzhu.us-west-2.elasticbeanstalk.com/categorias');
                setCategories(result.data);
            } catch (error) {
                console.log(error);
            }
        }
        const getCities = async () => {
            try {
                const result = await axios.get('http://apigrp11-env.eba-2kkfuzhu.us-west-2.elasticbeanstalk.com/home');
                setCities(result.data);
            } catch (error) {
                console.log(error);
            }
        }
        const getCharacteristics = async () => {
            try {
                const result = await axios.get('http://apigrp11-env.eba-2kkfuzhu.us-west-2.elasticbeanstalk.com/caracteristicas');
                setCharacteristics(result.data);
                console.log(result.data);
            } catch (error) {
                console.log(error);
            }
        }
        getCategories();
        getCities();
        getCharacteristics();
    }, []);
    const product = {
        titulo: pushName,
        categoria: pushCategory,
        ciudad: pushCity,
        caracteristicas: pushCharacteristics,
        descripcion: pushDescription,
        imagenes: pushImages,
        politicas: [{casa:pushRules, cancelacion:pushCancellationPolicy, salud:pushSanity}],
    }

    const consultarAPI = async () => {
        try {
            
            const result = await axios.post('http://apigrp11-env.eba-2kkfuzhu.us-west-2.elasticbeanstalk.com/productos', product);
            if (result.status === 200) {
                window.location.href = "/reservaCreada";
            }
        } catch (error) {
            console.log(error);
        }
    }
    

    const handleSubmit = (evt) => {
        if (pushName !== "" && pushAddress !== "" && pushDescription !== "" && pushCategory !== "" && pushCity !== "" && pushCharacteristics !== "" && pushImages.length >= 5 && pushRules !== "" && pushSanity !== "" && pushCancellationPolicy !== "") {
            evt.preventDefault();
            consultarAPI();
        }
    }

    function handleChangePushName(e) {
        
        const { value } = e.target
        setPushName(value);
    };

    function handleChangePushAddress(e) {
        const { value } = e.target
        setPushAddress(value);
    };

    function handleChangePushDescription(e) {
        const { value } = e.target
        setPushDescription(value);
    };

    function handleChangePushCategory(e) {
        const { value } = e.target
        setPushCategory(categories[value-1]);
        console.log(categories[value-1]);
    };

    function handleChangePushCity(e) {
        const { value } = e.target
        setPushCity(cities[value-1]);
    };

    function handleChangePushRules(e) {
        const { value } = e.target
        setPushRules(value);
    };

    function handleChangePushSanity(e) {
        const { value } = e.target
        setPushSanity(value);
    };
    function handleError(e) {
        let errores = validate(product);
        setErrores(errores)
        
    }

    function handleChangePushCancellationPolicy(e) {
        const { value } = e.target
        setPushCancellationPolicy(value);
    };

    function handleChangePushImage(e) {
        const { value } = e.target
        setPushImage({url:value,titulo:pushName});
    };

    function handleChangePushCharacteristics(e, characteristic) {

        const { checked } = e.target
        console.log(pushCharacteristics);
        if (checked) {
            setPushCharacteristics([...pushCharacteristics, { nombre:characteristic.nombre,iconoUrl:characteristic.iconoUrl }]);
        } else {
            const isInTheArray = pushCharacteristics.some(ch => ch.id === characteristic.id)
            if (isInTheArray) {
                setPushCharacteristics(pushCharacteristics.filter(ch => ch.id !== characteristic.id))
            };
        };
    };

    function addImage() {
        if (pushImage) {
            setPushImages([...pushImages, {url:pushImage.url,titulo:pushName}]);
            setPushImage({url:"",titulo:""});
        };
        console.log(pushImages);
    };

    function removeImage(url) {
        setPushImages(pushImages.filter(img => img.url !== url))
        console.log(pushImages)
    };

    function parseIcons(icon) {
        switch (icon) {
            case 'faWifi':
                return <FontAwesomeIcon icon={faWifi} className="service-icon" />
            case 'faSwim':
                return <FontAwesomeIcon icon={faSwimmer} className="service-icon swimmer-icon" />
            case 'faCoffee':
                return <FontAwesomeIcon icon={faCoffee} className="service-icon" />
            case 'faUtensils':
                return <FontAwesomeIcon icon={faUtensils} className="service-icon" />
            case 'faSnowflake':
                return <FontAwesomeIcon icon={faSnowflake} className="service-icon" />
            case 'faBanSmoking':
                return <FontAwesomeIcon icon={faSmokingBan} className="service-icon" />
            case 'faMartiniGlass':
                return <FontAwesomeIcon icon={faMartiniGlass} className="service-icon" />
            case 'faPaw':
                return <FontAwesomeIcon icon={faPaw} className="service-icon" />
            case 'faCar':
                return <FontAwesomeIcon icon={faCar} className="service-icon" />
            case 'faConciergeBell':
                return <FontAwesomeIcon icon={faConciergeBell} className="service-icon" />
            case 'faDumbbell':
                return <FontAwesomeIcon icon={faDumbbell} className="service-icon" />
            case 'faSpa':
                return <FontAwesomeIcon icon={faSpa} className="service-icon" />
            case 'faTv':
                return <FontAwesomeIcon icon={faTv} className="service-icon" />
            default:
                return;
        }
    }



    return (
        <>
        <section className="product-label">
            <h1 className="title-admin">Administración</h1>
            <Link to="/" className="back"><FontAwesomeIcon icon={ faChevronLeft } title="Volver al inicio" className="back-icon" /></Link>
        </section>

            <section className="background-product-create">
                <h2 className="title-product-create">Crear Propiedad</h2>
                <form id="product-create-form" name="Product Create Form" onSubmit={handleSubmit}>
                    <section className="product-create-container">
                        <fieldset className="section-inputs-container">
                            <label className="product-create-label">
                                Nombre de la propiedad
                                <input type="text" name="name" title="Ingresa el nombre de la propiedad" aria-label="input name" className="product-create-input" onChange={handleChangePushName} value={pushName} placeholder="Nombre" required />
                                {errores.titulo && <p className="errorMessage">{errores.titulo}</p>}
                            </label>
                            <label className="product-create-label">
                                Categoría
                                <select name="category-select" title="Selecciona una categoría en la lista" aria-label="select category" onChange={handleChangePushCategory} value={pushCategory.id} id="product-create-select" required >
                                    <option hidden value="">Selecciona la categoría</option>
                                    {categories.map((category) => (<option value={category.id} key={category.titulo}>{category.titulo}</option>))}
                                    
                                </select>
                                {errores.categoria && <p className="errorMessage">{errores.categoria}</p>}
                            </label>
                        </fieldset>
                        <fieldset className="section-inputs-container">
                            <label className="product-create-label">
                                Dirección
                                <input type="text" name="address" title="Ingresa la dirección" aria-label="input address" className="product-create-input" onChange={handleChangePushAddress} value={pushAddress} placeholder="Direccion" required />
                            </label>

                            <label className="product-create-label">
                                Ciudad
                                <select name="location-select" title="Selecciona una ciudad en la lista" aria-label="select city" id="product-create-select" onChange={handleChangePushCity} value={pushCity.id} required >
                                    <option hidden value="">Selecciona la ciudad</option>
                                    {cities.map((city) => (<option value={city.id} key={city.nombre}>{city.nombre}</option>))}
                                    
                                </select>
                                {errores.ciudad && <p className="errorMessage">{errores.ciudad}</p>}
                            </label>
                        </fieldset>
                        <label className="product-create-textarea-label">
                            Descripción
                            <textarea name="description" title="Ingresa la descripción del alojamiento" className="product-create-description" onChange={handleChangePushDescription} value={pushDescription} placeholder="Escribe aqui" required />
                            {errores.descripcion && <p className="errorMessage">{errores.descripcion}</p>}
                        </label>
                    </section>

                    <section className="product-create-section">
                        <h2 className="subtitle-product-create">Agregar atributos</h2>
                        <fieldset className="section-container-characteristics">
                            <ul className="services-product-create">
                                {characteristics.map((characteristic) => (
                                    <li className="service" key={characteristic.id}>
                                        <label for={characteristic.id} aria-label="characteristic service" className="product-create-service">
                                            <input type="checkbox" id="service" name="service" aria-label="characteristic service" value={characteristic} onChange={(e) => handleChangePushCharacteristics(e, characteristic)} />
                                            {parseIcons(characteristic.iconoUrl)}
                                            {characteristic.nombre}
                                        </label>
                                    </li>
                                ))}
                                
                            </ul>
                            {errores.caracteristicas && <p className="errorMessage">{errores.caracteristicas}</p>}
                        </fieldset>
                    </section>

                    <section className="product-create-section">
                        <h2 className="subtitle-product-create">Políticas del producto</h2>
                        <fieldset className="section-container-policies">
                            <div className="product-create-rules">
                                <h3 className="subtitle-product-policies">Normas de la casa</h3>
                                <label className="product-create-policies-label">
                                    Descripción
                                    <textarea name="description" title="Ingresa las normas del alojamiento" className="product-create-policies" onChange={handleChangePushRules} value={pushRules} placeholder="Escribe aqui" required />
                                </label>
                            </div>
                            <div className="product-create-rules">
                                <h3 className="subtitle-product-policies">Salud y seguridad</h3>
                                <label className="product-create-policies-label">
                                    Descripción
                                    <textarea name="description" title="Ingresa la descripción de salud y seguridad" className="product-create-policies" onChange={handleChangePushSanity} value={pushSanity} placeholder="Escribe aqui" required />
                                </label>
                            </div>
                            <div className="product-create-rules">
                                <h3 className="subtitle-product-policies">Política de cancelación</h3>
                                <label className="product-create-policies-label">
                                    Descripción
                                    <textarea name="description" title="Ingresa la política de cancelación" className="product-create-policies" onChange={handleChangePushCancellationPolicy} value={pushCancellationPolicy} placeholder="Escribe aqui" required />
                                </label>
                            </div>
                        </fieldset>
                        {errores.politicas && <p className="errorMessage">{errores.politicas}</p>}
                    </section>
                    <section className="product-create-section">
                        <h2 className="subtitle-product-create">Cargar imágenes</h2>
                        <fieldset className="section-images-container">
                            <div className="images-input">
                                <label className="product-create-label">
                                    <p className="add-links-label">
                                        <span>Mínimo 5 imágenes</span>
                                    </p>
                                    <input type="text" id="url" name="img" title="Ingresa la foto del alojamiento" placeholder="Insertar https://" className="product-create-input-img" onChange={handleChangePushImage} value={pushImage.url} />
                                </label>
                                <FontAwesomeIcon icon={faPlusCircle} title="Agrega una imagen" role="button" className="icon-add-img" onClick={addImage} />
                            </div>
                            <div className="images-list">
                                <ul className="image-url-items">
                                    {pushImages.map((img, i) => (
                                        <li key={i}>
                                            <label className="image-url-item">
                                                <input type="url" id="url" name="img" className="image-url" disabled value={img.url} />
                                                <FontAwesomeIcon icon={faTimesCircle} title="Elimina esta imagen" role="button" className="icon-remove-img" onClick={() => removeImage(img.url)} />
                                            </label>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </fieldset>
                        {errores.imagenes && <p className="errorMessage">{errores.imagenes}</p>}
                    </section>
                    <button form="product-create-form" type="submit" onClick={handleError} className="button-create" >Crear</button>
                </form>
            </section>
        </>
    )
}

export default CreateProduct