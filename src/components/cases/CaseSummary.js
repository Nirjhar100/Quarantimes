import React, {useEffect, useState} from 'react';
import './CaseSummary.css';
import axios from 'axios';

const CaseSummary = (props)=>{

    const [items, setItems] = useState([])

    useEffect(()=>{
        async function fetchData(){
            const result = await axios('https://corona.lmao.ninja/countries/India');
            setItems(result.data);
        }
        fetchData();
    },[])

    return(
            <div className="card ">
                <div className="card-title center white-text">COVID-19</div>
                <div className="card-content">
                    <p className = "white-text">TOTAL CONFIRMED</p><p className = "blue-text"> {items.cases}</p><br/>
                    <p className = "white-text">DEATHS</p><p className = "red-text"> {items.deaths}</p><br/>
                    <p className = "white-text">RECOVERED</p><p className = "yellow-text"> {items.recovered}</p><br/>
                    <p className = "white-text">TODAY</p><p className = "grey-text"> {items.todayCases}</p><br/>
                </div>
            </div>
    );
}

export default CaseSummary;