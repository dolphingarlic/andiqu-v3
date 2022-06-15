import React from "react";
import { Card, Col, Container, Row, Table } from "react-bootstrap";
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
          <Row>
            <Col md={6}>
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
            <Col>
              <Heading size="md">Base Stats</Heading>
              <Card className="mb-3 stat-card">
                <img
                  src="avatar.jpeg"
                  alt="Andi definitely looks like this"
                />
                <Card.Body>
                  <Table>
                    <tbody>
                      <tr>
                        <td><strong>HP:</strong></td>
                        <td>60</td>
                      </tr>
                      <tr>
                        <td><strong>Attack:</strong></td>
                        <td>65</td>
                      </tr>
                      <tr>
                        <td><strong>Defense:</strong></td>
                        <td>60</td>
                      </tr>
                      <tr>
                        <td><strong>Sp. Atk:</strong></td>
                        <td>130</td>
                      </tr>
                      <tr>
                        <td><strong>Sp. Def:</strong></td>
                        <td>75</td>
                      </tr>
                      <tr>
                        <td><strong>Speed:</strong></td>
                        <td>110</td>
                      </tr>
                    </tbody>
                  </Table>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Home;
