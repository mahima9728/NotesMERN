import React from "react";
import { Form, FormControl } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const Header = () => {
  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary"
      bg="primary"
      variant="dark"
    >
      <Container>
        <Navbar.Brand href="/">Note Zipper</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <Form style={{ display: "inline" }}>
              {" "}
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              ></FormControl>
            </Form>
          </Nav>
          <Nav>
            <Nav.Link href="#home">My notes</Nav.Link>
            <NavDropdown title="UserName" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">My Profile</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Log out</NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
