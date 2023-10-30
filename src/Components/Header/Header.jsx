import React from "react";
import Business from "./Business/Business";
import User from "./User/User";
import "./index.css";
import Menu from "./Menu/Menu";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Header() {
  return (
    <Container fluid>
      <Row>
        <Col sm={12}>
          <div className="header">
            <Business />
            <User />
          </div>
        </Col>
        <Menu />
      </Row>
    </Container>
  );
}
