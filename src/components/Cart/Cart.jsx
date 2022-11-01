import { cartContext } from '../../context/context';
import { useContext } from 'react';
import CartItem from './CartItem';
import { Link } from 'react-router-dom';

const Cart = () => {
  const {cart, totalPrecio} = useContext(cartContext)
  const {vaciarCarrito} = useContext(cartContext)
  

  return (
    <div className='container'>
      <div className='container'>{cart.map((item, index) =>
        <CartItem key={index} title={item.title} id={item.id} count= {item.count} img={item.img}/> )}
      </div>
      <div className='precio'>
        <h3>Total a pagar:</h3>
        <h2>$ {totalPrecio()}</h2>
      </div>
      <div className='container'>
          <button onClick={vaciarCarrito}>Vaciar carrito</button>
          <Link to = "/checkout">
            <button>Finalizar Comprar</button>
          </Link>
      </div>
    </div>
  )
}

export default Cart;