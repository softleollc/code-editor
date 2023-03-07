import React from "react";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../index.css";

function Footer() {
  var date = new Date();
  var year = date.getFullYear();
  return (
    <div>
      <Container fluid className="footer">
        Copyright © 2018-{year} | Softleo LLC - Code Editor Lite
      </Container>
    </div>
  );
}

export default Footer;
