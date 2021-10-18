import React from "react";
import "./ServiceDetails.css";
import { useParams, useHistory } from "react-router-dom";
import useAll from "../../../hooks/useAll";

const ServiceDetails = () => {
  const { healthServices } = useAll();
  const { services } = healthServices;
  const { id } = useParams();

  console.log(id);
  const currentService = services.find((service) => service.id == id);

  const history = useHistory();
  const goToServices = () => {
    history.push("/services");
  };

  return (
    <section className="service-details">
      <div className="service-details-grid-box">
        <div className="service-poster">
          <img src={currentService?.img} alt="" />
        </div>
        <div className="service-content">
          <h1>{currentService?.name}</h1>
          <h5 className="service-price ">
            Start from <span>{currentService?.cost} $</span>
          </h5>
          <p>{currentService?.details}</p>
          <div>
            <button style={{ width: "max-content" }} className="btn-book">
              Book Appointment
            </button>
            <button
              onClick={goToServices}
              style={{
                width: "max-content",
              }}
              className="btn-learn"
            >
              See All Services
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetails;
