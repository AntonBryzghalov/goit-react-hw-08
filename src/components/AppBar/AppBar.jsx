import css from "./AppBar.module.css";
import Navigation from "../Navigation/Navigation";
import AuthNav from "../AuthNav/AuthNav";
import { useSelector } from "react-redux";
import { selectLoggedIn } from "../../redux/auth/selectors";
import UserMenu from "../UserMenu/UserMenu";

function AppBar() {
  const isLoggedIn = useSelector(selectLoggedIn);

  return (
    <div className={css.bar}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </div>
  );
}

export default AppBar;
