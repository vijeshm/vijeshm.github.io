import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Home } from "./home/home"

const root = ReactDOM.createRoot(document.getElementById("root"));
let isAuthorized = false;

root.render(
  <HashRouter>
    <Routes>
      <Route exact path="/" element={<Home />} />
    </Routes>
  </HashRouter>
);