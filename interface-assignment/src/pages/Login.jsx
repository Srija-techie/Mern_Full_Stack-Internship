import { useState } from "react";
import { Container, Card, Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    toast.success("Login Successful ✨");

    setTimeout(() => {
      navigate("/home");
    }, 1500);
  };

  return (
    <div className="page-bg">
      <Container className="d-flex justify-content-center align-items-center min-vh-100">
        <Card className="form-card">
          <Card.Body>
            <h2 className="main-heading">Welcome Back</h2>

            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label className="label-text">
                  Email
                </Form.Label>

                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Label className="label-text">
                  Password
                </Form.Label>

                <Form.Control
                  type="password"
                  placeholder="Enter password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Button type="submit" className="custom-btn w-100">
                Login
              </Button>
            </Form>

            <p className="bottom-text">
              Don’t have an account?{" "}
              <Link to="/" className="link-style">
                Register
              </Link>
            </p>
          </Card.Body>
        </Card>

        <ToastContainer position="top-center" />
      </Container>
    </div>
  );
}

export default Login;