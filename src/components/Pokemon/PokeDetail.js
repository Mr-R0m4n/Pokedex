import Modal from "../UI/Modal";

import css from './PokeDetail.module.css';

const PokeDetail = (props) => {

    console.log(props.pokedata)

    let showType;
    if (props.secondary.length > 0) {
        showType = <span>
            <h3>Type:</h3>
            <p>{props.primary}</p>
            <p>/</p>
            <p>{props.secondary}</p>
        </span>;
    } else {
        showType = <span>
            <h3>Type:</h3>
            <p>{props.primary}</p>
        </span>;
    }

    return (
        <Modal hideModal={props.hideModal}>
            <section className={css.detailCard} style={props.style}>
                <img className={css.sprite} src={props.pokedata.sprite} alt={props.name}/>
                <h1>{props.name}</h1>
                <br/>
                {showType}
                <span>
                    <h3>Height:</h3>
                    <p>{props.pokedata.height} m</p>
                </span>
                <span>
                    <h3>Weight:</h3>
                    <p>{props.pokedata.weight} kg</p>
                </span>
                <br/>
                <h2>Stats</h2>
                <span>
                    <h3>Health Points:</h3>
                    <p>{props.pokedata.stats.hp}</p>
                </span>
                <span>
                    <h3>Attack:</h3>
                    <p>{props.pokedata.stats.attack}</p>
                </span>
                <span>
                    <h3>Defense:</h3>
                    <p>{props.pokedata.stats.defense}</p>
                </span>
                <span>
                    <h3>Special Attack:</h3>
                    <p>{props.pokedata.stats.specialAttack}</p>
                </span>
                <span>
                    <h3>Special Defense:</h3>
                    <p>{props.pokedata.stats.specialDefense}</p>
                </span>
                <span>
                    <h3>Speed:</h3>
                    <p>{props.pokedata.stats.speed}</p>
                </span>
                <br/>
                <img className={css.gameSprite} src={props.pokedata.gameSprite} alt={props.name}/>
            </section>
        </Modal>
    );
};

export default PokeDetail;