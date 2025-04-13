import { useSelector } from "react-redux";
import { selectLoggedIn } from "../../redux/auth/selectors";
import { Navigate } from "react-router-dom";

function RestrictedRoute({ component, redirectTo }) {
  const isLoggedIn = useSelector(selectLoggedIn);
  return isLoggedIn ? <Navigate to={redirectTo} replace={true} /> : component;
}

export default RestrictedRoute;
