import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import React from 'react';

function AnalyzePortfolio(props) {
  return(
    <>
      <ButtonGroup color="primary" aria-label="outlined primary button group">
        <Button
          onClick={() => { props.setVisibleChart(true) }}>
            Analyze Portfolios
        </Button>
        <Button
          onClick={() => { props.setVisibleChart(false) }}>
          Cancel
        </Button>
      </ButtonGroup>
    </>
  );
}

export default AnalyzePortfolio
