import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { unstable_HistoryRouter as Router, Routes, Route, Link } from "react-router-dom";
import { createBrowserHistory } from "history";

import "./App.css";
import Heading from "./components/Heading";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import School from "./pages/School";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const history = createBrowserHistory({ window });

function App() {
  return (
    <Router history={history}>
      <header>
        <Navbar bg="light" expand="md">
          <Container>
            <Navbar.Brand as={Link} to="/">
              <Heading size="xs" history={history}>Andi Qu</Heading>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/">
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="/school">
                  School
                </Nav.Link>
                <Nav.Link as={Link} to="/projects">
                  Projects
                </Nav.Link>
                <Nav.Link as={Link} to="/contact">
                  Contact
                </Nav.Link>
                <Nav.Link href="https://bits-and-bytes.me/">Blog</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/school" element={<School />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <footer>
        <span>Copyright © Andi Qu 2022</span>
        <span>
          View the source code on{" "}
          <a href="https://github.com/dolphingarlic/andiqu-v3">GitHub</a>
        </span>
      </footer>
    </Router>
  );
}

export default App;
