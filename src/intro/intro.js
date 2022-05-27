import { useState } from "react";
import { Col, Row } from "react-grid-system";
import TagCloud from "TagCloud";
import "./intro.scss";

export function Intro({ mode }) {
  let [isRendered, setIsRendered] = useState(false);
  setTimeout(() => {
    if (!isRendered) {
      TagCloud(
        ".tag-cloud",
        [
          "Javascript",
          "Typescript",
          "AngularJS",
          "Angular",
          "ReactJS",
          "OOJS",
          "ES6",
          "NodeJS",
          "RxJS",
          "NgRX",
          "ExtJS",
          "BackboneJS",
          "Git",
          "Perforce",
          "Agile Scrum",
          "HTML",
          "CSS",
          "Karma",
          "Jasmine",
          "Highcharts",
          "WebSockets",
          "Webpack",
          "Gephi",
        ],
        { radius: 300 }
      );
    }
    setIsRendered(true);
  }, 100);
  return (
    <Row nogutter className={`intro ${mode}`}>
      <Col sm={5}>
        <div className="hi">Hi, I'm</div>
        <div className="vijesh-mohan">VIJESH MOHAN</div>
        <div className="tagline">Engineer. Photographer.</div>
        <div className="description">
          I'm a senior frontend engineer, focused on writing awesome code and
          building performant webpages. I'm currently working as a lead at{" "}
          <a href="https://akamai.com" target="_blank">
            Akamai Technologies
          </a>
          , making the web more accurate and faster.
        </div>
      </Col>
      <Col sm={7}>
        <div className="tag-cloud"></div>
      </Col>
    </Row>
  );
}
