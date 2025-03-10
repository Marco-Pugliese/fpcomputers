import MyHeader from "./Components/Header/MyHeader";
import LandingPage from "./Components/LandingPage/LandingPage";
import "./App.css";
import MyFooter from "./Components/Footer/MyFooter";
import ServicePage from "./Components/ServicePage/ServicePage";
import { Route, Routes } from "react-router-dom";
import SupportPage from "./Components/SupportPage/SupportPage";

function App() {
  return (
    <>
      <MyHeader />
      <div className="text-light bg-dark">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/Services" element={<ServicePage />} />
          <Route path="/Support" element={<SupportPage />} />
        </Routes>
      </div>
      <MyFooter />
    </>
  );
}

export default App;
