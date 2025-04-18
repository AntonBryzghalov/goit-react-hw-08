import { PacmanLoader } from "react-spinners";
import Modal from "react-modal";
import css from "./LoadingModal.module.css";

Modal.setAppElement("#root");

function LoadingModal() {
  return (
    <Modal isOpen={true} className={css.modal}>
      <PacmanLoader
        color={"#FB0"}
        loading={true}
        size={100}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </Modal>
  );
}

export default LoadingModal;
