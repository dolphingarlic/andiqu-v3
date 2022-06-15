import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Heading from "../components/Heading";

const ART = `
 ∧＿∧
( ･ω･｡)つ━☆・*。
⊂   ノ    ・゜+.
しーＪ    °。+ *´¨)
       .·´¸.·*´¨) ¸.·*¨)
        (¸.·´ (¸.·’* ☆
`;

const NotFound = () => {
  return (
    <section>
      <Container className="d-flex justify-content-center">
        <div className="d-inline-flex flex-column align-items-center">
          <Heading size="xl">Page Not Found</Heading>
          <pre style={{ marginTop: "-4rem" }}>{ART}</pre>
          <Link to="/" style={{ marginLeft: "5rem", marginTop: "-1rem" }}>
            Take me home!
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default NotFound;
