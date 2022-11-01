import React from 'react'
import './/Form.css'
import { cartContext } from '../../context/context'
import { useContext, useState, useEffect } from 'react';
import {createOrder} from '../../services/firebase'
import { Link } from 'react-router-dom';


const Form = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [edad, setEdad] = useState("");
  const [celular, setCelular] = useState("");
  const [direccion, setDireccion] = useState("");
  const [crearOrden, setCrearOrden] = useState(null);
  const {cart, vaciarCarrito, totalPrecio} = useContext(cartContext);
  const [mensajeError, setMensajeError] = useState(null);
  const [numeroOrden, setNumeroOrden] = useState("")

  useEffect(() => {
    if(crearOrden === true){
      let orden = [...cart]
      orden = {
      buyer: { nombre, apellido, edad, celular, direccion },
      items: orden,
      date: new Date(),
      total: totalPrecio(),
    }
      
    createOrder(orden)
      .then((data) => {
        setNumeroOrden([data]);
        vaciarCarrito();
      })
      .catch((error) => {
        setMensajeError(error.message);
      });
    }
  }, [crearOrden]);


  function onNombreChange (evt){
    setNombre(evt.target.value);
  }

  function onApellidoChange (evt){
    setApellido(evt.target.value);
  }

  function onEdadChange (evt){
    setEdad(evt.target.value);
  }

  function onCelularChange (evt){
    setCelular(evt.target.value);
  }

  function onDireccionChange (evt){
    setDireccion(evt.target.value);
  }


  function onEnviar(){
    setCrearOrden(true) 
  }


  
  if(cart.length !== 0 || numeroOrden !== ""){
    return (
      mensajeError ? (
        <p className="mensajeError">{mensajeError}</p>
      ) :
      <>
        
        {
          numeroOrden !== "" ? 
          <div className='container'>
            <h1>¡Gracias por tu compra!</h1>
            <br />
            <p>Tu número de orden es:</p>
            <h3>{numeroOrden}</h3>
          </div>:
          
          <div className='containerForm'>
          <h2>Tus datos:</h2>
  
          <div>
            <input  className='dataForm' type="text" onChange={evt => onNombreChange(evt)} />
          </div>
  
          <div>
            <input  className='dataForm' type="text" onChange={evt => onApellidoChange(evt)} />
          </div>
  
          <div>
            
            <input  className='dataForm' type="number" onChange={evt => onEdadChange(evt)} />
          </div>
  
          <div>
            
            <input  className='dataForm' type="number" onChange={evt => onCelularChange(evt)} />
          </div>
  
          <div>
            
            <input  className='dataForm' type="text" onChange={evt => onDireccionChange(evt)} />
          </div>
  
  
            <button
            disabled={!(nombre !== "" && apellido !== "" && edad !== "" && celular !== "" && direccion !=="")}
            onClick={evt => onEnviar(evt)}>Crear Orden</button>
          
        </div>
        }
      </>
    )

  }else{
    return(
      <>
      <div className='carritoVacio'>
        <h1>¡Ops! todavía no tenés nada en tu carrito</h1>
      <Link to ="/"><button>Empezá a comprar</button></Link>
      </div>
      
      </>
    )

  }
}

export default Form;