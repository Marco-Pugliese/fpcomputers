import { Container } from "react-bootstrap";
import MyHeader from "./Components/Header/MyHeader";
import LandingPage from "./Components/LandingPage/LandingPage";
import "./App.css";

function App() {
  return (
    <>
      <MyHeader />
      <div className="bg-secondary">
        <Container>
          <LandingPage />
        </Container>
      </div>
    </>
  );
}

export default App;
