import css from './Form.module.css';
import {useEffect, useState} from "react";

const Form = (props) => {
    const [filter, setFilter] = useState({
        primary: 'all',
        secondary: 'all'
    });

    const [keyword, setKeyword] = useState('');

    useEffect(() => {
        props.getFilter(filter);
        props.getKeyword(keyword);
    },);

    const primaryFilterHandler = (event) => {
        const selectedPrimaryFilter = event.target.value;
        setFilter(prevState => ({
            primary: selectedPrimaryFilter,
            secondary: prevState.secondary,
        }));
    };

    const secondaryFilterHandler = (event) => {
        const selectedSecondaryFilter = event.target.value;
        setFilter(prevState => ({
            primary: prevState.primary,
            secondary: selectedSecondaryFilter
        }));
    };

    const searchHandler = (event) => {
        setKeyword(event.target.value);
    };

    const setOptions = (types) => {
        const filteredTypes = types.filter(function (item, pos) {
            return types.indexOf(item) === pos;
        });
        return filteredTypes.map(type => {
            return <option key={type} value={type}>{type.charAt(0).toUpperCase() + type.slice(1)}</option>;
        });
    };
    const primaryOptions = setOptions(props.pokedata.map(pokemon => pokemon.types.primary).sort());
    const secondaryOptions = setOptions(props.pokedata.map(pokemon => pokemon.types.secondary).sort());

    return (
        <aside className={css.form}>
            <div className={css.search}>
                <input placeholder={'Search:'} onChange={searchHandler} name={'search'} type={'search'}/>
            </div>
            <div className={css.filter}>
                <select
                    value={filter.primary}
                    onChange={primaryFilterHandler}
                >
                    <option value={'all'}>Primary Type</option>
                    {primaryOptions}
                </select>
                <select
                    value={filter.secondary}
                    onChange={secondaryFilterHandler}
                >
                    <option value={'all'}>Secondary Type</option>
                    {secondaryOptions}
                </select>
            </div>
        </aside>
    );
};

export default Form;