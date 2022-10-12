import ItemCount from "../ItemCount/ItemCount";
import Button from "../Card/Button/Button";
import "./ItemDetail.css";

function ItemDetail(props) {
  return (
    <div className="cardDetail">
      <div>
        <img className="cardImgDetail" src={props.img} alt="" />
      </div>
      <div className="cardDataDetail">
        <h2>{props.title}</h2>
        <p>{props.detail}</p>
        <p>{props.ml}</p>
        <h4>${props.price}</h4>
      </div>
      <ItemCount stock={props.stock} initial={1} />
      <Button text="Agregar al carrito" />
    </div>
  );
}

export default ItemDetail;
