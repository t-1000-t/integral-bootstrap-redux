import React, { Component, createRef } from 'react';
import { createPortal } from 'react-dom';
import "./Modal.css";

const ROOT_MODAL = document.getElementById('root-modal');


class Modal extends Component {
    modalRef = createRef();

    componentDidMount() {
        window.addEventListener('keydown', this.handleKey);
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKey);
    }

    handleKey = e => {
        if (e.code !== 'Escape') return;
        this.props.onClose();
    };

    handleMouseClick = e => {
        if (e.target && this.modalRef.current !== e.target) return;
        this.props.onClose();
    };

    render() {
        const { id, largeImageURL } = this.props;
        return createPortal(
            <div
                className="overlay"
                ref={this.modalRef}
                onClick={this.handleMouseClick}
                role="presentation"
            >
                <div className="modal">
                    <img src={largeImageURL} alt="img" id={id} />
                </div>
            </div>,
            ROOT_MODAL,
        );
    }
}

export default Modal;
