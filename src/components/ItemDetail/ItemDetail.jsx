import ItemCount from "../ItemCount/ItemCount";

function ItemDetail (props){
    return (
        <div className="card">
            <div>
                <img className="cardImg" src={props.img} alt="" />
            </div>
            <div className="cardDetail">
                <h2>{props.title}</h2>
                <p>{props.detail}</p>
                <p>{props.ml}</p>
                <h4>${props.price}</h4>
            </div>
            <ItemCount/>
            <Button />
        </div>
    )
}

export default ItemDetail;