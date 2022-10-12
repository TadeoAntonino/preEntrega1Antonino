import Button from './Button/Button';
import { Link } from 'react-router-dom';
import "./Card.css";

function Card (props){
    console.log(props, "card");
    return (
        <div className="card" key={props.key}>
            <div>
                <img className="cardImg" src={props?.img} alt="" />
            </div>
            <div className="cardDetail">
                <h2>{props?.title}</h2>
                <p>{props?.detail}</p>
                <h4>${props?.price}</h4>
            </div>
                <Link to={`/item/${props?.id}`}>
                    <Button text="Ver más" />
                </Link>
            </div>
    )
}

export default Card;