import React from "react";
import { render } from "react-dom";
import Axis from "./Axis";

const App = () => (
  <svg width="800" height="400" id="svg">
    <Axis x={20} y={50} />
  </svg>
);

render(<App />, document.getElementById("root"));
