import { NavLink } from "react-router-dom";
import { buildLinkClass } from "../../js/utils";
import { useSelector } from "react-redux";
import { selectLoggedIn } from "../../redux/auth/selectors";

function Navigation() {
  const isLoggedIn = useSelector(selectLoggedIn);

  return (
    <nav className="nav">
      <NavLink className={buildLinkClass} to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className={buildLinkClass} to="/contacts">
          Contacts
        </NavLink>
      )}
    </nav>
  );
}

export default Navigation;
