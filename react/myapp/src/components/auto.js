import React ,{useState, useEffect} from 'react';
import {getAllAutos,eliminarAuto,guardarAuto} from "../services/AutoServices";
import ModalAutoEditar from './modalAutoEditar';
import ModalAutoComponent from './modalAutoNuevo';


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
    const [autoEditado, setAutoEditado]= useState(null);

    const obtenerAutos=async()=>{
        setAutos(await getAllAutos());
    }

    const eliminaAuto=async(autoId)=>{
        await eliminarAuto(autoId)
        setAutos(await getAllAutos())

    }

    const autoAgregar = async (auto) => {
        await guardarAuto(auto)
        setAutos(await getAllAutos())
    }

    const editaAuto = (auto) =>{
        setAutoEditado(auto);
    } 

    //useEffect: ejecuta una funcion segun el momento de ciclo de vida
    useEffect(
        ()=>{obtenerAutos()}, []
    );
    return(
        <>
            <ModalAutoEditar autoAgregar={autoAgregar} autoEditado={autoEditado} ></ModalAutoEditar>
            <ModalAutoComponent autoAgregar={autoAgregar}></ModalAutoComponent>
            <h1>respuesta de la api: </h1>
                {
                //investigar el uso de map en react y 
                //traspaso de objeto a un componente e imprimir en la pagina
                autos.map(auto => 
                    <div className="card" key={auto.id}>
                        <div className="card-body">
                            <h5 className="card-title">{auto.marca}</h5>
                            <p className="card-text">{auto.id} {auto.color}</p>
                            <hr/>
                            <div className="d-flex justify-content-end">
                                <button className="btn btn-sm btn-outline-primary me-2" onClick={()=>editaAuto(auto)} >Editar</button>
                                <button className="btn btn-sm btn-outline-danger" onClick={() => eliminaAuto(auto.id)}>Eliminar</button>
                            </div>
                        </div>
                    </div>
                )
                }
        </>
    );
}

export default AutoComponent;