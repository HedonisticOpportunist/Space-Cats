import { Col, Container, Row } from "react-bootstrap";
import ReturnToDashboardBreadcrumbs from "../../components/navigation/ReturnToDashboardBreadcrumbs";
import UploadWorkForm from "../../components/forms/UploadWorkForm";

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
            {/* PAGE TITLE */}
            <h3>Upload Work ᓚᘏᗢ</h3>
          </Col>
          <Col>
            <UploadWorkForm></UploadWorkForm>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default UploadWorkPage;
