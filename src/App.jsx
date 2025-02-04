import { Container } from "react-bootstrap";
import MyHeader from "./Components/Header/MyHeader";
import LandingPage from "./Components/LandingPage/LandingPage";
import "./App.css";
import MyFooter from "./Components/Footer/MyFooter";

function App() {
  return (
    <>
      <MyHeader />
      <div className="text-light bg-dark">
        <Container>
          <LandingPage />
        </Container>
      </div>
      <MyFooter />
    </>
  );
}

export default App;
