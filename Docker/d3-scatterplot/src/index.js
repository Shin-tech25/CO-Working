import React from "react";
import ReactDOM from "react-dom";
import * as d3 from "d3";

import "./styles.css";
import Scatterplot from "./Scatterplot";

function App() {
  const data = d3.range(100).map(_ => [Math.random(), Math.random()]);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <svg width="800" height="800">
        <Scatterplot x={50} y={50} width={300} height={300} data={data} />
      </svg>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
