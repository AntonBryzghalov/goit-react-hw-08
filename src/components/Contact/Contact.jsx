import { FaUser } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";
import css from "./Contact.module.css";
import { useDispatch } from "react-redux";
import {
  setDeleteContactId,
  setEditContactId,
} from "../../redux/contacts/slice";

function Contact({ data }) {
  const dispatch = useDispatch();

  const handleDeleteButton = () => {
    dispatch(setDeleteContactId(data.id));
  };

  const handleEditButton = () => {
    dispatch(setEditContactId(data.id));
  };

  return (
    <div className={css.contact}>
      <div className={css.info}>
        <FaUser /> {data.name}
      </div>
      <div className={css.info}>
        <FaPhone /> {data.number}
      </div>
      <button onClick={handleDeleteButton}>Delete</button>{" "}
      <button onClick={handleEditButton}>Edit</button>
    </div>
  );
}

export default Contact;
