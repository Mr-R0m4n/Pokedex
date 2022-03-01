import classes from './NoMatch.module.css';
import pokeball from '../../assets/pokeball.svg';

const NoMatch = () => {
    return (
        <div className={classes.notAvailable}>
            <img src={pokeball} alt={'pokeball'}/>
            <h1>No matches...</h1>
        </div>
    );
};

export default NoMatch;