import { Component } from "react";
import { createPortal } from "react-dom"
import { Overlay, ModalWindow } from "./ModalStyled";

const modalRoot = document.getElementById('modal-root');

class Modal extends Component {

  componentDidMount() {
    document.addEventListener("keydown", this.closeModal);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.closeModal)
  }

  closeModal = ({target, currentTarget, code}) => {
    if (target === currentTarget || code === "Escape") {
      this.props.onClose();
    }
  }

  render() {
    return createPortal(
      <Overlay className="overlay" onClick={this.closeModal}>
        <ModalWindow className="modal">
          {this.props.children}
        </ModalWindow>
      </Overlay>,
      modalRoot
    )
  }
}

export default Modal;