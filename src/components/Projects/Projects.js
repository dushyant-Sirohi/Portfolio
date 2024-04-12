import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import foodOrder from "../../Assets/Projects/foodOrder.png";

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
              imgPath={foodOrder}
              isBlog={false}
              title="Food Delivery Application"
              description="Application for order Food Online"
              ghLink="https://github.com/dushyant-Sirohi/Order-Food"
              demoLink="https://order-food-vercel-coral.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={foodOrder}
              isBlog={false}
              title="PeerPodium"
              description="Podium for Peer Learning"
              ghLink="#"
              demoLink="#"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
