import { useState } from "react";
import { Row, Col, Container } from "react-grid-system";
import { Switch } from "../switch/switch";
import "./navbar.scss";
export function Navbar({ onModeChange }) {
  let [mode, setMode] = useState("light");
  let changeMode = (currentValue) => {
    let newMode = currentValue ? "dark" : "light";
    setMode(newMode);

    if (onModeChange) {
      onModeChange(newMode);
    }
  };
  return (
    <Container fluid>
      <Row className={`navbar ${mode}`}>
        <Col sm={2} className="col">
          <img
            src="./assets/images/logo.png"
            width="60px"
            className="logo"
          ></img>
        </Col>
        <Col sm={4} className="col"></Col>
        <Col sm={6} className="col">
          <div className="nav-items">
            <div className="nav-item">Home</div>
            <div className="nav-item">About me</div>
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
            ></Switch>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
