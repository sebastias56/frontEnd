import SearchLocation from "../SearchLocation/SearchLocation";
import { Link,useParams } from "react-router-dom";
import SearchCalendar from '../SearchCalendar/SearchCalendar';
import './SearchBar.css'
import {useState, useEffect} from "react";
import axios from "axios";

function SearchBar({dateRange, setDateRange}) { 
    const [ciudad, setCiudad] = useState([]);
    const [ciudadId, setCiudadId] = useState(undefined);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const handleCiudadIdChange=(id)=>{
        if(id!==undefined){
            setCiudadId(id);
        }
        setCiudadId(id);
    }
    //consultar la api de productos y guardarlos en el state
    useEffect(() => {
        const consultarAPI = async () => {
            try {
                const result = await axios.get('http://apigrp11-env.eba-2kkfuzhu.us-west-2.elasticbeanstalk.com/home');
                setCiudad(result.data);
                setLoading(false);
            } catch (error) {
                setError(true);
                setErrorMessage(error.message);
            }
        }
        consultarAPI();
    }
    , []);
    const handleSubmit = (e) => {
        e.preventDefault();

        if(ciudadId!==undefined && dateRange[0]===null && dateRange[1]===null){
            window.location.href = "/ciudad/"+ciudadId;
        }
        if(dateRange[0]!==null && dateRange[1]!==null){
            window.location.href = "/fecha/"+dateRange[0].toLocaleString('es-AR', {year: 'numeric', month: '2-digit', day: '2-digit'}).split('/').reverse().join('-')+"/"+dateRange[1].toLocaleString('es-AR', {year: 'numeric', month: '2-digit', day: '2-digit'}).split('/').reverse().join('-');
        }
        if(ciudadId!==undefined && dateRange[0]!==null && dateRange[1]!==null){
            window.location.href = "/ciudad/"+ciudadId+"/fecha/"+dateRange[0].toLocaleString('es-AR', {year: 'numeric', month: '2-digit', day: '2-digit'}).split('/').reverse().join('-')+"/"+dateRange[1].toLocaleString('es-AR', {year: 'numeric', month: '2-digit', day: '2-digit'}).split('/').reverse().join('-');
        }
    }
    return (
        <section className="search-bar" aria-label="search">
            <h3 id= "search-title">Busca ofertas en hoteles, casas y mucho más</h3>
            <form id="search-bar-form">
                <SearchLocation ciudad={ciudad} ciudadId={handleCiudadIdChange}/>
                <SearchCalendar dateRange={dateRange} setDateRange={setDateRange} className = "search-calender"/>
                {dateRange[0]!=null && dateRange[1]===null? <button id="search-button" aria-label="search button" disabled >Buscar</button>:<button type="submit"onClick={handleSubmit} id="search-button" aria-label="search button">Buscar</button>}
            </form>
        </section>
    )
}

export default SearchBar;