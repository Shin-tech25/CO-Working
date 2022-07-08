import React from "react";
import { useD3 } from "d3blackbox";
// import D3blackbox from "./D3blackbox";

import * as d3 from "d3";

const Axis = ({ x, y }) => {
  const gRef = useD3(anchor => {
    const scale = d3
      .scaleLinear()
      .domain([0, 10])
      .range([0, 200]);
    const axis = d3.axisBottom(scale);

    d3.select(anchor).call(axis);
  });

  return <g transform={`translate(${x}, ${y})`} ref={gRef} />;
};

export default Axis;
