import { Link } from "react-router-dom";
import css from "./HomePage.module.css";

function HomePage() {
  const signedIn = false;

  return (
    <div className={css.container}>
      <h1>This is the phonebook app.</h1>
      {signedIn ? (
        <p className={css.description}>
          You can move to the{" "}
          <Link className={css.link} to="/contacts">
            contacts
          </Link>{" "}
          page to see the main functionality of the app.
        </p>
      ) : (
        <p className={css.description}>
          You should{" "}
          <Link className={css.link} to="/registration">
            Register
          </Link>{" "}
          or{" "}
          <Link className={css.link} to="/login">
            Log In
          </Link>{" "}
          to use the app.
        </p>
      )}
    </div>
  );
}

export default HomePage;
