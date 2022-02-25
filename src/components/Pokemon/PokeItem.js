import Card from "../UI/Card";

const PokeItem = () => {
    return (
        <li>
            <Card>
                <img src={'https://cdn.pixabay.com/photo/2021/12/26/17/31/pokemon-6895600_1280.png'} alt={'charmander'}/>
                <h1>POKENAME</h1>
                <p>POKETYPE</p>
                <p>POKESCRIPTION</p>
            </Card>
        </li>
    );
};

export default PokeItem;