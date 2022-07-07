import './App.css';
import React from 'react';
import { ResponsiveBar } from "@nivo/bar";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const data = [
  { quarter: 1, earnings: 13000 },
  { quarter: 2, earnings: 16500 },
  { quarter: 3, earnings: 14250 },
  { quarter: 4, earnings: 19000 }
];

function App() {
  return (
    <div style={styles}>
      <h1>Nivo basic demo</h1>
      <div style={{ height: "480px" }}>
        <ResponsiveBar data={data} keys={["earnings"]} indexBy="quarter" />
      </div>
    </div>
  );
}

export default App;
