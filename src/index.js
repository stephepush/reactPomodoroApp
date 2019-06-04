import React from "react";
import ReactDOM from "react-dom";
import Container from "./Container";

import "./styles.css";

function App() {
  return <Container />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
