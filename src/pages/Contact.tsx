import React from "react";
import { Container } from "react-bootstrap";
import Heading from "../components/Heading";

const Contact = () => {
  document.title = "Andi Qu | Contact Me";

  return (
    <section>
      <Container>
        <Heading size="lg">Contact Me</Heading>
        <p>Or don't. I'm just a website, don't let me tell you what to do.</p>
        <ul>
          <li>
            <strong>Email:</strong>{" "}
            andi [at] andiqu [dot] com
          </li>
          <li>
            <strong>GitHub:</strong>{" "}
            <a href="https://github.com/dolphingarlic">@dolphingarlic</a>
          </li>
          <li>
            <strong>LinkedIn:</strong>{" "}
            <a href="https://www.linkedin.com/in/andiqu/">@andiqu</a>
          </li>
        </ul>
      </Container>
    </section>
  );
};

export default Contact;
