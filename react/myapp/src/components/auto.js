import React ,{useState, useEffect} from 'react';
import {getAllAutos} from "../services/AutoServices";

const autosInicial=[
    {
        id: 1,
        marca: "",
        color: "",
        usuario: {}
    }
];

const AutoComponent= ()=>{
    const [autos,setAutos] = useState(autosInicial);

    const obtenerAutos=async()=>{
        setAutos(await getAllAutos());
    }
    //useEffect: ejecuta una funcion segun el momento de ciclo de vida
    useEffect(
        ()=>{obtenerAutos()}, []
    );
    return(
        <>
            <h1>respuesta de la api: </h1>
            

                {
                //investigar el uso de map en react y 
                //traspaso de objeto a un componente e imprimir en la pagina
                autos.map(auto => 
                    <div className="card" key={auto.id}>
                        <div className="card-body">
                            <h5 className="card-title">{auto.marca}</h5>
                            <p className="card-text">{auto.id} {auto.color}</p>
                        </div>
                    </div>
                )
                }
        </>
    );
}

export default AutoComponent;