import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../css/nav.css";
import logo from "../images/logo.png";
import Image from "react-bootstrap/Image";
import SortButton from "./Sorting";
import { Link } from "react-router-dom";

function NavBar() {
  const settings = ["Toggle theme", "Preferences"];
  return (
    <Navbar expand="lg" className="bg-body-tertiary navbar-header">
      <Container fluid>
        <Image src={logo} className="logo" />

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#action2">About Us</Nav.Link>
            <NavDropdown title="Categories" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Settings" id="navbarScrollingDropdown">
              {settings.map((cur) => (
                <NavDropdown.Item key={cur}>{cur}</NavDropdown.Item>
              ))}
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex search-bar">
            <Form.Control
              type="search"
              placeholder="Find latest updates"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          <div className="sort-btn">
            <SortButton />
          </div>

          <Button className="authentication-button" variant="outline-success">
            Login/Signup
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
