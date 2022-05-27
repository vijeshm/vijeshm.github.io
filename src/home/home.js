import "./home.scss";
import { Navbar } from "../navbar/navbar";
import { useState } from "react";
import { Intro } from "../intro/intro";
import { Row, Col } from "react-grid-system";
import { SocialLinks } from "../SocialLinks/social-links";

export function Home() {
  let [mode, setMode] = useState('light');
  let onModeChangeHandler = (mode) => {
    setMode(mode);
  };
  return (
    <div className="container">
      <Navbar onModeChange={onModeChangeHandler}></Navbar>
      <Row nogutter>
        <Col sm={1}>
          <SocialLinks mode={mode}></SocialLinks>
        </Col>
        <Col sm={11}>
          <Intro mode={mode}></Intro>
        </Col>
      </Row>
    </div>
  );
}
