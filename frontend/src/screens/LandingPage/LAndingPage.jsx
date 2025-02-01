import React from "react";
import { Button, Container, Row } from "react-bootstrap";
import "./LAndingPage.css";

const LAndingPage = () => {
  return (
    <div className="main">
      <Container>
        <Row>
          <div className="intro-text">
            <div>
              <h1 className="title">Welcome To Note Zipper</h1>
              <p className="subtitle">One safe place for all your notes.</p>
            </div>
            <div className="buttonContainer">
              <a href="/login">
                <Button size="lg" className="landingButton">
                  Login
                </Button>
              </a>
              <a href="/login">
                <Button
                  size="lg"
                  className="landingButton"
                  variant="outline-primary"
                >
                  SignUp
                </Button>
              </a>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default LAndingPage;
