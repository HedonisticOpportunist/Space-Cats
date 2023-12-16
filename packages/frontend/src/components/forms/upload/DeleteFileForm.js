import { Button, Form, Container, Col, Row } from "react-bootstrap";
import { deleteFile } from "../../../services/upload-services/uploadService";
import { messageConstants } from "../../../constants/messageConstants";
import { useState } from "react";

const DeleteFileForm = () => {
  // STATES
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  // HANDLE DELETE FUNCTION
  // useCallback
  const handleDelete = async () => {
    let response = await deleteFile(title);
    if (response) {
      setMessage(messageConstants.DELETE_FILE_SUCCESS);
    } else {
      setMessage(messageConstants.DELETE_FILE_ERROR);
    }
    setTitle(title);
  };

  // HANDLE SUBMIT FUNCTION
  //useCallback
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title === "" || title === null || title.includes("@")) {
      setMessage(messageConstants.DELETE_FILE_ERROR);
    } else {
      handleDelete();
    }
  };

  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Uploaded Work Title: </Form.Label>
                <Form.Control
                  type="url"
                  value={title}
                  placeholder="Enter URL"
                  required
                  onChange={(e) => setTitle(e.target.value)}
                />
              </Form.Group>
            </Form>
          </Col>
          <Col>
            {/* DELETE FILES BUTTON */}
            <Button
              className="btn-grad"
              variant="outline-dark"
              size="lg"
              onClick={handleSubmit}
            >
              🐻‍❄️Delete Files
            </Button>
          </Col>
          <Col>
            {/* DISPLAY FILE DELETED STATUS*/}
            <p>{message}</p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default DeleteFileForm;
