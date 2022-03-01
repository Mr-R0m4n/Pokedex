import PokeItem from "./PokeItem";

import css from './PokeList.module.css';
import {useEffect, useState} from "react";
import NotAvailable from "../UI/NotAvailable";

const PokeList = (props) => {
    const [filteredPokedata, setFilteredPokedata] = useState([]);

    useEffect(() => {
        filterPokedata(props.pokedata, props.filter);
    }, [props.filter, props.pokedata]);

    const filterPokedata = (pokemons, pokemonfilter) => {
        let filteredPokemon = [];
        if (pokemonfilter.primary === 'all' && pokemonfilter.secondary === 'all') {
            filteredPokemon = pokemons;
        } else if (pokemonfilter.primary !== 'all' && pokemonfilter.secondary === 'all') {
            filteredPokemon = pokemons.filter(
                pokemon => pokemon.types.primary === pokemonfilter.primary
            );
        } else if (pokemonfilter.primary === 'all' && pokemonfilter.secondary !== 'all') {
            filteredPokemon = pokemons.filter(
                pokemon => pokemon.types.secondary === pokemonfilter.secondary
            );
        } else {
            filteredPokemon = pokemons.filter(
                pokemon => {
                    return JSON.stringify(pokemon.types) === JSON.stringify(pokemonfilter)
                });

        }
        setFilteredPokedata(filteredPokemon);
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
            />
        );
    });

    return (
        <ul className={css.list}>
            {!filteredPokedata.length < 1 ? pokeItems : <NotAvailable/>}
        </ul>
    );
};

export default PokeList;