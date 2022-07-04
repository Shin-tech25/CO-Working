import './Contents.css';
import React, { useState, useEffect, useMemo } from 'react';
import Select from 'react-select';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';

function Explanation() {
  return (
    <>
      <h1>Backtest Portfolio Asset Allocation</h1>
      <p>This portfolio backtesting tool allows you to construct one or more portfolios based on the selected mutual funds, ETFs, and stocks. You can analyze and backtest portfolio returns, risk characteristics, style exposures, and drawdowns. The results cover both returns and fund fundamentals based portfolio style analysis along with risk and return decomposition by each portfolio asset. You can compare up to three different portfolios against the selected benchmark, and you can also specify any periodic contribution or withdrawal cashflows and the preferred portfolio rebalancing strategy. </p>
      <p>The related asset class level portfolio modeling tool allows you to analyze and compare asset class level portfolios with a longer time horizon starting from 1972.</p>
    </>
  )
}

const TimePeriodBox = React.memo((props) => {
  const options = [
    { value: 'Year-to-Year', label: 'Year-to-Year' },
    { value: 'Month-to-Month', label: 'Month-to-Month' }
  ]
  return (
    <>
      <p>TimePeriod</p>
      <Select
        name="TimePeriodBox"
        options={options}
        defaultValue={ {value: 'Year-to-Year', label: 'Year-to-Year'} }
        onChange={(e) => { props.setTimePeriod(e.value) }}
      />
    </>
  );
})

const StartYearBox = React.memo((props) => {
  const options = [];
  for (let i = 1985; i <= 2022; i++){
    let obj = {};
    obj['value'] = i;
    obj['label'] = i;
    options.push(obj);
  }
  return (
    <>
      <p>Start Year</p>
      <Select
        name="StartYearBox"
        options={options}
        defaultValue={{ value: '1985', label: '1985'}}
        onChange={(e) => { props.setStartYear(e.value) }}
      />
    </>
  );
})

const EndYearBox = React.memo((props) => {
  const options = [];
  for (let i = 2022; i >= 1985; i--){
    let obj = {};
    obj['value'] = i;
    obj['label'] = i;
    options.push(obj);
  }
  return (
    <>
      <p>End Year</p>
      <Select
        name="EndYearBox"
        options={options}
        defaultValue={{value: '2022', label: '2022'}}
        onChange={(e) => { props.setEndYear(e.value) }}
      />
    </>
  );
})

const IncludeYTDBox = React.memo((props) => {
  const options = [
    { value: 'Yes', label: 'Yes' },
    { value: 'No', label: 'No' }
  ]
  return (
    <>
      <p>IncludeYTD</p>
      <Select
        name="IncludeTYDBox"
        options={options}
        defaultValue={{ value: 'No', label: 'No'}}
        onChange={(e) => { props.setIncludeYTD(e.value) }}
      />
    </>
  );
})

const CashFlowsBox = React.memo((props) => {
  const options = [
    { value: 'Contribute Fixed Ammount', label: 'Contribute Fixed Ammount' },
    { value: 'Withdraw Fixed Ammount', label: 'Withdraw Fixed Ammount' },
    { value: 'Withdraw Fixed Percentage', label: 'Withdraw Fixed Percentage' },
  ]
  return (
    <>
      <p>Cashflows</p>
      <Select
        name="CashFlowsBox"
        options={options}
        defaultValue={{value: 'None', label: 'None'}}
        onChange={(e) => { props.setCashFlows(e.value) }}
      />
    </>
  );
})

const RebalancingBox = React.memo((props) => {
  const options = [
    { value: 'No rebalancing', label: 'No rebalancing' },
    { value: 'Rebalance annualy', label: 'Rebalance annualy' },
    { value: 'Rebalance semi-annualy', label: 'Rebalance semi-annualy' },
    { value: 'Rebalance quarterly', label: 'Rebalance quarterly' },
    { value: 'Rebalance monthly', label: 'Rebalance monthly' },
    { value: 'Rebalance bands', label: 'Rebalance bands' },
  ]
  return (
    <>
      <p>Rebalancing</p>
      <Select
        name="RebalancingBox"
        options={options}
        defaultValue={{value: 'Rebalance annualy', label: 'Rebalance annualy'}}
        onChange={(e) => { props.setRebalancing(e.value) }}
      />
    </>
  );
})

const LeverageTypeBox = React.memo((props) => {
  const options = [
    { value: 'None', label: 'None' },
    { value: 'Fixed Debt Ammount', label: 'Fixed Debt Ammount' },
    { value: 'Fixed Leverage Ratio', label: 'Fixed Leverage Ratio' },
  ]
  return (
    <>
      <p>LeverageType</p>
      <Select
        name="LeverageTypeBox"
        options={options}
        defaultValue={{value: 'None', label: 'None'}}
        onChange={(e) => { props.setLeverageType(e.value) }}
      />
    </>
  );
})

