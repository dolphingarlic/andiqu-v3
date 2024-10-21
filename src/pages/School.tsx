import React from "react";
import { Container, Row } from "react-bootstrap";
import Course from "../components/Course";
import Heading from "../components/Heading";
import "./School.css";

const School = () => {
  document.title = "Andi Qu | School";

  return (
    <>
      <section>
        <Container>
          <Heading size="lg">School</Heading>
          <p>
            I'm currently a fourth-year undergrad at MIT, majoring in{" "}
            <b>Electrical Engineering and Computer Science</b> (Course 6-2) and
            minoring in <b>Materials Science and Engineering</b> (Course 3).
            Here's a list of the classes I've taken so far; for more details
            about specific classes, search for them on{" "}
            <a href="https://student.mit.edu/catalog/index.cgi">
              the MIT course catalog
            </a>{" "}
            or ask me about it.
          </p>
        </Container>
      </section>
      <section>
        <Container>
          <Heading size="md">Classes</Heading>

          <Heading size="sm">Prior Credit</Heading>
          <Container fluid>
            <Row>
              <Course
                title="6.100A"
                subtitle="Introduction to Computer Science Programming in Python"
                color="#4390de"
              />
              <Course title="18.01" subtitle="Calculus" color="#575db5" />
              <Course
                title="18.02"
                subtitle="Multivariable Calculus"
                color="#575db5"
              />
              <Course
                title="18.03"
                subtitle="Differential Equations"
                color="#575db5"
              />
            </Row>
          </Container>

          <Heading size="sm">Fall 2021</Heading>
          <Container fluid>
            <Row>
              <Course title="ES.801" subtitle="Physics I" color="#8157b4" />
              <Course
                title="ES.5111"
                subtitle="Principles of Chemical Science"
                color="#42deaf"
              />
              <Course
                title="ES.7012"
                subtitle="Introductory Biology"
                color="#5779b4"
              />
              <Course
                title="14.01"
                subtitle="Principles of Microeconomics"
                color="#de8f43"
              />
              <Course
                title="21M.426"
                subtitle="MIT Wind Ensemble"
                color="#57acb5"
              />
            </Row>
          </Container>

          <Heading size="sm">IAP 2022</Heading>
          <Container fluid>
            <Row>
              <Course
                title="6.S089"
                subtitle="Introduction to Quantum Computing"
                color="#4390de"
              />
            </Row>
          </Container>

          <Heading size="sm">Spring 2022</Heading>
          <Container fluid>
            <Row>
              <Course title="ES.802" subtitle="Physics II" color="#8157b4" />
              <Course title="18.06" subtitle="Linear Algebra" color="#575db5" />
              <Course
                title="6.1010"
                subtitle="Fundamentals of Programming"
                color="#4390de"
              />
              <Course
                title="21L.019"
                subtitle="Introduction to European and Latin American Fiction"
                color="#57b5b2"
              />
              <Course
                title="21M.426"
                subtitle="MIT Wind Ensemble"
                color="#57acb5"
              />
              <Course
                title="ES.S20"
                subtitle="Kalman Filtering and Applications"
                color="#575db5"
              />
              <Course
                title="ES.100"
                subtitle="An Introduction to Maker Skills"
                color="#5957b5"
              />
            </Row>
          </Container>

          <Heading size="sm">Fall 2022</Heading>
          <Container fluid>
            <Row>
              <Course
                title="3.010"
                subtitle="Structure of Materials"
                color="#4269de"
              />
              <Course
                title="24.900"
                subtitle="Introduction to Linguistics"
                color="#7657b4"
              />
              <Course
                title="3.019"
                subtitle="Introduction to Symbolic and Mathematical Programming"
                color="#4269de"
              />
              <Course
                title="6.1910"
                subtitle="Computational Structures"
                color="#4390de"
              />
              <Course
                title="6.1220"
                subtitle="Design and Analysis of Algorithms"
                color="#4390de"
              />
              <Course
                title="21M.426"
                subtitle="MIT Wind Ensemble"
                color="#57acb5"
              />
              <Course
                title="ES.200"
                subtitle="ESG Teaching Seminar"
                color="#5957b5"
              />
            </Row>
          </Container>

          <Heading size="sm">Spring 2023</Heading>
          <Container fluid>
            <Row>
              <Course
                title="3.020"
                subtitle="Thermodynamics of Materials"
                color="#4269de"
              />
              <Course
                title="3.155"
                subtitle="Micro and Nano Processing Technologies"
                color="#4269de"
              />
              <Course
                title="6.2000"
                subtitle="Circuits and Electronics"
                color="#4390de"
              />
              <Course
                title="6.3900"
                subtitle="Introduction to Machine Learning"
                color="#4390de"
              />
              <Course
                title="21M.426"
                subtitle="MIT Wind Ensemble"
                color="#57acb5"
              />
            </Row>
          </Container>

          <Heading size="sm">Fall 2023</Heading>
          <Container fluid>
            <Row>
              <Course
                title="14.13"
                subtitle="Psychology and Economics"
                color="#de8f43"
              />
              <Course title="14.19" subtitle="Market Design" color="#de8f43" />
              <Course
                title="18.600"
                subtitle="Probability and Random Variables"
                color="#575db5"
              />
              <Course
                title="3.033"
                subtitle="Solid-State Physics"
                color="#4269de"
              />
              <Course
                title="6.2050"
                subtitle="Digital Systems Lab I"
                color="#4390de"
              />
              <Course
                title="21M.426"
                subtitle="MIT Wind Ensemble"
                color="#57acb5"
              />
            </Row>
          </Container>

          <Heading size="sm">Spring 2024</Heading>
          <Container fluid>
            <Row>
              <Course
                title="21M.370"
                subtitle="Digital Instrument Design"
                color="#57acb5"
              />
              <Course
                title="3.000"
                subtitle="Coffee Characterization"
                color="#4269de"
              />
              <Course
                title="6.1800"
                subtitle="Computer Systems Engineering"
                color="#4390de"
              />
              <Course
                title="6.2060"
                subtitle="Microcomputer Project Lab"
                color="#4390de"
              />
              <Course
                title="6.2080"
                subtitle="Semiconductor Electronic Circuits"
                color="#4390de"
              />
              <Course
                title="21M.426"
                subtitle="MIT Wind Ensemble"
                color="#57acb5"
              />
            </Row>
          </Container>

          <Heading size="sm">Fall 2024</Heading>
          <Container fluid>
            <Row>
              <Course
                title="21M.587"
                subtitle="Fundamentals of Music Processing"
                color="#57acb5"
              />
              <Course
                title="6.5940"
                subtitle="TinyML and Efficient Deep Learning"
                color="#4390de"
              />
              <Course
                title="6.S951"
                subtitle="Modern Mathematical Statistics"
                color="#4390de"
              />
              <Course
                title="6.S965"
                subtitle="Digital Systems Lab II"
                color="#4390de"
              />
              <Course
                title="21M.426"
                subtitle="MIT Wind Ensemble"
                color="#57acb5"
              />
            </Row>
          </Container>
        </Container>
      </section>
      <section>
        <Container>
          <Heading size="md">Activities</Heading>
          <p>
            Outside of classes, I'm currently involved in the following
            extracurriculars:
          </p>
          <ul>
            <li>
              MIT Lecture Series Committee <i>(Projection Director)</i>
            </li>
            <li>
              MIT Eta Kappa Nu <i>(Technology Director)</i>
            </li>
            <li>Glassblowing</li>
            <li>MIT Climbing Club</li>
          </ul>
        </Container>
      </section>
    </>
  );
};

export default School;
