import { useState } from "react";
import { Row, Col, Container } from "react-grid-system";
import { Switch } from "../switch/switch";
import "./navbar.scss";
export function Navbar({ onModeChange, initMode }) {
  let [mode, setMode] = useState(initMode);
  let changeMode = (currentValue) => {
    let newMode = currentValue ? "dark" : "light";
    setMode(newMode);

    if (onModeChange) {
      onModeChange(newMode);
    }
  };
  let scrollToAboutMe = () => {
    const section = document.querySelector(".about-me-container");
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  let scrollToHome = () => {
    const section = document.querySelector(".intro");
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  return (
    <Container fluid>
      <Row className={`navbar ${mode}`}>
        <Col sm={2} className="col">
          <img
            src="./assets/images/logo.png"
            width="60px"
            className="logo"
            onClick={() => scrollToHome()}
          ></img>
        </Col>
        <Col sm={4} className="col"></Col>
        <Col sm={6} className="col">
          <div className="nav-items">
            <div className="nav-item" onClick={() => scrollToHome()}>Home</div>
            <div className="nav-item" onClick={() => scrollToAboutMe()}>
              About me
            </div>
            <div className="nav-item">Projects</div>
            <div className="nav-item">Photography</div>
            <div className="nav-item">Blog</div>
          </div>
          <div className="mode-switch">
            <Switch
              onLabel={"Dark"}
              offLabel={"Light"}
              disabled={false}
              onChange={changeMode}
              initialValue={initMode === "dark"}
            ></Switch>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
