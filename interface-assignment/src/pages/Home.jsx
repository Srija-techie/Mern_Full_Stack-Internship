import { Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-bg">
      <Container className="d-flex justify-content-center align-items-center min-vh-100">
        <div className="home-card">
          <h1 className="home-heading">
            Welcome to Home Page 🎉
          </h1>

          <div className="btn-group-custom">
            <Button
              className="custom-btn"
              onClick={() => navigate("/")}
            >
              Register
            </Button>

            <Button
              className="dark-btn"
              onClick={() => navigate("/login")}
            >
              Login
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Home;