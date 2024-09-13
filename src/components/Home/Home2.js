import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import ContactForm from "./ContactMe";

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
            I fell in love with programming and have gained solid experience in both front-end and back-end development. 
            <br />
            <br />I am proficient in technologies like
            <i>
              <b className="purple"> Javascript, TypeScript, NodeJS/ExpressJS, and Angular.</b>
            </i>
            <br />
            <br />
            My field of interest includes building new &nbsp;
            <i>
              <b className="purple">Web Technologies and Products</b> and 
              working with advanced &nbsp;
              <b className="purple">Microservices Architecture.</b>
            </i>
            <br />
            <br />
            Whenever possible, I apply my passion for developing solutions using <b className="purple">Node.js</b> and 
            <i>
              <b className="purple">
                {" "}Modern Javascript Libraries and Frameworks
              </b>
            </i>
            &nbsp; such as
            <i>
              <b className="purple"> React.js and Next.js.</b>
            </i>
            <br />
            <br />
            My backend experience also includes working with <b className="purple">AWS, Redis, MongoDB, SQL Server </b> 
            for building scalable solutions, and I leverage tools like 
            <b className="purple"> Docker, Jenkins, and Github CI/CD</b> for DevOps workflows.
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
            <h1>CONTACT ME</h1>
            <ContactForm />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
