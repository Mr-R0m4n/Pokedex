import ReactDOM from "react-dom";

import css from './Modal.module.css';

const Backdrop = (props) => {
    return <div onClick={props.hideModal} className={css.backdrop}>{}</div>;
};

const ModalOverlay = (props) => {
    return (
        <div onClick={props.hideModal} className={css.modal}>
            <div>{props.children}</div>
        </div>
    );
};

const Modal = (props) => {
    return (
        <>
            {ReactDOM.createPortal(<Backdrop hideModal={props.hideModal}/>, document.getElementById("overlays"))}
            {ReactDOM.createPortal(<ModalOverlay hideModal={props.hideModal}>{props.children}</ModalOverlay>, document.getElementById("overlays"))}
        </>
    );
};

export default Modal;