import React from "react";
import { Card } from "react-bootstrap";
import "./Course.css";

const Course = (props: { title: string; subtitle: string; color: string }) => {
  return (
    <Card className="course-card" style={{ background: props.color }}>
      <Card.Body>
        <Card.Title>
          <strong>{props.title}</strong>
        </Card.Title>
        <Card.Subtitle>{props.subtitle}</Card.Subtitle>
      </Card.Body>
    </Card>
  );
};

export default Course;
