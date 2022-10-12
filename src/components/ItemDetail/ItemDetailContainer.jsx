import ItemDetail from './ItemDetail';
import { useState, useEffect } from 'react';
import {getDetailProduct} from '../../mockAPI/mockAPI';
import {useParams} from 'react-router-dom';


function ItemDetailContainer() {

    const [cafe, setCafe] = useState ([]);
    const {id} = useParams();
    const {img, title, detail, ml, price, stock} = cafe;

    useEffect(() => {
        getDetailProduct(id).then((data) => {
            setCafe(data);
        });
    }, [id]);

    return(
        <ItemDetail
          img= {img}
          title= {title}
          detail= {detail}
          ml= {ml}
          price= {price}
          stock= {stock}
        />
    )
}


export default ItemDetailContainer;