import { useDispatch, useSelector } from "react-redux";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import SearchBox from "../../components/SearchBox/SearchBox";
import css from "./ContactsPage.module.css";
import { addContact, fetchContacts } from "../../redux/contacts/operations";
import { useEffect, useRef } from "react";
import {
  selectContactToDelete,
  selectContactToEdit,
} from "../../redux/contacts/selectors";
import DeleteContactModal from "../../components/DeleteContactModal/DeleteContactModal";
import EditContactModal from "../../components/EditContactModal/EditContactModal";

function ContactsPage() {
  const dispatch = useDispatch();
  const dispatchRef = useRef(dispatch); // used to remove dependencies from effect
  const editContact = useSelector(selectContactToEdit);
  const deleteContact = useSelector(selectContactToDelete);

  useEffect(() => {
    dispatchRef.current(fetchContacts());
  }, []);

  function handleSubmit(values, actions) {
    const newRecord = {
      name: values.name,
      number: values.number,
    };

    dispatch(addContact(newRecord));
    actions.resetForm();
  }

  return (
    <div className={css.phonebook}>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={handleSubmit} submitText="Add Contact" />
      <SearchBox />
      <ContactList />
      {editContact && <EditContactModal contact={editContact} />}
      {deleteContact && <DeleteContactModal contact={deleteContact} />}
    </div>
  );
}

export default ContactsPage;
