import Card from "../UI/Card";

import css from './PokeItem.module.css'

const PokeItem = (props) => {
    return (
        <li className={css}>
            <Card>
                <img src={props.sprite} alt={props.name}/>
                <h1>{props.name}</h1>
                <p>{props.primaryType}</p>
            </Card>
        </li>
    );
};

export default PokeItem;