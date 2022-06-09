import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Heading from "../components/Heading";
import "./Projects.css";

const Projects = () => {
  return (
    <section>
      <Container>
        <Heading size="lg">Projects</Heading>
        <p>
          Most of my smaller projects (including unfinished/abandoned ones) live
          on <a href="https://gist.github.com/dolphingarlic">GitHub</a>. Here
          are six projects that I'm proud of from six different areas of
          computer science.
        </p>
        <Container fluid>
          <Row>
            <Col className="project-col" md={4} sm={6}>
              <Card className="project-card mb-3">
                <Card.Img variant="top" src="mbta-map.gif" />
                <Card.Body>
                  <Card.Title>Light-up MBTA Map</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    IOT Project
                  </Card.Subtitle>
                  <Card.Text>
                    A 1-meter-by-1-meter map of Boston's subway system with stops that
                    light up when trains are at them.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col className="project-col" md={4} sm={6}>
              <Card className="project-card mb-3">
                <Card.Img variant="top" src="usaco-guide.png" />
                <Card.Body>
                  <Card.Title>
                    <a href="https://usaco.guide/">USACO Guide</a>
                  </Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Website
                  </Card.Subtitle>
                  <Card.Text>
                    A free collection of curated, high-quality resources to take
                    USACO competitors from Bronze to Platinum and beyond.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col className="project-col" md={4} sm={6}>
              <Card className="project-card mb-3">
                <Card.Img variant="top" src="git-the-lines.png" />
                <Card.Body>
                  <Card.Title>
                    <a href="https://github.com/dolphingarlic/git-the-lines">
                      Git the Lines
                    </a>
                  </Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Discord Bot
                  </Card.Subtitle>
                  <Card.Text>
                    A (verified) bot that prints out the lines referenced in
                    GitHub snippet links.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col className="project-col" md={4} sm={6}>
              <Card className="project-card mb-3">
                <Card.Img variant="top" src="trexcel.png" />
                <Card.Body>
                  <Card.Title>
                    <a href="https://github.com/dolphingarlic/TrExcel">
                      TrExcel
                    </a>
                  </Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Excel Plug-in
                  </Card.Subtitle>
                  <Card.Text>
                    A plug-in that adds support for (classic game whose name
                    shall not be mentioned lest I get sued).
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col className="project-col" md={4} sm={6}>
              <Card className="project-card mb-3">
                <Card.Img variant="top" src="andy-q.png" />
                <Card.Body>
                  <Card.Title>
                    <a href="https://www.linkedin.com/in/andy-q-38143b226/">
                      Andy Q
                    </a>
                  </Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Meme Account
                  </Card.Subtitle>
                  <Card.Text>
                    A meme LinkedIn account with over 500 followers, including
                    an associate director of MIT's CAPD.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col className="project-col" md={4} sm={6}>
              <Card className="project-card mb-3">
                <Card.Img variant="top" src="hex.png" />
                <Card.Body>
                  <Card.Title>
                    <a href="https://dolphingarlic.itch.io/hex">Hex</a>
                  </Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Computer Game
                  </Card.Subtitle>
                  <Card.Text>
                    Hex is a two-player strategy game on a hexagonal grid. Play
                    it on itch.io or get the game on Google Play!
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
};

export default Projects;
