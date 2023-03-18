import { Col, Container, Row } from "react-bootstrap";
export default function Layout({ children }) {
  return (
    <Container>
      <Row className="justify-content-center align-content-center g-2">
        <Col xl={6} lg={6} md={10} sm={12}>
          {children}
        </Col>
      </Row>
    </Container>
  );
}
