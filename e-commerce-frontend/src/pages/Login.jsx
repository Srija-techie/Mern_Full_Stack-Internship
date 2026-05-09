import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {

  const [loginDetails, setloginDetails] = useState({
    username: "",
    email: "",
    password: "",
    otp: "",
  });

  const [mailOtp, setMailOtp] = useState("");

  // Handle Login
  const handleLogin = (e) => {

    e.preventDefault();

    // OTP Verification
    if (Number(loginDetails.otp) === mailOtp) {

      toast.success("Login Successful");

      console.log(loginDetails);

    } else {

      toast.error("Invalid OTP");
    }
  };

  // Handle Input Changes
  const handleChange = (e) => {

    setloginDetails({
      ...loginDetails,
      [e.target.name]: e.target.value,
    });
  };

  // Reset Form
  const handleReset = () => {

    setloginDetails({
      username: "",
      email: "",
      password: "",
      otp: "",
    });
  };

  // Generate OTP
  const generatedOtp = async () => {

    try {

      // Generate 6-digit OTP
      let otpValue = Math.floor(100000 + Math.random() * 900000);

      console.log("Generated OTP:", otpValue);

      // Save OTP
      setMailOtp(otpValue);

      // Time
      let time = new Date();

      let expiredTime = `${time.getHours()}:${time.getMinutes() + 15}:00`;

      // EmailJS Data
      let formData = {
        email: loginDetails.email,
        otp: otpValue,
        time: expiredTime,
      };

      // Send Email
      await emailjs.send(
        "service_doolca9",
        "template_pv1dfbe",
        formData,
        {
          publicKey: "FYQ7KkRpkyg9IvBne",
        }
      );

      toast.success("OTP Sent Successfully");

    } catch (err) {

      console.log(err);

      toast.error("Failed To Send OTP");
    }
  };

  return (

    <div id="form-container">

      <Form onSubmit={handleLogin}>

        {/* Username */}
        <Row className="my-2">

          <Form.Group>

            <Form.Label>Username:</Form.Label>

            <Form.Control
              type="text"
              placeholder="Enter your full name"
              name="username"
              onChange={handleChange}
              value={loginDetails.username}
            />

          </Form.Group>

        </Row>

        {/* Email */}
        <Row className="my-2">

          <Form.Group>

            <Form.Label>Email:</Form.Label>

            <Form.Control
              type="email"
              placeholder="Enter your email"
              name="email"
              onChange={handleChange}
              value={loginDetails.email}
            />

          </Form.Group>

        </Row>

        {/* Password */}
        <Row className="my-2">

          <Form.Group>

            <Form.Label>Password:</Form.Label>

            <Form.Control
              type="password"
              placeholder="Set password"
              name="password"
              onChange={handleChange}
              value={loginDetails.password}
            />

          </Form.Group>

        </Row>

        {/* OTP */}
        <Row className="my-2">

          <Col>

            <Button
              type="button"
              className="btn btn-info"
              onClick={generatedOtp}
            >
              Generate OTP
            </Button>

          </Col>

          <Col>

            <Form.Control
              type="number"
              name="otp"
              placeholder="Enter OTP"
              onChange={handleChange}
              value={loginDetails.otp}
            />

          </Col>

        </Row>

        {/* Buttons */}
        <Row className="my-2">

          <Col>

            <Button
              type="submit"
              className="btn btn-success"
            >
              Sign-In
            </Button>

          </Col>

          <Col>

            <Button
              type="reset"
              onClick={handleReset}
              className="btn btn-warning"
            >
              Reset
            </Button>

          </Col>

        </Row>

      </Form>

      <ToastContainer />

    </div>
  );
};

export default Login;