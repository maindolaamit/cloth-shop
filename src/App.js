import "./App.css";
import HomePage from "./pages/home-page/homepage";
import { Routes, Navigate, Route } from "react-router-dom";

const HatPage = () => {
  return <h2>Hats Page</h2>;
};

function App() {
  return (
    <div>
      {/* react-router-dom@6 --> Switch has been replaced with Routes and Route take JSX element*/}
      <Routes>
        {/* react-router-dom@6 --> Redirect has been replaced with Navigate  */}
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/hats" element={<HatPage />} />
      </Routes>
    </div>
  );
}

export default App;
