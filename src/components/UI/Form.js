import {Fragment} from "react";

const Form = () => {
    const onSearchHandler = (event) => {
        event.preventDefault();
    };

    return (
        <Fragment>
            <form onSubmit={onSearchHandler}>
                <label>Search:</label>
                <input name={'search'} type={'search'}/>
                <button type={'submit'}>Go</button>
            </form>
            <form>
                <label>Primary Type:</label>
                <select name={'filter'}>
                    <option value={'rock'}>Rock</option>
                    <option value={'fire'}>Fire</option>
                    <option value={'water'}>Water</option>
                    <option value={'bug'}>Bug</option>
                    <option value={'grass'}>Grass</option>
                    <option value={'electric'}>Electric</option>
                    <option value={'poison'}>Poison</option>
                    <option value={'normal'}>Normal</option>
                    <option value={'fighting'}>Fighting</option>
                    <option value={'ghost'}>Ghost</option>
                    <option value={'ground'}>Ground</option>
                    <option value={'psychic'}>Psychic</option>
                    <option value={'dragon'}>Dragon</option>
                    <option value={'ice'}>Ice</option>
                    <option value={'fairy'}>Fairy</option>
                </select>
            </form>
            <form>
                <label>Secondary Type:</label>
                <select name={'filter'}>
                    <option value={'none'}>None</option>
                    <option value={'rock'}>Rock</option>
                    <option value={'fire'}>Fire</option>
                    <option value={'water'}>Water</option>
                    <option value={'bug'}>Bug</option>
                    <option value={'grass'}>Grass</option>
                    <option value={'electric'}>Electric</option>
                    <option value={'poison'}>Poison</option>
                    <option value={'normal'}>Normal</option>
                    <option value={'fighting'}>Fighting</option>
                    <option value={'ghost'}>Ghost</option>
                    <option value={'ground'}>Ground</option>
                    <option value={'psychic'}>Psychic</option>
                    <option value={'dragon'}>Dragon</option>
                    <option value={'ice'}>Ice</option>
                    <option value={'fairy'}>Fairy</option>
                </select>
            </form>
        </Fragment>
    );
};

export default Form;