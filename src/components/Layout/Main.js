import PokeList from "../Pokemon/PokeList";

import css from './Main.module.css'

const Main = () => {
    return (
        <main className={css.main}>
            <PokeList/>
        </main>
    );
};

export default Main;