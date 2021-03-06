import React, { useRef, useEffect } from "react";
// import D3blackbox from "./D3blackbox";
import * as d3 from "d3";

// const Axis = D3blackbox(function() {
//   const scale = d3
//     .scaleLinear()
//     .domain([0, 10])
//     .range([0, 200]);
//   const axis = d3.axisBottom(scale);

//   d3.select(this.anchor.current).call(axis);
// });

const Axis = ({ x, y }) => {
  const gRef = useRef();

  useEffect(() => {
    const scale = d3
      .scaleLinear()
      .domain([0, 10])
      .range([0, 200]);
    const axis = d3.axisBottom(scale);

    d3.select(gRef.current).call(axis);
  }, []);

  return <g transform={`translate(${x}, ${y})`} ref={gRef} />
}

export default Axis;
