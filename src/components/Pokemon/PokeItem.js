import Card from "../UI/Card";

import css from './PokeItem.module.css'

const PokeItem = (props) => {

    return (
        <li>
            <Card>
                <div className={css.pokeItem}>
                    <img src={props.sprite} alt={props.name}/>
                    <h1>{props.name}</h1>
                    <p>{props.primaryType}</p>
                </div>
            </Card>
        </li>
    );
};

export default PokeItem;