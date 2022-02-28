import {Fragment, useEffect, useState} from "react";
import Header from './components/Layout/Header';
import Main from './components/Layout/Main';
import Footer from './components/Layout/Footer';
import './App.css';
import Form from "./components/Layout/Form";

function App() {
    const [pokemon, setPokemon] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [httpError, setHttpError] = useState();

    useEffect(() => {
        fetchPokemonData().catch((error) => {
            setHttpError(error.message);
        });
    }, []);

    const fetchPokemonData = async () => {
        setIsLoading(true);
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=9');
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
            console.log(result);

            let data = {
                id: result.id,
                name: result.name,
                height: (result.height / 10),
                weight: (result.weight / 10),
                sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${(+key) + 1}.svg`,
                primary: result.types[0].type.name,
                secondary: !result.types[1] ? null : result.types[1].type.name
            };
            pokeArray.push(data);
        }
        setIsLoading(false);
        setPokemon(pokeArray);
        console.log(pokeArray);
    };



    return (
        <Fragment>
            <Header/>
            <Form/>
            <Main
                pokedata={pokemon}
                loading={isLoading}
                error={httpError}
            />
            <Footer/>
        </Fragment>
    );
}

export default App;
