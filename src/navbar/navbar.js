import { useState } from "react";
import { Container, Row, Col } from "react-grid-system";
import { Switch } from "../switch/switch";
import "./navbar.scss";
export function Navbar() {
  let [mode, setMode] = useState('light');
  let changeMode = (currentValue) => {
    if (currentValue) {
      setMode('dark');
    } else {
      setMode('light');
    }
  }
  return (
    <Row className={`navbar ${mode}`}>
      <Col sm={2} className="col">
        <img src="./assets/images/logo.png" width="60px" className="logo"></img>
      </Col>
      <Col sm={4} className="col"></Col>
      <Col sm={6} className="col">
        <div className="nav-items">
          <div className="nav-item">Home</div>
          <div className="nav-item">About me</div>
          <div className="nav-item">Projects</div>
          <div className="nav-item">Photography</div>
          <div className="nav-item">Blog</div>
          <Switch onLabel={'Dark'} offLabel={'Light'} disabled={false} onChange={changeMode}></Switch>
        </div>
      </Col>
    </Row>
  );
}
