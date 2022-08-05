import React from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";

const PizzaPage = ()=>{
    const {id} = useParams();
    const [dataPizza, setDataPizza] = React.useState()

    React.useEffect(() => {
            async function fetchDataPizza() {
                try {
                    const {data} = await axios.get(`https://62b0a7a6e460b79df04ab646.mockapi.io/items/${id}`);
                    setDataPizza(data)
                } catch (e) {
                    console.log('error card item page ?>', e);
                }
            }
            fetchDataPizza().then(r => r);
        },
        [])

    if(!dataPizza){
        return 'Loading';
    }

    return (
        <div>
            Pizza Page
            <img src={dataPizza.imageUrl} alt='pizza image'/>
            <h2>{dataPizza.title}</h2>
            <p>{dataPizza.description}</p>
            <h4>{dataPizza.price} Kzt</h4>
        </div>
    )
}

export default PizzaPage;