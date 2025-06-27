import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              With over 9 years of experience in technical writing, I specialize in creating clear, concise documentation that bridges the gap between complex technical concepts and end-user understanding.
              <br />
              <br />
              I am proficient in documentation tools like
              <i>
                <b className="purple"> DITA XML, Oxygen XML Editor, </b>
              </i>
              and
              <i>
                <b className="purple"> Adobe FrameMaker.</b>
              </i>
              <br />
              <br />
              My expertise lies in creating &nbsp;
              <i>
                <b className="purple">API Documentation, User Guides </b> and
                technical content for {" "}
                <b className="purple">
                  Software, Automotive, and Aviation industries.
                </b>
              </i>
              <br />
              <br />
              I'm passionate about transforming complex technical information into accessible documentation using tools like
              <i>
                <b className="purple"> JIRA, Confluence, </b>
              </i>
              and
              <i>
                <b className="purple"> Camtasia for instructional videos.</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>CONNECT WITH ME</h1>
            <p>
              Feel free to <span className="purple">reach out </span>professionally
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/prakash-rajwar88"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;