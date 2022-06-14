import React from "react";
import { Container } from "react-bootstrap";
import Heading from "../components/Heading";

const Contact = () => {
  return (
    <section>
      <Container>
        <Heading size="lg">Contact Me</Heading>
        <p>Or don't. I'm just a website, I can't control you.</p>
        <ul>
          <li>
            <strong>Email:</strong>{" "}
            <a href="mailto:andi@andiqu.com">andi [at] andiqu [dot] com</a>
          </li>
          <li>
            <strong>GitHub:</strong>{" "}
            <a href="https://github.com/dolphingarlic">dolphingarlic</a>
          </li>
        </ul>
        <Heading size="md">For Recruiters</Heading>
        <ul>
          <li>
            <strong>LinkedIn:</strong>{" "}
            <a href="https://www.linkedin.com/in/andi-qu-48313a154/">Andi Qu</a>
          </li>
          <li>
            <strong>Resume:</strong>{" "}
            <a href="Andi_Resume.pdf" target="_blank">Here I guess?</a>
          </li>
        </ul>
      </Container>
    </section>
  );
};

export default Contact;
