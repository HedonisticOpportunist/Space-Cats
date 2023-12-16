import { Button, Form, Container, Col, Row } from "react-bootstrap";
import { messageConstants } from "../../../constants/messageConstants";
import { unsubscribe } from "../../../services/subscription-services/subscribersService";
import { useState } from "react";

const UnsubscribeForm = () => {
  // STATES
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // UNSUBSCRIBE FUNCTION
  // useCallback 
  const handleUnsubscribe = async () => {
    let response = await unsubscribe(email);
    if (response) {
      setMessage(messageConstants.UNSUBSCRIBE_SUCCESS);
    } else {
      setMessage(messageConstants.UNSUBSCRIBE_ERROR);
    }
    setEmail(email);
  };

  // SUBMIT FUNCTION
  // useCallback
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email === "" || !email.includes("@") || email === null) {
      setMessage(messageConstants.UNSUBSCRIBE_ERROR);
    } else {
      handleUnsubscribe();
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
            {/* UNSUBSCRIBE BUTTON */}
            <Button
              className="btn-grad"
              variant="outline-dark"
              size="lg"
              onClick={handleSubmit}
            >
              🐻‍❄️Unsubscribe from our newsletter.
            </Button>
          </Col>
          <Col>
            {/* DISPLAY UNSUBSCRIBE STATUS*/}
            <p>{message}</p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default UnsubscribeForm;
