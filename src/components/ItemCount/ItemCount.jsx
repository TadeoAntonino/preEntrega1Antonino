import { useState } from 'react';

export default function ItemCount({stock, initial}) {

    const [count, setCount] = useState (initial);

    function quitar() {
     if(count > 1)   setCount (count - 1);
        
    }

    function agregar() {
     if(count < stock)   setCount (count + 1);
        
    }

    return (
        <div>
            <h3>Elige la cantidad</h3>
            <br />
            <button onClick={quitar}>-</button>
            <div>{count}</div>
            <button onClick={agregar}>+</button>
        </div>
    )
}