import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import React from 'react';
import * as d3 from "d3";

function AnalyzePortfolio(props) {
  return(
    <>
      <ButtonGroup color="primary" aria-label="outlined primary button group">
        <Button
          onClick={() => {
            props.setVisibleChart(true);

            d3.csv("./csv/hoge.csv").then(function (d) {
              console.log(d);
              // グラフを描画
            });

          }}>
            Analyze Portfolios
        </Button>
        <Button
          onClick={() => {
            props.setVisibleChart(false);
            d3.csv("./csv/huga.csv", function (data, i) {
              return {
                name: i + "_" + data.name,
              };
            }).then(function (data) {
              console.log(data);
              // グラフを描画
            });
          }}>
          Cancel
        </Button>
      </ButtonGroup>
    </>
  );
}

export default AnalyzePortfolio
