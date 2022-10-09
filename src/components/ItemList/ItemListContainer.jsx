import ItemList from "./ItemList";
import "./ItemListContainer.css";

function ItemListContainer (props){

    return(
        <>
        <h1 className="titleItemList">{props.greeting}</h1>
        <div className="itemListContainerStyle">
        <ItemList/>
        </div>
        </>
    );
}

export default ItemListContainer;