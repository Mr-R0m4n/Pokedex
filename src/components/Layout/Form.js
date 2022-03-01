import css from './Form.module.css';
import {useEffect, useState} from "react";

const Form = (props) => {
    const [filter, setFilter] = useState({
        primary: 'all',
        secondary: 'all'
    })

    useEffect(() => {
        props.getFilter(filter)
    },)

    const primaryFilterHandler = (event) => {
        const selectedPrimaryFilter = event.target.value
        setFilter(prevState => ({
            primary: selectedPrimaryFilter,
            secondary: prevState.secondary,
        }));
    }

    const secondaryFilterHandler = (event) => {
        const selectedSecondaryFilter = event.target.value
        setFilter(prevState => ({
            primary: prevState.primary,
            secondary: selectedSecondaryFilter
        }));
    }

    return (
        <aside className={css.form}>
            <form className={css.search}>
                <label>Search:</label>
                <input name={'search'} type={'search'}/>
                <button type={'submit'}>Go</button>
            </form>
            <div className={css.filter}>
                <label>Primary Type:</label>
                <select
                    value={filter.primary}
                    onChange={primaryFilterHandler}
                >
                    <option value={'all'}>All</option>
                    <option value={'bug'}>Bug</option>
                    <option value={'dragon'}>Dragon</option>
                    <option value={'electric'}>Electric</option>
                    <option value={'fairy'}>Fairy</option>
                    <option value={'fighting'}>Fighting</option>
                    <option value={'fire'}>Fire</option>
                    <option value={'ghost'}>Ghost</option>
                    <option value={'grass'}>Grass</option>
                    <option value={'ground'}>Ground</option>
                    <option value={'ice'}>Ice</option>
                    <option value={'normal'}>Normal</option>
                    <option value={'poison'}>Poison</option>
                    <option value={'psychic'}>Psychic</option>
                    <option value={'rock'}>Rock</option>
                    <option value={'water'}>Water</option>
                </select>
                <label>Secondary Type:</label>
                <select
                    value={filter.secondary}
                    onChange={secondaryFilterHandler}
                >
                    <option value={'all'}>All</option>
                    <option value={'none'}>None</option>
                    <option value={'bug'}>Bug</option>
                    <option value={'dragon'}>Dragon</option>
                    <option value={'electric'}>Electric</option>
                    <option value={'fairy'}>Fairy</option>
                    <option value={'fighting'}>Fighting</option>
                    <option value={'fire'}>Fire</option>
                    <option value={'flying'}>Flying</option>
                    <option value={'ghost'}>Ghost</option>
                    <option value={'grass'}>Grass</option>
                    <option value={'ground'}>Ground</option>
                    <option value={'ice'}>Ice</option>
                    <option value={'normal'}>Normal</option>
                    <option value={'poison'}>Poison</option>
                    <option value={'psychic'}>Psychic</option>
                    <option value={'rock'}>Rock</option>
                    <option value={'steel'}>Fairy</option>
                    <option value={'water'}>Water</option>
                </select>
            </div>
        </aside>
    );
};

export default Form;