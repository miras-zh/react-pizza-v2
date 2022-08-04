import React from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";

const PizzaPage = ()=>{
    const {id} = useParams();

    React.useEffect(()=>{
        axios.get(`https://62b0a7a6e460b79df04ab646.mockapi.io/items/${id}`)
            .then((res)=>{
                console.log('res?>', res);
            })
    }, [])

    return (
        <div>
            Pizza Page
            <img src="../../src/assets/img/pizza-logo.svg"/>
            <h2>title</h2>
            <p>Lorem</p>
            <h4>1000 Kzt</h4>
        </div>
    )
}

export default PizzaPage;