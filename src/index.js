import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import TutorialApp from "./TutorialApp";
import "./index.css";
import { BrowserRouter as Router, HashRouter, Route, Routes } from "react-router-dom";
import { About, Events } from "./pages";

const root = ReactDOM.createRoot(document.getElementById("root"));
let isAuthorized = false;

root.render(
  <HashRouter>
    <Routes>
      <Route exact path="/" element={<About />} />
      <Route exact path="/events" element={<Events />} />
    </Routes>
  </HashRouter>

  // <Router>
  //   <TutorialApp login="vijeshm" />
  // </Router>

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
