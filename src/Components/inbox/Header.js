import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import LeftBar from "./LeftBar";

const Header = () => {
  return (
    <div>
    <Navbar style={{ background: "black", height: 75, color: "white" }}>
      <Container>
        <Nav>
          <Navbar.Brand
            style={{
              fontStyle: "italic",
              fontSize: 40,
              color: "white",
              fontFamily: "revert-layer",
            }}
          >
            MailBoxClient
          </Navbar.Brand>
          <input
            type="text"
            style={{
              marginLeft: 150,
              width: 750,
              borderRadius: "5px",
              height: 35,
              fontSize: 15,
            }}
            placeholder="Search Email"
          />
        </Nav>
      </Container>
    </Navbar>
    <LeftBar />
    </div>
  );
};

export default Header;
