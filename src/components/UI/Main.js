import {Fragment} from "react";
import Form from "./Form";
import PokeList from "../Pokemon/PokeList";

import css from './Main.module.css'

const Main = () => {
    return (
        <main className={css.main}>
            <Form/>
            <PokeList/>
        </main>
    );
};

export default Main;