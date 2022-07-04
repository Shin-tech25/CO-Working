import './Contents.css';
import React, { useState, useEffect, useMemo } from 'react';
import Select from 'react-select';

function Contents(props) {
  console.log("render Contents");

  //Options
  const options_timeperiod = [
    { value: 'Year-to-Year', label: 'Year-to-Year' },
    { value: 'Month-to-Month', label: 'Month-to-Month' }
  ]
  const options_startyear = [];
  for (let i = 1985; i <= 2022; i++){
    let obj = {};
    obj['value'] = i;
    obj['label'] = i;
    options_startyear.push(obj);
  }
  const options_endyear = [];
  for (let i = 2022; i >= 1985; i--){
    let obj = {};
    obj['value'] = i;
    obj['label'] = i;
    options_endyear.push(obj);
  }
  const options_includeytd = [
    { value: 'Yes', label: 'Yes' },
    { value: 'No', label: 'No' }
  ]
  const options_cashflowsbox = [
    { value: 'Contribute Fixed Ammount', label: 'Contribute Fixed Ammount' },
    { value: 'Withdraw Fixed Ammount', label: 'Withdraw Fixed Ammount' },
    { value: 'Withdraw Fixed Percentage', label: 'Withdraw Fixed Percentage' },
  ]
  const options_rebalancing = [
    { value: 'No rebalancing', label: 'No rebalancing' },
    { value: 'Rebalance annualy', label: 'Rebalance annualy' },
    { value: 'Rebalance semi-annualy', label: 'Rebalance semi-annualy' },
    { value: 'Rebalance quarterly', label: 'Rebalance quarterly' },
    { value: 'Rebalance monthly', label: 'Rebalance monthly' },
    { value: 'Rebalance bands', label: 'Rebalance bands' },
  ]
  const options_leveragetype = [
    { value: 'None', label: 'None' },
    { value: 'Fixed Debt Ammount', label: 'Fixed Debt Ammount' },
    { value: 'Fixed Leverage Ratio', label: 'Fixed Leverage Ratio' },
  ]
  const options_reinvestdividends = [
    { value: 'Yes', label: 'Yes' },
    { value: 'No', label: 'No' }
  ]
  const options_displayincome = [
    { value: 'Yes', label: 'Yes' },
    { value: 'No', label: 'No' }
  ]
  const options_factorregression = [
    { value: 'Yes', label: 'Yes' },
    { value: 'No', label: 'No' }
  ]
  const options_benchmark = [
    { value: 'None', label: 'None' },
    { value: 'Specify Ticker', label: 'Specify Ticker' },
    { value: 'Import Benchmark', label: 'Import Benchmark' },
  ]
  const options_portfolionames = [
    { value: 'Default', label: 'Default' },
    { value: 'Custom', label: 'Custom' }
  ]

  return (
    <div className="Contents">
      <h1>Backtest Portfolio Asset Allocation</h1>
      <p>This portfolio backtesting tool allows you to construct one or more portfolios based on the selected mutual funds, ETFs, and stocks. You can analyze and backtest portfolio returns, risk characteristics, style exposures, and drawdowns. The results cover both returns and fund fundamentals based portfolio style analysis along with risk and return decomposition by each portfolio asset. You can compare up to three different portfolios against the selected benchmark, and you can also specify any periodic contribution or withdrawal cashflows and the preferred portfolio rebalancing strategy. </p>
      <p>The related asset class level portfolio modeling tool allows you to analyze and compare asset class level portfolios with a longer time horizon starting from 1972.</p>

      <p>TimePeriod</p>
      <Select
        name="TimePeriodBox"
        options={options_timeperiod}
        defaultValue={ {value: 'Year-to-Year', label: 'Year-to-Year'} }
        onChange={(e) => { props.setTimePeriod(e.value) }}
      />
      <p>Start Year</p>
      <Select
        name="StartYearBox"
        options={options_startyear}
        defaultValue={{ value: '1985', label: '1985'}}
        onChange={(e) => { props.setStartYear(e.value) }}
      />
      <p>End Year</p>
      <Select
        name="EndYearBox"
        options={options_endyear}
        defaultValue={{value: '2022', label: '2022'}}
        onChange={(e) => { props.setEndYear(e.value) }}
      />
      <p>IncludeYTD</p>
      <Select
        name="IncludeTYDBox"
        options={options_includeytd}
        defaultValue={{ value: 'No', label: 'No'}}
        onChange={(e) => { props.setIncludeYTD(e.value) }}
      />

      {/* Initial Ammount */}

      <p>Cashflows</p>
      <Select
        name="CashFlowsBox"
        options={options_cashflowsbox}
        defaultValue={{value: 'None', label: 'None'}}
        onChange={(e) => { props.setCashFlows(e.value) }}
      />

      <p>Rebalancing</p>
      <Select
        name="RebalancingBox"
        options={options_rebalancing}
        defaultValue={{value: 'Rebalance annualy', label: 'Rebalance annualy'}}
        onChange={(e) => { props.setRebalancing(e.value) }}
      />
      <p>LeverageType</p>
      <Select
        name="LeverageTypeBox"
        options={options_leveragetype}
        defaultValue={{value: 'None', label: 'None'}}
        onChange={(e) => { props.setLeverageType(e.value) }}
      />
      <p>Reinvest Dividends</p>
      <Select
        name="ReinvestDividentsBox"
        options={options_reinvestdividends}
        defaultValue={{value: 'Yes', label: 'Yes'}}
        onChange={(e) => { props.setReinvenstDividends(e.value) }}
      />
      <p>Display Income</p>
      <Select
        name="DisplayIncomeBox"
        options={options_displayincome}
        defaultValue={{value: 'No', label: 'No'}}
        onChange={(e) => { props.setDisplayIncome(e.value) }}
      />
      <p>Factor Regression</p>
      <Select
        name="FactorRegressionBox"
        options={options_factorregression}
        defaultValue={{value: 'No', label: 'No'}}
        onChange={(e) => { props.setFactorRegression(e.value) }}
      />
      <p>Benchmark</p>
      <Select
        name="BenchmarkBox"
        options={options_benchmark}
        defaultValue={{ value: 'None', label: 'None'}}
        onChange={(e) => { props.setBenchMark(e.value) }}
      />
      <p>Portfolio Names</p>
      <Select
        name="PortfolioNameBox"
        options={options_portfolionames}
        defaultValue={{value: 'Default', 'label': 'Default'}}
        onChange={(e) => { props.setPortfolioNames(e.value) }}
      />
    </div>
  );
}

export default Contents;
