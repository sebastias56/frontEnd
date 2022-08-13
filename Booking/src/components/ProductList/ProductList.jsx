import Skeleton from "../Skeleton/Skeleton";
import Product from "./Product";
import { useState, useEffect } from "react";
import "./ProductList.css";
import axios from 'axios';
import { Link, useParams } from "react-router-dom";
import ProductDetail from "../ProductDetail/ProductDetail";


function ProductsList() {
    const { idCategoria,idCiudad,date1,date2 } = useParams();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const botonIniciar = document.querySelector('#botonIniciar');
    const botonCrear = document.querySelector('#botonCrear');
    //consultar la api de productos y guardarlos en el state
    //llamar a useEffect cuando el idCategoria cambie
    
    useEffect(() => {
        if(sessionStorage.getItem('token') == null && botonCrear != null){
        botonCrear.classList.remove("oculto");
        botonIniciar.classList.remove("oculto");
        }
        if(idCategoria===undefined && idCiudad===undefined && date1===undefined && date2===undefined){
        const consultarAPI = async () => {
            try {
                const result = await axios.get('http://apigrp11-env.eba-2kkfuzhu.us-west-2.elasticbeanstalk.com/productos');
                setProducts(result.data);
                setLoading(false);
            } catch (error) {
                setError(true);
                setErrorMessage(error.message);
            }
        }
        consultarAPI();
    }
    if(idCategoria!==undefined && date1===undefined && date2===undefined){
        const consultarAPI = async () => {
            try {
                const result = await axios.get('http://apigrp11-env.eba-2kkfuzhu.us-west-2.elasticbeanstalk.com/home/categoria/'+idCategoria);
                setProducts(result.data);
                setLoading(false);
            } catch (error) {
                setError(true);
                setErrorMessage(error.message);
            }
        }
        consultarAPI();
    }
    if(idCiudad!==undefined && date1===undefined && date2===undefined){
        const consultarAPI = async () => {
            try {
                const result = await axios.get('http://apigrp11-env.eba-2kkfuzhu.us-west-2.elasticbeanstalk.com/home/ciudad/'+idCiudad);
                setProducts(result.data);
                setLoading(false);
            } catch (error) {
                setError(true);
                setErrorMessage(error.message);
            }
        }
        consultarAPI();
    }
    //buscar por fecha
    if(date1!==undefined && date2!==undefined && idCategoria===undefined && idCiudad===undefined){
        const consultarAPI = async () => {
            try {
                const result = await axios.get('http://apigrp11-env.eba-2kkfuzhu.us-west-2.elasticbeanstalk.com/home/fecha/'+date1 +'/'+date2);
                setProducts(result.data);
                setLoading(false);
            } catch (error) {
                setError(true);
                setErrorMessage(error.message);
            }
        }
        consultarAPI();
    }
    if(idCiudad!==undefined && date1!==undefined && date2!==undefined){
        const consultarAPI = async () => {
            try {
                const result = await axios.get('http://apigrp11-env.eba-2kkfuzhu.us-west-2.elasticbeanstalk.com/home/ciudad/'+idCiudad+'/fecha/'+date1 +'/'+date2);
                setProducts(result.data);
                setLoading(false);
            } catch (error) {
                setError(true);
                setErrorMessage(error.message);
            }
        }
        consultarAPI();
    }
}, [idCategoria,idCiudad,date1,date2]);
    //si hay un error, mostrarlo
    if(products.length===0){
        return(
            <div className="product-list-container">
                <h2 className="product-list-title">No hay productos</h2>
            </div>
        )
    }
    else{
        
    return (

        <div id="block-products-container">
            <section className="product-title-button-filter">
                <h2 className="product-title">Recomendaciones</h2>
            </section>
            <div className="products">
                {loading ? <Skeleton /> :
                    products.slice(0, 4).map(product => (
                        <Link to={"/producto/" + product.id} state={{ product: { product } }}> <Product key={product.id} product={product} /></Link>
                    ))}
            </div>
        </div>
    );
}
}

export default ProductsList;
