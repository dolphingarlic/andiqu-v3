import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Heading from "./components/Heading";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import School from "./pages/School";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <header>
        <Navbar bg="light" expand="md">
          <Container>
            <Navbar.Brand href="/">
              <Heading size="xs">Andi Qu</Heading>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/school">School</Nav.Link>
                <Nav.Link href="/projects">Projects</Nav.Link>
                <Nav.Link href="/contact">Contact</Nav.Link>
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
        </Routes>
      </main>
      <footer>
        <span>Copyright © Andi Qu 2022</span>
        <span>
          View the source code on{" "}
          <a href="https://github.com/dolphingarlic">GitHub</a>
        </span>
      </footer>
    </Router>
  );
}

export default App;
