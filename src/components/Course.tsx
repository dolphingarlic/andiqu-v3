import React, { ReactNode, useState } from "react";
import { Card, Modal } from "react-bootstrap";
import "./Course.css";

const Course = (props: {
  children: ReactNode;
  title: string;
  subtitle: string;
  color: string;
}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Card
        className="course-card"
        style={{ background: props.color }}
        onClick={handleShow}
      >
        <Card.Body>
          <Card.Title>
            <strong>{props.title}</strong>
          </Card.Title>
          <Card.Subtitle>{props.subtitle}</Card.Subtitle>
        </Card.Body>
      </Card>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton className="mb-3">
          <Modal.Title>
            <strong>{props.title}</strong> ({props.subtitle})
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.children}</Modal.Body>
      </Modal>
    </>
  );
};

export default Course;
