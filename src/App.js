import "./App.css";
import { Routes, Navigate, Route } from "react-router-dom";
import HomePage from "./pages/home-page/homepage";
import ShopPage from "./pages/shop-page/shoppage";
import Header from "./components/header/header";
import SingInAndSignUpPage from "./pages/singn-in-and-sing-up/singn-in-and-sign-up";
import { auth } from "./firebase/firebase.utils";
import { useState, useEffect } from "react";

function App() {
  const [authUser, setAuthUser] = useState(null);
  useEffect(
    () => {
      const unregisterAuthObserver = auth.onAuthStateChanged((user) => {
        setAuthUser(user);
        // Now you either return just unregisterAuthObserver
        // which will be called when the component is unmounted
      });
      return unregisterAuthObserver;
    },
    [] // Important, pass an empty array so to execute useEffect hook only once
  );

  return (
    <div>
      <Header authUser={authUser} />
      {/* react-router-dom@6 --> Switch has been replaced with Routes and Route take JSX element*/}
      <Routes>
        {/* react-router-dom@6 --> Redirect has been replaced with Navigate  */}
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/signin" element={<SingInAndSignUpPage />} />
      </Routes>
    </div>
  );
}

export default App;
