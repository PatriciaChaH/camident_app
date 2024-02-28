//import {useState, useEffect} from 'react';
import Layout from "../../Components/Layout";
import Tarjeta from "../../Components/Tarjeta";

export default function Productos() {
  //const[items, setItems] = useState(null)

 // useEffect(() => {
   // fetch('https://api.escuelajs.co/api/v1/products')
    //  .then(response => console.log (response.json()))

 // }, [])

    return (
      <Layout>
        Productos
        <div className="flex justify-between">
        <Tarjeta categoria = 'Materiales' imagen = 'src/assets/Photos/resina.png' titulo = 'Resina' 
          producto = 'Resina' precio = 'COP 82.000'/>
        <Tarjeta categoria = 'Equipos' imagen = 'src/assets/Photos/resina.png' titulo = 'Lámpara' 
          producto = 'Pieza de mano' precio = 'COP 520.000'/>
        <Tarjeta categoria = 'Instrumental' imagen = 'src/assets/Photos/resina.png' titulo = 'Lámpara' 
          producto = 'Pieza de mano' precio = 'COP 520.000'/>
        <Tarjeta categoria = 'Unidades' imagen = 'src/assets/Photos/resina.png' titulo = 'Lámpara' 
          producto = 'Pieza de mano' precio = 'COP 520.000'/>
        </div>
        
       
      </Layout>

    )
  }