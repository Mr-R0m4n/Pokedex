import PokeItem from "./PokeItem";

const PokeList = () => {

    const pokemon = ["pikachu", "bisasam", "taubsi"];
    const pokeItems = pokemon.map(pokeItem => {
        return <PokeItem/>
    })

    return (
        <ul>
            {pokeItems}
        </ul>
    );
};

export default PokeList;