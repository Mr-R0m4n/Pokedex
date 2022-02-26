import PokeItem from "./PokeItem";

const PokeList = (props) => {

    const pokeItems = props.pokedata.map(pokeItem => {
        return (
            <PokeItem
                key={pokeItem.id}
                sprite={pokeItem.sprite}
                name={pokeItem.name}
                height={pokeItem.height}
                weight={pokeItem.weight}
                primaryType={pokeItem.primary}
            />
        )
    })

    return (
        <ul>
            {pokeItems}
        </ul>
    );
};

export default PokeList;