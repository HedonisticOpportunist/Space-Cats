import { Card, Container, Col, Row } from "react-bootstrap";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import { getWelcomeMessage } from "../../../services/ui/uiServices";
import { useEffect, useState } from "react";

const LandingPage = () => {
  const [data, setData] = useState(null);

  //useCallback. Or you can scrap the useEffect and do all this ina  useMemo. 
  //const data = useMemo(async () => {
    //setData(await getWelcomeMessage());
  //});
  async function fetchData() {
    const message = await getWelcomeMessage();
    setData(message);
  }
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>
                  <h3>Welcome!</h3>
                </Card.Title>
                {/* WELCOME MESSAGE */}
                <Card.Text>
                  {!data ? "ᓚᘏᗢ-…ᘛ⁐̤ᕐᐷ 🧀 Loading ..." : data}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            {/* IMAGES */}
            <LazyLoadImage
              className="image"
              src="/images/cat_moon.jpg"
              alt="A Cat and a Moon"
            />
            <LazyLoadImage
              className="image"
              src="images/cat_rocket.jpg"
              alt="A Cat and a Rocket"
            />
          </Col>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>
                  {/* MAIN CONTENT */}
                  <h2> Silly Games and ... Cats!</h2>
                </Card.Title>
                <Card.Text>
                  <b>Space Cats </b> is your friendly haunt on the web for
                  playing silly games 𓃠.
                </Card.Text>
                <Card.Text>
                  Grab a cup of milk and feel free to explore ₍^._.^₎ 𐒡.{" "}
                </Card.Text>
                <Card.Text>
                  Please be warned: there are a lot of emojis on this site.
                </Card.Text>
                <Card.Text>
                  Please <Link to="login">sign up/register</Link> to subscribe
                  to our newsletter or upload your art/game.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default LandingPage;
