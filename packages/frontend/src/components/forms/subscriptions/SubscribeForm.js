import { Button, Form, Container, Col, Row } from "react-bootstrap";
import { messageConstants } from "../../../constants/messageConstants";
import { subscribe } from "../../../services/subscription-services/subscribersService";
import { useState } from "react";

const SubscribeForm = () => {
  // STATES
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // HANDLE SUBSCRIBE FUNCTION
  // useCallback
  const handleSubscribeResponse = async () => {
    let response = await subscribe(email);
    if (response) {
      setMessage(messageConstants.SUBSCRIBE_SUCCESS);
    } else {
      setMessage(messageConstants.SUBSCRIBE_ERROR);
    }
    setEmail(email);
  };

  // SUBMIT SUBSCRIBE FUNCTION
  // useCallback
  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (email === "" || !email.includes("@") || email === null) {
      setMessage(messageConstants.SUBSCRIBE_ERROR);
    } else {
      handleSubscribeResponse();
    }
  };

  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address: </Form.Label>
                <Form.Control
                  type="email"
                  value={email}
                  placeholder="Enter email"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>
            </Form>
            {/* SUBSCRIBE BUTTON */}
            <Button
              className="btn-grad"
              variant="outline-dark"
              size="sm"
              onClick={handleSubscribe}
            >
              🐻‍❄️Suscribe to our newsletter.
            </Button>
          </Col>
          <Col>
            {/* DISPLAY SUBSCRIBE STATUS*/}
            <p>{message}</p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SubscribeForm;
