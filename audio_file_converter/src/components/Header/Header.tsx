import React from "react";
import { Navbar, Container } from "react-bootstrap";
import "./Header.css";
const Header: React.FC = () => {
  return (
    <Navbar className="bg-primary header">
      <Container>
        <Navbar.Brand>
          <span className="logo">
            <b>A</b>UDIO CONVERTER
          </span>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;
