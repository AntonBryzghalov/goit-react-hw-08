import Modal from "react-modal";
import css from "./ModalWrapper.module.css";

Modal.setAppElement("#root");

function ModalWrapper({ isOpen = true, children }) {
  return (
    <Modal isOpen={isOpen} className={css.modal}>
      {children}
    </Modal>
  );
}

export default ModalWrapper;
