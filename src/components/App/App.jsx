import { lazy, Suspense, useEffect } from "react";
import AppBar from "../AppBar/AppBar";
import Layout from "../Layout/Layout";
import { Route, Routes } from "react-router-dom";
import RestrictedRoute from "../RestrictedRoute/RestrictedRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import { useDispatch, useSelector } from "react-redux";
import { refreshUser } from "../../redux/auth/operations";
import { selectAuthLoading } from "../../redux/auth/selectors";
import LoadingModal from "../LoadingModal/LoadingModal";
import { useRef } from "react";

function App() {
  const dispatch = useDispatch();
  const dispatchRef = useRef(dispatch); // used to remove dependencies from effect
  const isLoading = useSelector(selectAuthLoading);

  useEffect(() => {
    dispatchRef.current(refreshUser());
  }, []);

  const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
  const ContactsPage = lazy(() =>
    import("../../pages/ContactsPage/ContactsPage")
  );
  const NotFoundPage = lazy(() =>
    import("../../pages/NotFoundPage/NotFoundPage")
  );
  const RegistrationPage = lazy(() =>
    import("../../pages/RegistrationPage/RegistrationPage")
  );
  const LoginPage = lazy(() => import("../../pages/LoginPage/LoginPage"));

  return (
    <>
      <Layout>
        <AppBar />
      </Layout>

      <Layout>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/contacts"
              element={
                <PrivateRoute
                  component={<ContactsPage />}
                  redirectTo="/login"
                />
              }
            />
            <Route
              path="/register"
              element={
                <RestrictedRoute
                  component={<RegistrationPage />}
                  redirectTo="/contacts"
                />
              }
            />
            <Route
              path="/login"
              element={
                <RestrictedRoute
                  component={<LoginPage />}
                  redirectTo="/contacts"
                />
              }
            />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </Layout>
      {isLoading && <LoadingModal />}
    </>
  );
}

export default App;
