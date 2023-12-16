import { Card, Container, Col, Row } from "react-bootstrap";
import HomeBreadcrumbs from "../../components/navigation/home/HomeBreadcrumbs";
import { LazyLoadImage } from "react-lazy-load-image-component";

/**
 * Again, you can make this more modular and componentized.
 * 
 */


const InteractiveArtPage = () => {
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
                  <h3>Interactive Art</h3>
                </Card.Title>
                <Card.Text>
                  Find an assortment of interactive art pieces below.
                </Card.Text>
                <Card.Text>
                  So that you know, the interactive art loads on a new page. To
                  return to the homepage, hit the browser's back button.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            {/* DIVIDER */}
            <hr className="divider"></hr>
          </Col>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>
                  {/* GAME TITLE */}
                  <h4>Floating Space Cat ♡</h4>
                </Card.Title>
                <Card.Text>
                  {/* CAT IMAGE AND LINK */}
                  <a href="space-cats-art-and-games/floating-astro-cat/index.html">
                    <LazyLoadImage
                      className="mini-logo"
                      src="images/cat.png"
                      alt="A Cat"
                    />
                  </a>
                </Card.Text>
                <Card.Text>
                  {/* DESCRIPTION */}
                  Move an image of a space cat using your mouse coordinates.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            {/* DIVIDER */}
            <hr className="divider"></hr>
          </Col>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>
                  {/* GAME TITLE */}
                  <h4>Many Cats ♡</h4>
                </Card.Title>
                <Card.Text>
                  {/* CAT IMAGE AND LINK */}
                  <a href="space-cats-art-and-games/cat-filling-up-screen/index.html">
                    <LazyLoadImage
                      className="mini-logo"
                      src="images/unicorn.png"
                      alt="A Cat"
                    />
                  </a>
                </Card.Text>
                <Card.Text>
                  {/* DESCRIPTION */}
                  Watch the scene fill up with the same cat image across a
                  screen -- click 'Reload' to see it happen again.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default InteractiveArtPage;
