import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Heading from "../components/Heading";
import FUN_FACTS from "../components/fun_facts";

import "./Home.css";

const Home = () => {
  document.title = "Andi Qu";
  const funFact = FUN_FACTS[Math.floor(Math.random() * FUN_FACTS.length)];

  return (
    <>
      <section className="greeting">
        <Container className="d-flex justify-content-center">
          <div className="d-inline-flex flex-column align-items-center">
            <Heading size="xl">Hi, I'm Andi</Heading>
            <h1 className="mb-5" style={{ textAlign: "center" }}>
              {funFact}
            </h1>
          </div>
        </Container>
      </section>
      <section>
        <Container>
          <Heading size="lg">About Me</Heading>
          <Row className="flex-reverse">
            <Col>
              <div className="hexagon-container">
                <div className="hexagon">
                  <img src="me.jpg" alt="Yes it's me" />
                </div>
              </div>
            </Col>
            <Col lg={7}>
              <Heading size="md">Game Data</Heading>
              <ul>
                <li>
                  <strong>Name:</strong> Andi Qu
                </li>
                <li>
                  <strong>Age:</strong> 19
                </li>
                <li>
                  <strong>Gender:</strong> Male
                </li>
                <li>
                  <strong>Spawn point:</strong> Johannesburg, South Africa
                </li>
                <li>
                  <strong>Likes:</strong> Curry, computers, pigeons, magnetic
                  materials
                </li>
                <li>
                  <strong>Dislikes:</strong> JavaScript, time zones, seafood,
                  San Francisco
                </li>
                <li>
                  <strong>Weaknesses:</strong> Bees, pollen, uranium-235
                </li>
                <li>
                  <strong>Hotel:</strong> Trivago
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Home;
