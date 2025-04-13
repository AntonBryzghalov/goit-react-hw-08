import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operations";

function UserMenu() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser());

  function handleLogout() {
    dispatch(logout());
  }

  return (
    <div>
      <p>Welcome {user.name}</p>
      <button onClick={handleLogout}>Log out</button>
    </div>
  );
}

export default UserMenu;
