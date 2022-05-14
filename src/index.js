import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import TutorialApp from "./TutorialApp";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
let isAuthorized = false;

root.render(
  <Router>
    <TutorialApp login="vijeshm" />
  </Router>
  // <App />
  // <ul>
  //   <li>Monday</li>
  //   <li>Tuesday</li>
  //   <li>Wednesday</li>
  // </ul>
);

// ReactDOM.render(
//   React.createElement("h1", null, "heyy everyone"),
//   document.getElementById('root')
// );
