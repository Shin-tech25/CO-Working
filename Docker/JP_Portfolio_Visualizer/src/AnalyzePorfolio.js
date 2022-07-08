import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import React from 'react';
import * as d3 from "d3";

import data_hoge from './csv/hoge.csv';
import data_huga from './csv/huga.csv';
import data_7203_2021 from './csv/2021_トヨタ自動車.csv';
import data_7203_2022 from './csv/2022_トヨタ自動車.csv';

function AnalyzePortfolio(props) {
  return(
    <>
      <ButtonGroup color="primary" aria-label="outlined primary button group">
        <Button
          onClick={() => {
            props.setVisibleChart(true);

            d3.csv(data_7203_2021).then(function (data) {
              console.log(data);
            });

          }}>
            Analyze Portfolios
        </Button>
        <Button
          onClick={() => {
            props.setVisibleChart(false);

            d3.csv(data_7203_2022).then(function (data) {
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
