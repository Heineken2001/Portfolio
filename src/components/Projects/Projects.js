import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Northern Vietnam Rest Stop Ecommerce"
              description="Developed an Ecommerce platform, 'Northern Vietnam Rest Stop,' connecting suppliers and stores in Northern Vietnam rest stops. The project enabled seamless trade and enhanced supply chain efficiency using Nest.js, React.js, and Next.js. Integrated with KiotViet for better retail management. Managed mobile features using React Native and handled DevOps tasks with Docker and Nginx, implementing CI/CD."
              ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Internal Social Media for Vietnam's MB Bank"
              description="Developed an internal social networking platform for MB Bank with a customizable admin panel and user interaction features. Built backend microservices for API management, user synchronization, and notifications using Node.js, Redis, and MongoDB. Utilized React.js and Next.js for the frontend, and AWS services for real-time data processing. Improved internal communication and content management efficiency."
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="US and Israel's Ecommerce"
              description="Worked as a Fullstack Developer on a large-scale Ecommerce platform serving markets in the US, Canada, Israel, France, and the UK. Collaborated with teams across multiple countries to manage users, products, orders, payments, and more. Developed both frontend (Angular, Ionic) and backend (Node.js, Redis, MongoDB, AWS) while optimizing performance and contributing to system architecture. Delivered new features monthly, enhancing the shopping experience for 500,000+ global shoppers. Helped build a scalable microservices architecture supporting long-term operations."
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
