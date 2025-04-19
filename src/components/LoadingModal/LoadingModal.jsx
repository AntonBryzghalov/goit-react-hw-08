import { PacmanLoader } from "react-spinners";
import ModalWrapper from "../ModalWrapper/ModalWrapper";

function LoadingModal() {
  return (
    <ModalWrapper>
      <PacmanLoader
        color={"#FB0"}
        loading={true}
        size={100}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </ModalWrapper>
  );
}

export default LoadingModal;
