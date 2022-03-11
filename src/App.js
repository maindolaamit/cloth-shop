import "./App.css";
import { Routes, Navigate, Route } from "react-router-dom";
import HomePage from "./pages/home-page/homepage";
import ShopPage from "./pages/shop-page/shoppage";
import Header from "./components/header/header";

function App() {
  return (
    <div>
      <Header />
      {/* react-router-dom@6 --> Switch has been replaced with Routes and Route take JSX element*/}
      <Routes>
        {/* react-router-dom@6 --> Redirect has been replaced with Navigate  */}
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
      </Routes>
    </div>
  );
}

export default App;
