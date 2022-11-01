import { cartContext } from '../../context/context'
import { useContext } from 'react';
import './/CartItem.css';

const CartItem = ({id, title, img, count}) => {
    const {deleteItem} = useContext(cartContext)
    
  return (

   <div className='container'>
        <button onClick={()=>deleteItem(id)}>🗑</button>
        <img src={img} alt="foto" />
        <div className='title'>{title}</div>
        <div className='cantidad'>{count}</div>
   </div>
  )
}

export default CartItem;