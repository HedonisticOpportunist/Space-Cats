import { Container, Col, Row } from "react-bootstrap";
import DashboardHeader from "../../ui/dashboard/DashboardHeader";
import { Link } from "react-router-dom";

const DashboardBreadcrumbs = () => {
  //can drop the return as you're not doing anything else in the function
  //const DashboardBreadcrumbs = () => (<>...</>);
  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <DashboardHeader></DashboardHeader>
          </Col>
          <Col>
            <ul className="breadcrumb">
              <li>
                <Link to="/delete">👾Delete Uploaded Work</Link>
              </li>
              <li>
                <Link to="/files">👾View Uploaded Work</Link>
              </li>
              <li>
                <Link to="/subscribe">
                  👾Subscribe | Unsubscribe To Newsletter
                </Link>
              </li>
              <li>
                <Link to="/uploads">👾Upload Link To Art | Games</Link>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default DashboardBreadcrumbs;
