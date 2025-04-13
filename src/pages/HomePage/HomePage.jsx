import { Link } from "react-router-dom";

function HomePage() {
  const signedIn = false;

  return (
    <>
      <h1>This is the phonebook app.</h1>
      {signedIn ? (
        <p>
          You can move to the <Link to="/contacts">contacts</Link> page to see
          the main functionality of the app.
        </p>
      ) : (
        <p>
          You should <Link to="/registration">Register</Link> or{" "}
          <Link to="/login">Log In</Link>
        </p>
      )}
    </>
  );
}

export default HomePage;
