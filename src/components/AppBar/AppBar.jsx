import { NavLink } from "react-router-dom";
import css from "./AppBar.module.css";

function AppBar() {
  return (
    <div className={css.bar}>
      <nav className={css.nav}>
        <NavLink className={css.link} to="/">
          Home
        </NavLink>
        <NavLink className={css.link} to="/contacts">
          Contacts
        </NavLink>
      </nav>
      <nav className={css.nav}>
        <NavLink className={css.link} to="/register">
          Register
        </NavLink>
        <NavLink className={css.link} to="/login">
          Login
        </NavLink>
      </nav>
    </div>
  );
}

export default AppBar;
