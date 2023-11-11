import axios from "axios";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import HomeBreadcrumbs from "../components/HomeBreadcrumbs";
import { Link } from "react-router-dom";
import { useState } from "react";

const SignupPage = () => {
  // States
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hasSubscribed, setSubscribedState] = useState(false);
  const [message, setMessage] = useState("");

  // Toast Messages
  const handleError = "👻 Error. Please try signing up again.";
  const handleSuccess = "🦄 Success! You have been signed up.";

  // Handle Message Function
  const handleDisplayMessages = () => {
    if (hasSubscribed) {
      setMessage(handleSuccess);
    } else {
      setMessage(handleError);
    }
  };

  // Sign Up Function
  const signup = async () => {
    try {
      const { data } = await axios.post(
        "http://localhost:5000/signup",
        {
          username,
          email,
          password,
        },
        { withCredentials: true }
      );
      console.log(data);
      const { success } = data;
      if (success) {
        setSubscribedState(true);
      } else {
        setSubscribedState(false);
      }
    } catch (error) {
      console.log(error);
    }
    setUserName(username);
    setEmail(email);
    setPassword(password);
  };

  // Submit Function
  const handleSubmit = async (e) => {
    e.preventDefault();
    signup();
    handleDisplayMessages();
  };

  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <h1>Register</h1>
          </Col>
          <Col>
            {/* Breadcrumbs */}
            <HomeBreadcrumbs></HomeBreadcrumbs>
          </Col>
          <Col>
            <img src="images/cat_and_fish.jpg" alt="A Cat and a Fish" />
          </Col>
          <Col>
            <p>
              Already have an account? <Link to={"/login"}>Login</Link> ♡🐾
            </p>
          </Col>
          <Col>
            {/* Sign Up Form */}
            <Form>
              <Form.Group
                className="mb-3"
                controlId="formBasicUserName"
                required
              >
                <Form.Label>Username: </Form.Label>
                <Form.Control
                  type="username"
                  value={username}
                  onChange={(e) => setUserName(e.target.value)}
                  placeholder="Enter username"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address: </Form.Label>
                <Form.Control
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter email"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password: </Form.Label>
                <Form.Control
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                />
              </Form.Group>
              {/* Sign Up Button */}
              <Button
                className="btn-grad"
                variant="outline-dark"
                type="submit"
                size="lg"
                onClick={handleSubmit}
              >
                🐾Register
              </Button>
            </Form>
          </Col>
          <Col>
            {/* Sign Up Status Message */}
            <p>{message}</p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SignupPage;
