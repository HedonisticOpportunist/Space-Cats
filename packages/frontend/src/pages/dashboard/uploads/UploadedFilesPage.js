import { Card, Col, Container, Row, Table } from "react-bootstrap";
import { getFiles } from "../../../services/upload-services/uploadService";
import { LazyLoadImage } from "react-lazy-load-image-component";
import ReturnToDashboardBreadcrumbs from "../../../components/navigation/dashboard/ReturnToDashboardBreadcrumbs";
import { useEffect, useState } from "react";

const UploadedFilesPage = () => {
  // STATES
  const [data, setData] = useState([]);

  useEffect(() => {
    //How is this not an infinite loop? You are setting data, which is a dependency of the useEffect.
    async function getFileData() {
      let data = await getFiles();
      if (data.success) {
        setData(data.files);
      }
    }
    getFileData();
  }, [data]);

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
                  <h3>Uploaded Files ᓚᘏᗢ</h3>
                </Card.Title>
                <Card.Text>View uploaded files here 🐍.</Card.Text>
                <Card.Text>
                  {/* CAT IMAGE */}
                  <LazyLoadImage
                    className="mini-logo"
                    src="images/cat_rocket.jpg"
                    alt="A Cat and Its Rocket"
                  />
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            {/* TABLE */}
            <Table striped="columns">
              <thead>
                <tr>
                  <th>|Title|</th>
                  <th>|Description|</th>
                  <th>|Link|</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr key={index}>
                    <td colSpan={2}>{item.title}</td>
                    <td colSpan={2}>{item.description}</td>
                    <td colSpan={2}>{item.url}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default UploadedFilesPage;
