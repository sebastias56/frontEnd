
import "./Categories.css"
import Card from"../Skeleton/Card"
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Categories() {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    //consultar la api de productos y guardarlos en el state
    useEffect(() => {
        const consultarAPI = async () => {
            try {
                const result = await axios.get('http://apigrp11-env.eba-2kkfuzhu.us-west-2.elasticbeanstalk.com/categorias');
                setCategories(result.data);
                setLoading(false);
            } catch (error) {
                setError(true);
                setErrorMessage(error.message);
            }
        }
        consultarAPI();
    }
        , []);
    //si hay un error, mostrarlo

    if (loading) return (
        <div className="loader-container">
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    );

    return (
        <section className="categories-container">
            <h2 className="categories-title">Buscar por tipo de alojamiento</h2>
            <section className="categories">

                {
                    categories.map((category) => (
                        <Link to={"/categoria/" + category.id} state={{ category: { category } }}>
                            <div className="category-item">
                                <img
                                    src={category.urlImagen}
                                    alt={"imagen de categoría " + category.titulo}
                                />
                                <div className="category-text">
                                    <h3 className="category-name">{category.titulo}</h3>
                                    <p className="category-count">{category.descripcion}</p>
                                </div>
                            </div>
                        </Link>
                    ))}
            </section>
        </section>
    );
}

export default Categories;
