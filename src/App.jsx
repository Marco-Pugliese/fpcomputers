import { Container } from "react-bootstrap";
import MyHeader from "./Components/Header/MyHeader";

function App() {
  return (
    <>
      <div className=" w-100 h-100 bg-light lato-regular ">
        <MyHeader />
        <Container>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi
          suscipit in eveniet exercitationem dignissimos et voluptates placeat!
          Laborum debitis aspernatur nemo est minima, eligendi temporibus
          libero, dicta rem a fugit Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Libero ratione obcaecati veniam illo sapiente harum
          dolor doloremque rerum dolores nihil minima autem ut vitae nostrum
          eveniet nemo unde, corrupti exercitationem.
        </Container>
      </div>
    </>
  );
}

export default App;
