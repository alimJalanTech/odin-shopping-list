import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import { About } from "./pages/About";
import { Home } from "./pages/Home";
import { Store } from "./pages/Store";
import { Navbar as BootNavbar } from "./components/NavBar";

function App() {
  return (
    <>
      <BootNavbar />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/store" element={<Store />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
