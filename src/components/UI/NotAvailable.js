import classes from './NotAvailable.module.css';
import pokeball from '../../assets/pokeball.svg';

const NotAvailable = () => {
    return (
        <div className={classes.notAvailable}>
            <img src={pokeball} alt={'pokeball'}/>
            <h1>No Pokemons Available...</h1>
        </div>
    );
};

export default NotAvailable;