import { useState, useEffect } from "react";
import Card from "../Card/Card";
import {getProduct} from "../../mockAPI/mockAPI";

function ItemList (){
    
        const [drinkList, setDrinkList] = useState([]);
        
        useEffect(
            () => {
                getProduct().then((data)=>{
                    setDrinkList(data);
                });
            },[]
        )
    
        return(
            <>

            {drinkList.map( (product)=>{
                return <Card key={product.id} img={product.img} title={product.title} price={product.price} />
                })
            }
    
            </>
        );
}

export default ItemList;