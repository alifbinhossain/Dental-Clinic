import React from "react";
import "./Service.css";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Service = ({ service }) => {
  const { name, img, details, cost } = service;
  return (
    <Card className="service-card p-3">
      <Card.Img variant="top" src={img} />
      <Card.Body className="px-0 ">
        <Card.Title className="card-title">{name}</Card.Title>
        <Card.Text>
          {details.slice(0, 150)}..
          <p className="price mt-4">
            <i class="fas fa-chevron-right"></i> Starting from{" "}
            <span>{cost}</span>$
          </p>
          <p className="price">
            <i class="fas fa-chevron-right"></i> <Link>See Details</Link>
          </p>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Service;
