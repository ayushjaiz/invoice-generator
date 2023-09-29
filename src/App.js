import React, { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About, CallToAction, Home, ScrollToTop } from "./pages";
import Invoice from "./components/App";
import AuthContext from "./context/auth";
import { Header, Footer, Error } from "./pages";

export default function App() {
  const { user } = useContext(AuthContext);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              {user ? (
                <Invoice />
              ) : (
                <>
                  <Home />
                  <CallToAction />
                  <Footer />
                </>
              )}
            </>
          }
        ></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
