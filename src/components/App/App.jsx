import { lazy, Suspense, useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchContacts } from "../../redux/contacts/operations";
import AppBar from "../AppBar/AppBar";
import Layout from "../Layout/Layout";
import { Route, Routes } from "react-router-dom";

function App() {
  const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
  const ContactsPage = lazy(() =>
    import("../../pages/ContactsPage/ContactsPage")
  );
  const NotFoundPage = lazy(() =>
    import("../../pages/NotFoundPage/NotFoundPage")
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Layout>
        <AppBar />
      </Layout>

      <Layout>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contacts" element={<ContactsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </Layout>
    </>
  );
}

export default App;
