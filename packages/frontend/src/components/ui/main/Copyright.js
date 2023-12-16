import { Container, Col, Row } from "react-bootstrap";
import React, { useState } from "react";

const Copyright = () => {
  //Does the year need to be stateful? It's not going to change all that much. 
  //I would consider useMemo instead of useState
  const [year] = useState(new Date().getFullYear());
  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <footer className="footer">
              ©<span>{year}</span> by Anita Pal
            </footer>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Copyright;
