import css from './Form.module.css';
import {useEffect, useState} from "react";

const Form = (props) => {
    const [filter, setFilter] = useState({
        primary: 'all',
        secondary: 'all'
    });
    const [keyword, setKeyword] = useState('');
    const [primaryOptions, setPrimaryOptions] = useState()
    const [secondaryOptions, setSecondaryOptions] = useState()

    useEffect(() => {
        props.getFilter(filter);
        props.getKeyword(keyword);
    },);

    useEffect(() => {
        const getPrimaryOptions = (props.allTypes.map(type => {
            if (type.secondary.match(filter.secondary) || filter.secondary === 'all') {
                return type.primary;
            } else
                return null;
        })).sort();

        const getSecondaryOptions = (props.allTypes.map(type => {
            if (type.primary.match(filter.primary) || filter.primary === 'all') {
                return type.secondary;
            } else
                return null;
        })).sort();

        const setSelectionOptions = (options) => {
            const reducedOptions = [...new Set(options.map(option => option))];

            return reducedOptions.map(type => {
                if (type !== null)
                    return <option key={type} value={type}>{type.charAt(0).toUpperCase() + type.slice(1)}</option>;
            });
        }

        setPrimaryOptions(setSelectionOptions(getPrimaryOptions))
        setSecondaryOptions(setSelectionOptions(getSecondaryOptions))
    },[props.allTypes, filter])

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