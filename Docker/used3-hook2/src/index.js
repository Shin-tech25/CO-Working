import React, { useState } from "react";
import ReactDOM from "react-dom";
import * as d3 from "d3";

import "./style.css";
import Scatterplot from "./Scatterplot";
import Datapoint from "./Datapoint";

const App = () => {
  const [dimensions, setDimensions] = useState({
    width: 300,
    height: 300
  });
  const [data, setData] = useState(
    d3.range(100).map(_ => [Math.random(), Math.random()])
  );

  function onClick() {
    setDimensions({
      width: dimensions.width * 0.7,
      height: dimensions.height * 0.7
    });
  }

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <svg width="800" height="800" onClick={onClick}>
        <Scatterplot
          x={50}
          y={50}
          width={dimensions.width}
          height={dimensions.height}
          data={data}
          datapoint={({ x, y }) => <Datapoint x={x} y={y} />}
        />
      </svg>
    </div>
  );
};

// class App extends React.Component {
//   state = {
//     width: 300,
//     height: 300,
//     data: d3.range(100).map(_ => [Math.random(), Math.random()])
//   };

//   onClick = () => {
//     const { width, height } = this.state;
//     this.setState({
//       width: width * 0.7,
//       height: height * 0.7
//     });
//   };

//   render() {
//     const { width, height, data } = this.state;

//     return (
//       <div className="App">
//         <h1>Hello CodeSandbox</h1>
//         <h2>Start editing to see some magic happen!</h2>
//         <svg width="800" height="800" onClick={this.onClick}>
//           <Scatterplot
//             x={50}
//             y={50}
//             width={width}
//             height={height}
//             data={data}
//             datapoint={({ x, y }) => <Datapoint x={x} y={y} />}
//           />
//         </svg>
//       </div>
//     );
//   }
// }

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
