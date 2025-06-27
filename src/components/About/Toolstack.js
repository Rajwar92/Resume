import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiJira,
  SiConfluence,
  SiMicrosoftoffice,
} from "react-icons/si";
import { FaFileAlt, FaFilePdf } from "react-icons/fa";
import { DiGit } from "react-icons/di";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftoffice title="Microsoft Office" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaFileAlt title="Oxygen XML Editor" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJira title="JIRA" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiConfluence title="Confluence" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaFilePdf title="PDF Documentation" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit title="Version Control" />
      </Col>
    </Row>
  );
}

export default Toolstack;