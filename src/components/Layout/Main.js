import PokeList from "../Pokemon/PokeList";

import css from './Main.module.css'

const Main = (props) => {
    return (
        <main className={css.main}>
            <PokeList pokedata={props.pokedata}/>
        </main>
    );
};

export default Main;