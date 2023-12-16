import { Card, Col, Container, Row } from "react-bootstrap";
import { LazyLoadImage } from "react-lazy-load-image-component";
import ReturnToDashboardBreadcrumbs from "../../../components/navigation/dashboard/ReturnToDashboardBreadcrumbs";
import UploadWorkForm from "../../../components/forms/upload/UploadWorkForm";

//Componentize things into reusable chunks. 
const UploadWorkPage = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            {/* BREADCRUMBS */}
            <ReturnToDashboardBreadcrumbs></ReturnToDashboardBreadcrumbs>
          </Col>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>
                  {/* PAGE TITLE */}
                  <h3>Upload Link to Your Interactive Art / Game ᓚᘏᗢ</h3>
                </Card.Title>
                <Card.Text>
                  Upload a link to your interactive art or game.
                </Card.Text>
                <Card.Text>
                  A moderator will have a look and then add it to the main page.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Card>
            <Card.Body>
              <h4> Upload Your Work ^•^* </h4>
              <Card.Text>
                {/* CAT IMAGE */}
                <LazyLoadImage
                  className="mini-logo"
                  src="images/laptop_cat.png"
                  alt="A Laptop Cat"
                />
              </Card.Text>
              <UploadWorkForm></UploadWorkForm>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </>
  );
};

export default UploadWorkPage;
