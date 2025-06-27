import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiGit,
} from "react-icons/di";
import {
  SiMicrosoftoffice,
  SiAdobephotoshop,
  SiJira,
  SiConfluence,
} from "react-icons/si";
import { FaFilePdf, FaFileAlt } from "react-icons/fa";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftoffice title="Microsoft Office" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaFilePdf title="PDF Documentation" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaFileAlt title="DITA XML" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAdobephotoshop title="Adobe Photoshop" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit title="Version Control" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJira title="JIRA" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiConfluence title="Confluence" />
      </Col>
    </Row>
  );
}

export default Techstack;