import React from "react";
import * as d3 from "d3";

import Axis from "./Axis";

const Scatterplot = ({ x, y, width, height, data, datapoint }) => {
  const yScale = d3
    .scaleLinear()
    .domain([0, 1])
    .range([height, 0]);

  const xScale = d3
    .scaleLinear()
    .domain([0, 1])
    .range([0, width]);

  return (
    <g transform={`translate(${x}, ${y})`}>
      {data.map(([x, y]) => datapoint({ x: xScale(x), y: yScale(y) }))}
      <Axis x={0} y={0} scale={yScale} type="Left" />
      <Axis x={0} y={height} scale={xScale} type="Bottom" />
    </g>
  );
};

export default Scatterplot;
