import Modal from "../UI/Modal";

import css from './PokeDetail.module.css';

const PokeDetail = (props) => {

    let showType;
    if (props.secondaryType.length > 0) {
        showType = <span>
            <h3>{props.primaryType}</h3>
            <h3>/</h3>
            <h3>{props.secondaryType}</h3>
        </span>;
    } else {
        showType = <span>
            <h3>{props.primaryType}</h3>
        </span>;
    }

    return (
        <Modal hideModal={props.hideModal}>
            <section className={css.detailCard} style={props.style}>
                <img src={props.sprite} alt={props.name}/>
                <h1>{props.name}</h1>
                {showType}
            </section>
        </Modal>
    );
};

export default PokeDetail;