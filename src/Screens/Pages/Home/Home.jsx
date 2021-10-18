import React from "react";
import "./Home.css";
import Banner from "../../Components/Banner/Banner";
import Features from "../../Components/Features/Features";
import Statistics from "../../Components/Statistics/Statistics";
import useService from "../../../hooks/useService";
import { Col, Row } from "react-bootstrap";
import Service from "../../Components/Service/Service";

const Home = () => {
  const { services } = useService();
  services.length = 6;

  return (
    <div className="home">
      <Banner></Banner>
      <Features></Features>
      <Statistics></Statistics>

      <section className="services">
        <h2 className="text-center mb-4">Our Services</h2>
        <Row xs={1} md={2} lg={3} className="g-4">
          {services?.map((service) => (
            <Col>
              <Service service={service} key={service.id}></Service>
            </Col>
          ))}
        </Row>
      </section>
    </div>
  );
};

export default Home;
