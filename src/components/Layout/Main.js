import PokeList from "../Pokemon/PokeList";

import css from './Main.module.css';
import LoadingSpinner from "../UI/LoadingSpinner";
import Error from "../UI/Error";

const Main = (props) => {

    if (props.loading) {
        return (
            <section className={'centered'}>
                <LoadingSpinner/>
            </section>
        );
    }

    if (props.error) {
        return (
            <section className={'centered'}>
                <Error error={props.error}/>
            </section>

        );
    }

    return (
        <main className={css.main}>
            <PokeList
                pokedata={props.pokedata}
                filter={props.filter}
                keyword={props.keyword}
                showModal={props.showModal}
            />
        </main>
    );
};

export default Main;