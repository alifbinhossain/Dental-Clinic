import React from "react";
import "./Banner.css";
import { Carousel } from "react-bootstrap";
import banner1 from "../../../Images/Banner/banner-1.png";
import banner2 from "../../../Images/Banner/banner-3.png";
import banner3 from "../../../Images/Banner/banner-4.png";

const Banner = () => {
  return (
    <div className="banner">
      <Carousel fade className="banner-carousel">
        <Carousel.Item className="banner-carousel__item banner-carousel__item--1">
          <div className="banner-carousel__content">
            <img className="d-block" src={banner1} alt="First slide" />
            <div className="banner-carousel__content--details">
              <h3>Welcome to the Dental Clinic</h3>
              <h1>
                <span> Expectional Service.</span> <br />
                <span> Soft & Gental.</span>
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
                quod temporibus minus animi aut cupiditate obcaecati dignissimos
                quidem alias quam?
              </p>
              <button className="btn-book">Book Now</button>
              <button className="btn-learn">Learn More</button>
            </div>
          </div>
        </Carousel.Item>

        <Carousel.Item className="banner-carousel__item banner-carousel__item--2">
          <div className="banner-carousel__content">
            <img className="d-block" src={banner2} alt="Second slide" />
            <div className="banner-carousel__content--details">
              <h3>Welcome to the Dental Clinic</h3>
              <h1>
                <span> Expectional Service.</span> <br />
                <span> Soft & Gental.</span>
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
                quod temporibus minus animi aut cupiditate obcaecati dignissimos
                quidem alias quam?
              </p>
              <button className="btn-book">Book Now</button>
              <button className="btn-learn">Learn More</button>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item className="banner-carousel__item banner-carousel__item--3">
          <div className="banner-carousel__content">
            <img className="d-block" src={banner3} alt="Third slide" />
            <div className="banner-carousel__content--details ">
              <h3>Welcome to the Dental Clinic</h3>
              <h1>
                <span> Expectional Service.</span> <br />
                <span> Soft & Gental.</span>
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
                quod temporibus minus animi aut cupiditate obcaecati dignissimos
                quidem alias quam?
              </p>
              <button className="btn-book">Book Now</button>
              <button className="btn-learn">Learn More</button>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
