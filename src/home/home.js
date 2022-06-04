import "./home.scss";
import { Navbar } from "../navbar/navbar";
import { useState } from "react";
import { Intro } from "../intro/intro";
import { Row, Col } from "react-grid-system";
import { SocialLinks } from "../social-links/social-links";
import { IntroCard } from "../intro-card/intro-card";
import { AboutMe } from "../about-me/about-me";
import { Projects } from "../projects/projects";

export function Home() {
  let now = new Date();
  let defaultMode = now.getHours() >= 18 ? "dark" : "light";
  let [mode, setMode] = useState(defaultMode);
  let onModeChangeHandler = (mode) => {
    setMode(mode);
  };
  return (
    <div className="container">
      <Navbar onModeChange={onModeChangeHandler} initMode={mode}></Navbar>
      <Row nogutter>
        <Col sm={1}>
          <SocialLinks mode={mode}></SocialLinks>
        </Col>
        <Col sm={11}>
          <Row>
            <Col sm={12}>
              <Intro mode={mode}></Intro>
              <IntroCard></IntroCard>
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <AboutMe mode={mode}></AboutMe>
              <Projects mode={mode}></Projects>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}
