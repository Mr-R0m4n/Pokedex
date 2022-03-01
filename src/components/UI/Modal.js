import ReactDOM from "react-dom";

import css from './Modal.module.css';

const Backdrop = () => {
    return <div className={css.backdrop}>{}</div>;
};

const ModalOverlay = (props) => {
    return (
        <div className={css.modal}>
            <div>{props.children}</div>
        </div>
    );
};

const Modal = (props) => {
    return (
        <>
            {ReactDOM.createPortal(<Backdrop hideCart={props.hideCart}/>, document.getElementById("overlays"))}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, document.getElementById("overlays"))}
        </>
    );
};

export default Modal;