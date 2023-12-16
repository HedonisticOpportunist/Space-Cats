import { Card, Container, Col, Row } from "react-bootstrap";
import CreditsBreadcrumbs from "../../../../components/navigation/home/CreditsBreadcrumbs";
import { LazyLoadImage } from "react-lazy-load-image-component";

//Sooo much repeated code lol. 
const ImageCreditsPage = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            {/* BREADCRUMBS */}
            <CreditsBreadcrumbs></CreditsBreadcrumbs>
          </Col>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>
                  {/* PAGE TITLE */}
                  <h3>Image Credits Page</h3>
                </Card.Title>
                {/* MAIN CONTENT */}
                <Card.Text>
                  The following page displays the images used throughout the
                  main pages of
                  <i> Space Cats</i>.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body>
                <Card.Text>
                  {/* IMAGE */}
                  <LazyLoadImage
                    className="mini-logo"
                    src="images/cat_moon.jpg"
                    alt="A Cat and a Moon"
                  />
                  <a href="https://www.facebook.com/moshimoshicatalyst">
                    Credit: catalyststuff/moshimoshicatalyst.
                  </a>
                </Card.Text>
                <Card.Text>
                  {/* IMAGE */}
                  <LazyLoadImage
                    className="mini-logo"
                    src="images/cat_rocket.jpg"
                    alt="A Cat and a Rocket"
                  />
                  <a href="https://www.facebook.com/moshimoshicatalyst">
                    Credit: catalyststuff/moshimoshicatalyst.
                  </a>
                </Card.Text>
                <Card.Text>
                  {/* IMAGE */}
                  <LazyLoadImage
                    className="mini-logo"
                    src="images/pink_astro_cat.jpg"
                    alt="A Pink Astronaut Cat"
                  />
                  <a href="https://storyset.com/">Credit: storyset</a>
                </Card.Text>
                <Card.Text>
                  {/* IMAGE */}
                  <LazyLoadImage
                    className="mini-logo"
                    src="images/cat_and_fish.jpg"
                    alt="A Cat and a Fish"
                  />
                  <a href="https://www.facebook.com/moshimoshicatalyst">
                    Credit: catalyststuff/moshimoshicatalyst.
                  </a>
                </Card.Text>
                <Card.Text>
                  {/* IMAGE */}
                  <LazyLoadImage
                    className="mini-logo"
                    src="images/space_cats_logo.png"
                    alt="Space Cat Logo"
                  />
                  <a href="https://logo.com/">Credit: LOGO.</a>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ImageCreditsPage;
