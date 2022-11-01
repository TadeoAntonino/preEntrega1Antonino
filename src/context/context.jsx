import { createContext, useState } from "react";

export const cartContext = createContext()

export default function CartContextProvider(props) {
    const [cart, setCart] = useState([]);
    
    function addItemCount(item) {
        let newItem = [...cart]
        let producto = newItem.some( (element) => {
            return element.id === item.id } )

            if(producto === true){
                newItem.map((element)=>{
                    if(element.id === item.id){
                        element.count = element.count + item.count
                    }
                    return (element);
                })

            } else{
                newItem.push(item);
            }
            setCart(newItem)
            console.log("algo", newItem);

    }
    return (
        <cartContext.Provider value={{cart, addItemCount}}>
            {props.children}
        </cartContext.Provider>
    )
    
}