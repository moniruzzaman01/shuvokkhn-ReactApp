import { signOut } from "firebase/auth";
import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";

const Navbaar = () => {
  const [user] = useAuthState(auth);
  const handleLogOut = () => {
    signOut(auth);
  };
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="home">
          SHUVOKKHON{" "}
          <sub
            style={{
              fontSize: "12px",
              color: "gray",
            }}
          >
            capture special moments
          </sub>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/home">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/blogs">
              Blogs
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
          </Nav>
          <Nav>
            {user ? (
              <p
                style={{ color: "#fff", letterSpacing: "1px" }}
                onClick={handleLogOut}
              >
                {user?.displayName}
                <span
                  style={{
                    display: "block",
                    color: "tomato",
                    marginBottom: "-15px",
                    cursor: "pointer",
                    fontWeight: "bold",
                  }}
                >
                  LogOut
                </span>
              </p>
            ) : (
              <Nav.Link as={Link} to="/login">
                Login/SignUp
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbaar;
