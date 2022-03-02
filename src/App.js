import {Fragment, useEffect, useState} from "react";
import Header from './components/Layout/Header';
import Main from './components/Layout/Main';
import './App.css';
import Form from "./components/Layout/Form";

function App() {
    const [pokemon, setPokemon] = useState([]);
    const [pokemonFilter, setPokemonFilter] = useState({});
    const [pokemonSearch, setPokemonSearch] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [httpError, setHttpError] = useState();

    useEffect(() => {
        fetchPokemonData().catch((error) => {
            setHttpError(error.message);
        });
    }, []);

    const fetchPokemonData = async () => {
        setIsLoading(true);
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
        if (!response.ok) {
            setIsLoading(false);
            throw new Error('Oooops Something went wrong...');
        }

        const data = await response.json();
        const results = data.results;

        let pokeArray = [];

        for (const key in results) {
            const detailResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${(+key) + 1}/`);
            if (!detailResponse.ok) {
                setIsLoading(false);
                throw new Error('Oooops Something went wrong...');
            }
            const result = await detailResponse.json();

            let data = {
                id: result.id,
                name: result.name,
                height: (result.height / 10),
                weight: (result.weight / 10),
                sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${(+key) + 1}.svg`,
                gameSprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${(+key) + 1}.png`,
                types: {
                    primary: result.types[0].type.name,
                    secondary: !result.types[1] ? 'none' : result.types[1].type.name
                },
                stats: {
                    hp: result.stats[0].base_stat,
                    attack: result.stats[1].base_stat,
                    defense: result.stats[2].base_stat,
                    specialAttack: result.stats[3].base_stat,
                    specialDefense: result.stats[4].base_stat,
                    speed: result.stats[5].base_stat,
                }
            };
            pokeArray.push(data);
        }
        setIsLoading(false);
        setPokemon(pokeArray);
    };

    const filter = (enteredFilter) => {
        setPokemonFilter(enteredFilter);
    };

    const search = (enteredSearch) => {
        setPokemonSearch(enteredSearch);
    };

    return (
        <Fragment>
            <Header/>
            <Form
                pokedata={pokemon}
                getFilter={filter}
                getKeyword={search}
            />
            <Main
                pokedata={pokemon}
                filter={pokemonFilter}
                keyword={pokemonSearch}
                loading={isLoading}
                error={httpError}
            />
        </Fragment>
    );
}

export default App;
