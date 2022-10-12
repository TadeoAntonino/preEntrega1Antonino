import { useState, useEffect } from "react";
import Card from "../Card/Card";

function ItemList (info){
    
        const [drinkList, setDrinkList] = useState([]);
        
        useEffect(
            () => {

               if (info?.productList){
                setDrinkList(info?.productList);
               }
 
            },[info]
        )

        return(
            <>

            {drinkList?.length && (drinkList?.map( (product, index)=>{
                return (<Card key={index} id={product?.id} img={product?.img} title={product?.title} price={product?.price} />)
                }))
            }
    
            </>
        );
}

export default ItemList;