const ReinvestDividendsBox = React.memo((props) => {
  const options = [
    { value: 'Yes', label: 'Yes' },
    { value: 'No', label: 'No' }
  ]
  return (
    <>
      <p>Reinvest Dividends</p>
      <Select
        name="ReinvestDividentsBox"
        options={options}
        defaultValue={{value: 'Yes', label: 'Yes'}}
        onChange={(e) => { props.setReinvenstDividends(e.value) }}
      />
    </>
  );
})

const DisplayIncomeBox = React.memo((props) => {
  const options = [
    { value: 'Yes', label: 'Yes' },
    { value: 'No', label: 'No' }
  ]
  return (
    <>
      <p>Display Income</p>
      <Select
        name="DisplayIncomeBox"
        options={options}
        defaultValue={{value: 'No', label: 'No'}}
        onChange={(e) => { props.setDisplayIncome(e.value) }}
      />
    </>
  );
})

const FactorRegressionBox = React.memo((props) => {
  const options = [
    { value: 'Yes', label: 'Yes' },
    { value: 'No', label: 'No' }
  ]
  return (
    <>
      <p>Factor Regression</p>
      <Select
        name="FactorRegressionBox"
        options={options}
        defaultValue={{value: 'No', label: 'No'}}
        onChange={(e) => { props.setFactorRegression(e.value) }}
      />
    </>
  );
})

const BenchmarkBox = React.memo((props) => {
  const options = [
    { value: 'None', label: 'None' },
    { value: 'Specify Ticker', label: 'Specify Ticker' },
    { value: 'Import Benchmark', label: 'Import Benchmark' },
  ]
  return (
    <>
      <p>Benchmark</p>
      <Select
        name="BenchmarkBox"
        options={options}
        defaultValue={{ value: 'None', label: 'None'}}
        onChange={(e) => { props.setBenchMark(e.value) }}
      />
    </>
  );
})

const PortfolioNamesBox = React.memo((props) => {
  const options = [
    { value: 'Default', label: 'Default' },
    { value: 'Custom', label: 'Custom' }
  ]
  return (
    <>
      <p>Portfolio Names</p>
      <Select
        name="PortfolioNameBox"
        options={options}
        defaultValue={{value: 'Default', 'label': 'Default'}}
        onChange={(e) => { props.setPortfolioNames(e.value) }}
      />
    </>
  );
})

const AnalyzePortfolio = React.memo((props) => {
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
})

function Contents() {
  const [timePeriod, setTimePeriod] = useState("Year-to-Year");
  const [startYear, setStartYear] = useState("1985");
  const [endYear, setEndYear] = useState("2022");
  const [includeYTD, setIncludeYTD] = useState("No");
  const [initialAmount, setInitialAmount] = useState("10000");
  const [cashFlows, setCashFlows] = useState("None");
  const [rebalancing, setRebalancing] = useState("Rebalance annualy");
  const [leverageType, setLeverageType] = useState("None");
  const [reinvestDividends, setReinvenstDividends] = useState("Yes");
  const [displayIncome, setDisplayIncome] = useState("No");
  const [factorRegression, setFactorRegression] = useState("No");
  const [benchMark, setBenchMark] = useState("None");
  const [portfolioNames, setPortfolioNames] = useState("Default");
  const [visibleChart, setVisibleChart] = useState(false);

  // Portfolio Assets 配列を追加すること前提にしてどう実装するか？
  // const [portfolioAssets, setPortfolioAssets] = useState("none");

  console.log("render Contents");

  return (
    <>
      <div className="Contents">
        {visibleChart ? console.log("hello") : console.log("huga")}
        <Explanation />

        <TimePeriodBox setTimePeriod={setTimePeriod} />
        <StartYearBox setStartYear={setStartYear} />
        <EndYearBox setEndYear={setEndYear} />
        <IncludeYTDBox setIncludeYTD={setIncludeYTD} />

        {/* Initial Ammount */}

        <CashFlowsBox setCashFlows={setCashFlows} />
        <RebalancingBox setRebalancing={setRebalancing} />
        <LeverageTypeBox setLeverageType={setLeverageType} />
        <ReinvestDividendsBox setReinvenstDividends={setReinvenstDividends} />
        <DisplayIncomeBox setDisplayIncome={setDisplayIncome} />
        <FactorRegressionBox setFactorRegression={setFactorRegression} />
        <BenchmarkBox setBenchMark={setBenchMark} />
        <PortfolioNamesBox setPortfolioNames={setPortfolioNames} />
        <AnalyzePortfolio
          timePeriod={timePeriod}
          startYear={startYear}
          endYear={endYear}
          includeYTD={includeYTD}
          initialAmount={initialAmount}
          cashFlows={cashFlows}
          rebalancing={rebalancing}
          leverageType={leverageType}
          reinvestDividends={reinvestDividends}
          displayIncome={displayIncome}
          factorRegression={factorRegression}
          benchMark={benchMark}
          portfolioNames={portfolioNames}
          setVisibleChart={setVisibleChart}
        />
      </div>
    </>
  );
}

export default Contents;
