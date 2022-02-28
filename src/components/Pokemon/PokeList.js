import PokeItem from "./PokeItem";

import css from './PokeList.module.css'

const PokeList = (props) => {

    const pokeItems = props.pokedata.map(pokeItem => {
        return (
            <PokeItem
                key={pokeItem.id}
                sprite={pokeItem.sprite}
                name={(pokeItem.name).charAt(0).toUpperCase() + (pokeItem.name).slice(1)}
                height={pokeItem.height}
                weight={pokeItem.weight}
                primaryType={(pokeItem.primary).charAt(0).toUpperCase() + (pokeItem.primary).slice(1)}
                secondaryType={pokeItem.secondary ? (pokeItem.secondary).charAt(0).toUpperCase() + (pokeItem.secondary).slice(1) : ''}
            />
        )
    })

    return (
        <ul className={css.list}>
            {pokeItems}
        </ul>
    );
};

export default PokeList;