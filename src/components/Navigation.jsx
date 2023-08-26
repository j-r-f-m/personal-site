import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";

export function Navigation() {
  return (
    <Navbar expand="sm" bg="dark" data-bs-theme="dark">
      <Container>
        <Nav className="me-auto">
          <Nav.Link href="#home">About</Nav.Link>
          <Nav.Link href="#home">Projects</Nav.Link>
          <Nav.Link href="#home">Contact</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
