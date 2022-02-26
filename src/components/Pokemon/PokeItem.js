import Card from "../UI/Card";

const PokeItem = (props) => {
    return (
        <li>
            <Card>
                <img src={props.sprite} alt={props.name}/>
                <h1>{props.name}</h1>
                <p>{props.primaryType}</p>
            </Card>
        </li>
    );
};

export default PokeItem;