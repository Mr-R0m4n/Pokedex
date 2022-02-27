import {Fragment, useState} from "react";
import Header from './components/Layout/Header';
import Main from './components/Layout/Main';
import Footer from './components/Layout/Footer';
import './App.css';
import Form from "./components/Layout/Form";

function App() {
    const [pokemon, setPokemon] = useState([]);

    const fetchPokemonHandler = async () => {

        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=9');
        if (!response.ok) {
            throw new Error('Something went wrong');
        }

        const data = await response.json();
        const results = data.results;

        let pokeArray = [];

        for (const key in results) {
            const detailResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${(+key) + 1}/`);
            if (!detailResponse.ok) {
                throw new Error('Something went wrong');
            }
            const result = await detailResponse.json();

            let data = {
                id: result.id,
                name: result.name,
                height: (result.height / 10),
                weight: (result.weight / 10),
                sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${(+key) + 1}.svg`,
                primary: result.types[0].type.name,
                secondary: !result.types[1] ? null : result.types[1].type.name
            }
            pokeArray.push(data);
        }
        setPokemon(pokeArray)
    };

    return (
        <Fragment>
            <Header/>
            <Form/>
            <Main pokedata={pokemon}/>
            <button type={'button'} onClick={fetchPokemonHandler}>Catch them all!</button>
            <Footer/>
        </Fragment>
    );
}

export default App;
