import { useDispatch } from "react-redux";
import ModalWrapper from "../ModalWrapper/ModalWrapper";
import { setEditContactId } from "../../redux/contacts/slice";
import { updateContact } from "../../redux/contacts/operations";
import ContactForm from "../ContactForm/ContactForm";

function EditContactModal({ contact }) {
  const dispatch = useDispatch();

  function handleSubmit(values, actions) {
    if (values.name !== contact.name || values.number !== contact.number) {
      const updatedContact = {
        id: contact.id,
        name: values.name,
        number: values.number,
      };

      dispatch(updateContact(updatedContact));
    }

    dispatch(setEditContactId(""));
    actions.resetForm();
  }

  return (
    <ModalWrapper>
      <ContactForm
        contact={contact}
        onSubmit={handleSubmit}
        submitText="Save"
      />
    </ModalWrapper>
  );
}

export default EditContactModal;
