import { useState, useEffect } from 'react';
import {getDetailProduct} from '../../mockAPI/mockAPI';
import {ItemDetail} from './ItemDetail';
import {useParams} from 'react-router-dom';


function ItemDetailContainer(props) {

    const [cafe, setCafe] = useState ([]);
    const {id} = useParams();

    useEffect(() => {
        getDetailProduct(id).then((data) => {
            setCafe(data);
        });
    }, [id]);

    return(
        <ItemDetail
          img= {cafe.img}
          title= {cafe.title}
          detail= {cafe.detail}
          ml= {cafe.ml}
          price= {cafe.price}
        />
    )
}


export default ItemDetailContainer;