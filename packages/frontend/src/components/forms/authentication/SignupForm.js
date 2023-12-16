import { Button, Container, Col, Form, Row } from "react-bootstrap";
import { messageConstants } from "../../../constants/messageConstants";
import { signup } from "../../../services/authentication-services/authenticationService";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const SignupForm = () => {
  // NAVIGATE TO DASHBOARD
  const navigate = useNavigate();

  // STATES
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  // HANDLE SIGN UP FUNCTION
  //useCallback
  const handleSignup = async () => {
    let response = await signup(username, email, password);
    if (response.success) {
      setMessage(messageConstants.SIGN_UP_SUCCESS);
      setTimeout(() => {
        navigate("/dashboard");
      }, 1000);
    } else {
      setMessage(messageConstants.SIGN_UP_ERROR);
    }
    setUserName(username);
    setEmail(email);
    setPassword(password);

    //Credit: @ https://medium.com/@furqanistic/decoding-jwt-secure-authentication-in-mern-applications-23cd7141e2f
    //again, consider sessionStorage instead of localStorage
    localStorage.setItem("token", response.token);
  };

  // SUBMIT FUNCTION
  //useCallback
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (username === "" || email === "" || password === "") {
      setMessage(messageConstants.SIGN_UP_ERROR);
    } else {
      handleSignup();
    }
  };

  return (
    <>
      <Container fluid>
        <Row>
          <Col>
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
                  placeholder="Username"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address: </Form.Label>
                <Form.Control
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
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
                  required
                />
              </Form.Group>
              {/* SIGN UP BUTTON */}
              <Button
                className="btn-grad"
                variant="outline-dark"
                type="submit"
                size="lg"
                onClick={handleSubmit}
              >
                🐾Sign Up
              </Button>
            </Form>
          </Col>
          <Col>
            {/* SIGN UP STATUS MESSAGE */}
            <p>{message}</p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SignupForm;
