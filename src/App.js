import {Fragment, useState} from "react";
import Header from './components/Layout/Header';
import Main from './components/Layout/Main';
import Footer from './components/Layout/Footer';
import './App.css';
import Form from "./components/Layout/Form";

function App() {
    const [pokemon, setPokemon] = useState([]);

    const fetchPokemonHandler = async () => {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=3');
        if (!response.ok) {
            throw new Error('Something went wrong');
        }

        const data = await response.json();
        console.log(data);
        let loadedPokemon = [];
        for (let id = 0; id <= 2; id++) {
            loadedPokemon.push({
                name: data.results[id].name,
                url: data.results[id].url
            });
        }
        setPokemon(loadedPokemon);
        console.log(pokemon);
    };


    return (
        <Fragment>
            <Header/>
            <button type={'button'} onClick={fetchPokemonHandler}>Catch them all!</button>
            <Form/>
            <Main/>
            <Footer/>
        </Fragment>
    );
}

export default App;
