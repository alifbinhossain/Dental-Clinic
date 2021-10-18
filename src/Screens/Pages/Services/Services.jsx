import React from "react";
import "./Services.css";
import { Col, Row } from "react-bootstrap";
import Service from "../../Components/Service/Service";
import useAll from "../../../hooks/useAll";

const Services = () => {
  const { healthServices } = useAll();
  const { services } = healthServices;
  return (
    <div className="services">
      <h1>All Services</h1>
      <Row xs={1} md={2} lg={3} className="g-4">
        {services?.map((service) => (
          <Col>
            <Service service={service} key={service.id}></Service>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Services;
