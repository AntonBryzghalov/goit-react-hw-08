import { useId } from "react";
import css from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filters/slice";
import { selectFilterByName } from "../../redux/filters/selectors";

const maxLength = 60;

function SearchBox() {
  const value = useSelector(selectFilterByName);
  const dispatch = useDispatch();

  const id = useId();
  return (
    <div>
      <label htmlFor={id} className={css.label}>
        Find contacts
      </label>
      <input
        id={id}
        value={value}
        onChange={(event) => dispatch(changeFilter(event.target.value.trim()))}
        size={maxLength}
        maxLength={maxLength}
      />
    </div>
  );
}

export default SearchBox;
