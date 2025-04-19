import { useDispatch } from "react-redux";
import ModalWrapper from "../ModalWrapper/ModalWrapper";
import css from "./DeleteContactModal.module.css";
import { setDeleteContactId } from "../../redux/contacts/slice";
import { deleteContact } from "../../redux/contacts/operations";

function DeleteContactModal({ contact }) {
  const dispatch = useDispatch();

  function handleDelete() {
    dispatch(setDeleteContactId(""));
    dispatch(deleteContact(contact.id));
  }

  function handleClose() {
    dispatch(setDeleteContactId(""));
  }

  return (
    <ModalWrapper>
      <div className={css.popup}>
        <h3>
          Do you really want to delete contact {contact.name} ({contact.number})
        </h3>
        <div className="centered">
          <button onClick={handleDelete}>Yes</button>
          <button onClick={handleClose}>No</button>
        </div>
      </div>
    </ModalWrapper>
  );
}

export default DeleteContactModal;
