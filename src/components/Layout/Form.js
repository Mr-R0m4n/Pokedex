import css from './Form.module.css';
import {useEffect, useRef} from "react";

const Form = (props) => {
    const primaryTypeRef = useRef('');

    useEffect(() => {
        props.getFilter(primaryTypeRef.current.value)
    },[primaryTypeRef.current.value])

    const primaryFilterHandler = () => {
        props.getFilter(primaryTypeRef.current.value)
    }

    return (
        <aside className={css.form}>
            <form className={css.search}>
                <label>Search:</label>
                <input name={'search'} type={'search'}/>
                <button type={'submit'}>Go</button>
            </form>
            <form className={css.filter}>
                <label>Primary Type:</label>
                <select ref={primaryTypeRef} onChange={primaryFilterHandler} name={'filter'}>
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
                <select name={'filter'}>
                    <option defaultValue={'all'}>All</option>
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
            </form>
        </aside>
    );
};

export default Form;