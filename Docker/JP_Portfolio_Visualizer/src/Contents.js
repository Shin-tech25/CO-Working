import './Contents.css';
import React, { useState, useEffect } from 'react';

function Explanation() {
  return (
    <>
      <h1>Backtest Portfolio Asset Allocation</h1>
      <p>This portfolio backtesting tool allows you to construct one or more portfolios based on the selected mutual funds, ETFs, and stocks. You can analyze and backtest portfolio returns, risk characteristics, style exposures, and drawdowns. The results cover both returns and fund fundamentals based portfolio style analysis along with risk and return decomposition by each portfolio asset. You can compare up to three different portfolios against the selected benchmark, and you can also specify any periodic contribution or withdrawal cashflows and the preferred portfolio rebalancing strategy. </p>
      <p>The related asset class level portfolio modeling tool allows you to analyze and compare asset class level portfolios with a longer time horizon starting from 1972.</p>
    </>
  )
}


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

  // Portfolio Assets 配列を追加すること前提にしてどう実装するか？
  const [portfolioAssets, setPortfolioAssets] = useState("none");

  return (
    <>
      <Explanation />
      <div className="Contents">
        <p>Contents</p>
      </div>
    </>
  );
}

export default Contents;
