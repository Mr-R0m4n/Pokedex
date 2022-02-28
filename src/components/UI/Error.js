import classes from './Error.module.css';
import pokeball from '../../assets/pokeball.svg';

const Error = (props) => {
    return (
        <div className={classes.error}>
            <img src={pokeball} alt={'pokeball'}/>
            <h1>{props.error}</h1>
        </div>
    );
};

export default Error;
