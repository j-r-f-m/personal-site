import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export function Content() {
  return (
    <Container>
      <Row>
        <Col>Photo</Col>
        <Col>Text</Col>
      </Row>
      <Row>Row2</Row>
      <Row>Row1</Row>
    </Container>
  );
}
