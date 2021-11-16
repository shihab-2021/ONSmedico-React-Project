import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../Hook/useFirebase";
import "./Header.css";

const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Brand as={Link} to="/home" className="tw-bold logo">
            <h2 className="logo">
              <span className="text-danger">O</span>
              <span className="text-warning">N</span>
              <span className="text-info">S</span>
              <span className="text-success">medico</span>
            </h2>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/home">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/doctor">
                Doctor
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                About
              </Nav.Link>
              <Navbar.Text className="mx-3">
                <p>
                  <i className="fa fa-phone" aria-hidden="true"></i>Call
                  543-837-2436
                </p>
              </Navbar.Text>
              <Navbar.Text className="mx-3">
                <p className="text-warning tw-bold">{user?.displayName}</p>
              </Navbar.Text>
              {user?.email ? (
                <button
                  className="btn btn-outline-primary"
                  style={{ maxHeight: "40px" }}
                  onClick={logOut}
                >
                  Sign Out
                </button>
              ) : (
                <Nav.Link as={Link} to="/login">
                  <button className="btn btn-outline-primary mr-2 ml-2">
                    Sign In
                  </button>
                </Nav.Link>
              )}
              {!user?.email ? (
                <Nav.Link as={Link} to="/signup">
                  <button className="btn btn-outline-info">Sign Up</button>
                </Nav.Link>
              ) : (
                <p></p>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
