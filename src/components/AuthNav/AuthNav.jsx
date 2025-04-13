import { NavLink } from "react-router-dom";
import { buildLinkClass } from "../../js/utils";

function AuthNav() {
  return (
    <nav className="nav">
      <NavLink className={buildLinkClass} to="/register">
        Register
      </NavLink>
      <NavLink className={buildLinkClass} to="/login">
        Login
      </NavLink>
    </nav>
  );
}

export default AuthNav;
