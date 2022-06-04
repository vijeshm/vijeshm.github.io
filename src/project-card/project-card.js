import { Col, Row } from "react-grid-system";
import "./project-card.scss";

export function ProjectCard({
  mode,
  imagePath,
  imageLink,
  projectName,
  projectDescription,
  tags,
  githubLink,
}) {
  return (
    <Row className={`project-card-container ${mode}`} nogutter>
      <Col sm={12}>
        <a href={imageLink} target="_blank">
          <img className="project-card-img" src={imagePath}></img>
        </a>
        <div className="project-details-container">
          <div className="project-name">{projectName}</div>
          <div className="project-description">{projectDescription}</div>
          <div className="tags">
            {tags.map((tag) => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ))}
          </div>
          <div className="github-link">
            <a href={githubLink} target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <title>GitHub</title>
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
          </div>
        </div>
      </Col>
    </Row>
  );
}
