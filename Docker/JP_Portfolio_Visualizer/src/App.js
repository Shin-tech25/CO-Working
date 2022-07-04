import './App.css'
import React, { useState } from 'react';
import Chart from './Chart';
import Contents from './Contents';
import AnalyzePortfolio from './AnalyzePorfolio';

function App() {
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
  // const [portfolioAssets, setPortfolioAssets] = useState("none");

  const [visibleChart, setVisibleChart] = useState(false);
  return (
    <>
      {visibleChart ? <Chart /> : <div class="Chart"></div>}
      <Contents
        timePeriod={timePeriod}
        setTimePeriod={setTimePeriod}
        startYear={startYear}
        setStartYear={setStartYear}
        endYear={endYear}
        setEndYear={setEndYear}
        includeYTD={includeYTD}
        setIncludeYTD={setIncludeYTD}
        initialAmount={initialAmount}
        setInitialAmount={setInitialAmount}
        cashFlows={cashFlows}
        setCashFlows={setCashFlows}
        rebalancing={rebalancing}
        setRebalancing={setRebalancing}
        leverageType={leverageType}
        setLeverageType={setLeverageType}
        reinvestDividends={reinvestDividends}
        setReinvenstDividends={setReinvenstDividends}
        displayIncome={displayIncome}
        setDisplayIncome={setDisplayIncome}
        factorRegression={factorRegression}
        setFactorRegression={setFactorRegression}
        benchMark={benchMark}
        setBenchMark={setBenchMark}
        portfolioNames={portfolioNames}
        setPortfolioNames={setPortfolioNames}
      />
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
    </>
  )
}

export default App
