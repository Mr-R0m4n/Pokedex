import Modal from "../UI/Modal";

const PokeDetail = (props) => {
    return (
        <Modal hideModal={props.hideModal}>
            <img src={'https://cdn.pixabay.com/photo/2021/12/26/17/31/pokemon-6895600_1280.png'} alt={'charmander'}/>
            <h1>POKENAME</h1>
            <p>POKETYPE</p>
            <p>POKESTUFF</p>
            <p>POKESTUFF</p>
        </Modal>
    );
};

export default PokeDetail;