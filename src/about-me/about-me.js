import { Col, Row } from "react-grid-system";
import "./about-me.scss";

export function AboutMe({ mode }) {
  return (
    <Row>
      <Col sm={12}>
        <div className={`about-me-container ${mode}`}>
          <Row>
            <Col sm={3}>
              <img className="profile" src="./assets/images/vijeshmohan.jpeg" alt="Profile"/>
            </Col>
            <Col sm={6}>
              <div className="snippet">Hello! I'm Vijesh. I hail from Bengaluru, India.</div>
              <div className="snippet">
                I primarily develop web pages and I love typescript! I enjoy
                solving problems in data structures and algorithms. I have a
                little background in Machine Learning and in data wrangling, and
                I love to visualize data. I'm excited to learn new tech.
              </div>
              <div className="snippet">
                Someday, I wanna be able to talk to hardware, write profitable
                bots, lift weights, go on a long run... and the list goes on. So
                many things to do! So little time!
              </div>
              <div className="snippet">
                Oh, and I used to cycle to work, and I practice photography.
              </div>
            </Col>
          </Row>
        </div>
      </Col>
    </Row>
  );
}
