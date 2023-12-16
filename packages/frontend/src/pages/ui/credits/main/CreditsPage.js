import { Card, Container, Col, Row } from "react-bootstrap";
import HomeBreadcrumbs from "../../../../components/navigation/home/HomeBreadcrumbs";
import { Link } from "react-router-dom";
//Again, comoponentize
const CreditsPage = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            {/* BREADCRUMBS */}
            <HomeBreadcrumbs></HomeBreadcrumbs>
          </Col>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>
                  {/* PAGE TITLE */}
                  <h3>Credits</h3>
                </Card.Title>
                {/* MAIN CONTENT */}
                <Card.Text>
                  A project never lives in isolation; the following images
                  helped make <i>Space Cats</i> the bright and happy place it is
                  now.
                </Card.Text>
                <Card.Text>
                  Some of the images on the main section of <i>Space Cats</i>{" "}
                  may be reused on the <i>Dashboard</i> page ❤.
                </Card.Text>
                <Card.Text>
                  Other credits -- related to code and assets used within the
                  art/games --
                  <a href="https://github.com/HedonisticOpportunist/Space-Cats/blob/main/README.md">
                    can be found in the project's documentation.
                  </a>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body>
                {/* MAIN CONTENT */}
                <h4>Links to Credit Pages:</h4>
                <Card.Text>
                  <Link to={"/art-image-credits"}>
                    🐅Interactive Art Image Credits
                  </Link>
                </Card.Text>
                <Card.Text>
                  <Link to={"/dashboard-image-credits"}>
                    🐅Dashboard Image Credits
                  </Link>
                </Card.Text>
                <Card.Text>
                  <Link to={"/image-credits"}>🐅Image Credits</Link>
                </Card.Text>
                <Card.Text>
                  <Link to={"/game-image-credits"}>🐅Game Image Credits</Link>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CreditsPage;
