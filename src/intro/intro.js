import { Col, Container, Row } from "react-grid-system";
import "./intro.scss";

export function Intro({ mode }) {
  return (
    <Row nogutter>
      <Col sm={12}>
        <div className={`intro ${mode}`}>
          <div className="hi">Hi, I'm</div>
          <div className="vijesh-mohan">VIJESH MOHAN</div>
          <div className="tagline">Frontend Engineer. Photographer.</div>
        </div>
      </Col>
    </Row>
  );
}
