import { Button, Container, Col, Form, Row } from "react-bootstrap";
import { messageConstants } from "../../../constants/messageConstants";
import { login } from "../../../services/authentication-services/authenticationService";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const LoginForm = () => {
  // NAVIGATE TO DASHBOARD
  const navigate = useNavigate();

  // STATES
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  // HANDLE LOGIN FUNCTION
  //useCallback
  const handleLogin = async () => {
    let response = await login(email, password);
    if (response.success) {
      setMessage(messageConstants.LOGIN_SUCCESS);
      setTimeout(() => {
        navigate("/dashboard");
      }, 1000);
    } else {
      setMessage(messageConstants.LOGIN_ERROR);
    }
    setEmail(email);
    setPassword(password);

    //Credit: @ https://medium.com/@furqanistic/decoding-jwt-secure-authentication-in-mern-applications-23cd7141e2f
    //If you're using storage for tokens I would consider sessionStorage instead. The token would die when the session ends. 
    //Without a refresh token, this would be far more secure. 
    localStorage.setItem("token", response.token);
  };

  // SUBMIT FUNCTION
  //useCallback
  const handleSubmit = async (e) => {
    e.preventDefault();
    //Validation is pretty basic. I would consider a password policy and email validation (regex) at the very least.
    //I know that theoretically the html form should handle some of this, but also consider that a user could bypass the form
    if (email === "" || password === "") {
      setMessage(messageConstants.LOGIN_ERROR);
    } else {
      handleLogin();
    }
  };

  return (
    <>
      {/* 
        IMO. This is personal opinion formed a few years ago so It may have changed:
        
        react-bootstrap components are limiting and garbage. 

        I would consider either adding the bootstrap CDN to your index.html file and using standard bootstrap classes on 
        standard html elements in your JSX, or just impoting the boostrap css into an scss file and using it as standard that 
        way.
      */}
      <Container fluid>
        <Row>
          <Col>
            {/* 
              I would consider using something like formik or react-final-form to handle form state.

              Once you get used to it, it becomes alot easier to manage and to validate the forms. 
            */}
            <Form>
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
              {/* LOGIN BUTTON */}
              <Button
                className="btn-grad"
                variant="outline-dark"
                type="submit"
                size="lg"
                onClick={handleSubmit}
              >
                🐾Login
              </Button>
            </Form>
          </Col>
          <Col>
            {/* LOGIN STATUS MESSAGE */}
            <p>{message}</p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default LoginForm;
