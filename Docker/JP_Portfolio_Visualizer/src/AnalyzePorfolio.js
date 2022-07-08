import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import React from 'react';
import * as d3 from "d3";

import data_hoge from './csv/hoge.csv';
import data_huga from './csv/huga.csv';

function AnalyzePortfolio(props) {
  return(
    <>
      <ButtonGroup color="primary" aria-label="outlined primary button group">
        <Button
          onClick={() => {
            props.setVisibleChart(true);

            d3.csv(data_hoge).then(function (data) {
              console.log(data);
            });

          }}>
            Analyze Portfolios
        </Button>
        <Button
          onClick={() => {
            props.setVisibleChart(false);

            d3.csv(data_huga).then(function (data) {
              console.log(data);
            });

          }}>
          Cancel
        </Button>
      </ButtonGroup>
    </>
  );
}

export default AnalyzePortfolio
