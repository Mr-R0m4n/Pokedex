import PokeItem from "./PokeItem";

import css from './PokeList.module.css';
import {useEffect, useState} from "react";
import NoMatch from "../UI/NoMatch";

const PokeList = (props) => {
    const [filteredPokedata, setFilteredPokedata] = useState([]);

    useEffect(() => {
        filterPokedata(props.pokedata, props.filter, props.keyword);
    }, [props.filter, props.pokedata, props.keyword]);

    const filterPokedata = (pokemons, pokemonFilter, keyword) => {
        let filteredPokemon;
        let searchedPokemon;
        if (pokemonFilter.primary === 'all' && pokemonFilter.secondary === 'all') {
            filteredPokemon = pokemons;
        } else if (pokemonFilter.primary !== 'all' && pokemonFilter.secondary === 'all') {
            filteredPokemon = pokemons.filter(
                pokemon => pokemon.types.primary === pokemonFilter.primary
            );
        } else if (pokemonFilter.primary === 'all' && pokemonFilter.secondary !== 'all') {
            filteredPokemon = pokemons.filter(
                pokemon => pokemon.types.secondary === pokemonFilter.secondary
            );
        } else {
            filteredPokemon = pokemons.filter(
                pokemon => {
                    return JSON.stringify(pokemon.types) === JSON.stringify(pokemonFilter);
                });

        }
        searchedPokemon = filteredPokemon.filter(pokemon => pokemon.name.includes(keyword.toLowerCase()));
        setFilteredPokedata(searchedPokemon);
    };

    const pokeItems = filteredPokedata.map(pokeItem => {
        return (
            <PokeItem
                key={pokeItem.id}
                sprite={pokeItem.sprite}
                name={(pokeItem.name).charAt(0).toUpperCase() + (pokeItem.name).slice(1)}
                height={pokeItem.height}
                weight={pokeItem.weight}
                primaryType={(pokeItem.types.primary).charAt(0).toUpperCase() + (pokeItem.types.primary).slice(1)}
                secondaryType={pokeItem.types.secondary === 'none' ? '' : (pokeItem.types.secondary).charAt(0).toUpperCase() + (pokeItem.types.secondary).slice(1)}
                // showModal={showModalHandler}
            />
        );
    });

    return (
        <ul className={css.list}>
            {!filteredPokedata.length < 1 ? pokeItems : <NoMatch/>}
        </ul>
    );
};

export default PokeList;