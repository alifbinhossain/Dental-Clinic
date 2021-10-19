import React, { useState } from "react";
import image from "../../../../Images/Form/Secure login-bro.svg";
import { Col, Form, Row } from "react-bootstrap";
import { Link, useHistory, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAll from "../../../../hooks/useAll";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const Signin = () => {
  const MySwal = withReactContent(Swal);
  const [error, setError] = useState("");
  const { firebase } = useAll();
  const {
    googleProvider,
    facebookProvider,
    twitterProvider,
    signInWithEmail,
    signInWithSocialAccount,
    resetPassword,
  } = firebase;

  const history = useHistory();
  const location = useLocation();
  const redirectUrl = location.state?.from || "/home";

  /* -------------------------------------------------------------------------- */
  /*                         SIGN IN WITH SOCIAL ACCOUNT                        */
  /* -------------------------------------------------------------------------- */
  const handleSignInWithSocial = (provider) => {
    signInWithSocialAccount(provider)
      .then((result) => {
        Swal.fire({
          icon: "success",
          title: "Congrats! You are Succesfully logged in",
          showConfirmButton: false,
          timer: 1500,
          padding: "1rem 2rem 3rem",
        });
        setError("");
        history.push(redirectUrl);
      })

      .catch((err) => {
        setError(err.message);
      });
  };

  /* -------------------------------------------------------------------------- */
  /*                             SIGN IN WITH EMAIL                             */
  /* -------------------------------------------------------------------------- */
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => {
    const userEmail = data.email;
    const userPassword = data.password;
    signInWithEmail(userEmail, userPassword)
      .then((result) => {
        Swal.fire({
          icon: "success",
          title: "Congrats! Succesfully logged in",
          showConfirmButton: false,
          timer: 1500,
          padding: "1rem 2rem 3rem",
        });
        setError("");
        history.push(redirectUrl);
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: `Please try again.. ${err.message}`,
          showConfirmButton: false,
          timer: 1500,
          padding: "1rem 2rem 3rem",
        });
      });
  };

  return (
    <div className="sign-form container h-100">
      <Row md={2} xs={1} className=" h-100">
        <Col className="sign-left" md={7}>
          <div className="sign-greetings">
            <img className="w-75" src={image} alt="" />
          </div>
        </Col>
        <Col md={5} className="sign-right">
          <h1 className="text-white text-center">Sign In</h1>
          <small className="text-danger text-center fw-bold mb-2 d-block">
            {error && error}
          </small>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label className="form-label">Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                className="form-input"
                {...register("email", { required: true })}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPassword">
              <Form.Label className="form-label">Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                className="form-input"
                {...register("password", { required: true })}
              />
            </Form.Group>
            <Form.Group
              className="mb-3 d-flex justify-content-between align-items-center"
              controlId="formHorizontalCheck"
            >
              <Form.Check className="form-label" label="Remember me?" />
              <button
                style={{
                  backgroundColor: "transparent",
                  border: "none",
                  textDecoration: "underLine",
                }}
                className="switch-link"
              >
                Forgot password?
              </button>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formHorizontalCheck">
              <button className="w-100 btn-custom" type="submit">
                Sign In
              </button>
            </Form.Group>
          </Form>
          <small className="text-center d-block text-more-option ">
            Or with Social Profile
          </small>
          <div className="social-btn-box my-3 d-flex justify-content-center align-items-center">
            <button
              className="btn-social"
              onClick={() => handleSignInWithSocial(googleProvider)}
            >
              <i class="fab fa-google"></i>
            </button>
            <button
              className="btn-social"
              onClick={() => handleSignInWithSocial(facebookProvider)}
            >
              <i class="fab fa-facebook"></i>
            </button>
            <button
              className="btn-social"
              onClick={() => handleSignInWithSocial(twitterProvider)}
            >
              <i class="fab fa-twitter"></i>
            </button>
          </div>

          <small className="text-center d-block">
            Dont have an account?
            <Link to="/form/signup" className="switch-link ms-1">
              Sign Up
            </Link>
          </small>
        </Col>
      </Row>
    </div>
  );
};

export default Signin;
