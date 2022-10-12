import ItemList from "./ItemList";
import "./ItemListContainer.css";
import {useParams} from 'react-router-dom';
import { getProduct, getProductCategory } from "../../mockAPI/mockAPI";
import { useEffect, useState } from "react";

function ItemListContainer (props){

    const [productList, setProductList] = useState([]);

    const {id} = useParams();

    useEffect(
      () => {
          getProduct().then((data)=>{
              setProductList(data);
          });
      },[]
  )

    useEffect(() => {

        if (id === undefined) {
          getProduct().then((data) => {
            setProductList(data);
          });
        } else {
          getProductCategory(id).then((data) => {
            setProductList(data);
          
          });
        }
      }, [id]);

    return(
        <>
        <h1 className="titleItemList">{props.greeting}</h1>
        <div className="itemListContainerStyle">
        <ItemList productList={productList}/>
        </div>
        </>
    );
}

export default ItemListContainer;


/*

function ItemListContainer(props) {

  useEffect(() => {
    if (categoryID === undefined) {
      getCursos().then((data) => {
        setCoursesList(data);
      });
    } else {
      getCursosByCategory(categoryID).then((data) => {
        setCoursesList(data);
      });
    }
  }, [categoryID]);


  */