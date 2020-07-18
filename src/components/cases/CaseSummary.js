import React, {useEffect, useState} from 'react';
import './CaseSummary.css';
import axios from 'axios';
import { trackPromise } from 'react-promise-tracker';

const CaseSummary = (props)=>{

    const [items, setItems] = useState([])

    useEffect(()=>{
        trackPromise(
            axios.get('https://corona.lmao.ninja/v2/countries/India')
            .then((res)=>{
                setItems(res.data)
            })
        )

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