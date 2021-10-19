import React from "react";
import "./Statistics.css";
import CountUp from "react-countup";

const Statistics = () => {
  return (
    <section className="statistics">
      <h2 className="text-center">Dental Clinic in Numbers</h2>
      <p className="text-center">Some Statistics</p>

      {/* -------------------------------------------------------------------------- */
      /*                               STATISTICS LIST                              */
      /* -------------------------------------------------------------------------- */}
      <ul className="statistics-list">
        <li className="statistics-item">
          <i class="far fa-thumbs-up"></i>
          <h4>
            <CountUp start={0} duration={2} end={100} suffix="%" />
          </h4>
          <p>Quality</p>
        </li>
        <li className="statistics-item">
          <i class="fas fa-user-injured"></i>
          <h4>
            <CountUp start={0} duration={2} end={3500} suffix="+" />
          </h4>
          <p>Patients a year</p>
        </li>
        <li className="statistics-item">
          <i class="fas fa-user-friends"></i>
          <h4>
            <CountUp start={0} duration={2} end={250} suffix="+" />
          </h4>
          <p>Working People</p>
        </li>
        <li className="statistics-item">
          <i class="fas fa-calendar-week"></i>
          <h4>
            <CountUp start={0} duration={2} end={7} />
          </h4>
          <p>Years of Experience</p>
        </li>
        <li className="statistics-item">
          <i class="far fa-smile-beam"></i>
          <h4>
            <CountUp start={0} duration={2} end={15000} suffix="+" />
          </h4>
          <p>Happy Smiles</p>
        </li>
      </ul>
    </section>
  );
};

export default Statistics;
