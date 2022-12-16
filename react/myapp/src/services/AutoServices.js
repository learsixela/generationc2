//axios
import axios from 'axios';

//establer la ruta por default
const rutaBase = "http://localhost:9080/api2";

// funcion de llamado
const getAllAutos = async()=>{
    const respuesta = await axios.get(rutaBase+"/autos/getall");
    console.log(respuesta.data);
    return respuesta.data;
}

const getAuto = async(id)=>{
    const respuesta = await axios.get(rutaBase+"/obtener/auto/"+id);
    console.log(respuesta.data);
    return respuesta.data;
}

export {getAllAutos,getAuto}