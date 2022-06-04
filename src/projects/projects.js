import { Col, Row } from "react-grid-system";
import { ProjectCard } from "../project-card/project-card";
import "./projects.scss";

export function Projects({ mode }) {
  return (
    <div className={`projects-container ${mode}`}>
      <Row>
        <Col sm={12}>
          <div className="header-container">
            <span className={`header ${mode}`}>Some things I've built</span>
          </div>
        </Col>
      </Row>
      <ProjectCard
        mode={mode}
        imagePath="./assets/images/eezyReport.jpg"
        imageLink="https://github.com/vijeshm/eezyReport"
        projectName="eezyReport"
        projectDescription="This is a tool that was developed to generate reports, specifically for final year projects."
        tags={["report generation", "pdflatex", "xml", "python"]}
        githubLink="https://github.com/vijeshm/eezyReport"
      ></ProjectCard>
    </div>
  );
}
