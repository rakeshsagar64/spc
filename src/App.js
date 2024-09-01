import React, { useState } from 'react'
import './App.css';
import { STOCK_NAME_UI, STOCK_NAME } from "./formconfig/stockName.js"
import { SECTORAL_ANALYSIS, SECTORAL_ANALYSIS_UI } from "./formconfig/sectoralAnalysis.js"
import { BROADER_MARKET, BROADER_MARKET_UI } from "./formconfig/broaderMarketAnalysis.js"
import { TIME_FRAME, TIME_FRAME_UI } from "./formconfig/timeFrame.js"
import { SHORT_TERM, SHORT_TERM_UI } from "./formconfig/shortTerm.js"
import { CORE_PORTFOLIO, CORE_PORTFOLIO_UI } from "./formconfig/corePortfolio.js"
import { SMALL_CAP, SMALL_CAP_UI } from "./formconfig/smallCap.js"
import InitialForm from "./formcomponents/InitialForm.js";
import Header from './formcomponents/Header.js';

const App = () => {
  const [stockName, setStockName] = useState("SPC");
  const [pageCount, setPageCount] = useState(1);
  const [isLongTerm, setIsLongTerm] = useState();
  const [isLargeCap, setIsLargeCap] = useState();

  const handlePageFlip = (pageCount) => {
    let stockPurchase = window.localStorage.getItem("stockPurchase") === null ? {} : JSON.parse(window.localStorage.getItem("stockPurchase"));
    setPageCount(pageCount);
    if (pageCount === 2 && stockPurchase.initialForm && stockPurchase.initialForm.stockName) {
      setStockName(stockPurchase.initialForm.stockName);
    }
    if (pageCount === 4) {
      if (stockPurchase && stockPurchase.timeFrame && stockPurchase.timeFrame.isLongTerm === "Yes") {
        setIsLongTerm(true);
      } else {
        setIsLongTerm(false);
      }
      if (stockPurchase && stockPurchase.sectoralAnalysis && stockPurchase.sectoralAnalysis.marketCap === "Large Cap") {
        setIsLargeCap(true);
      } else {
        setIsLargeCap(false);
      }
    }
  }

  return (
    <>
      <Header
        stockName={stockName}
        pageCount={pageCount}
        isLargeCap={isLargeCap}
        isLongTerm={isLongTerm}
      />
      <div className='container spc'>
        {pageCount && pageCount === 1 && (
          <InitialForm
            pageCount="1"
            formKey="initialForm"
            uiSchema={STOCK_NAME_UI}
            schema={STOCK_NAME}
            handlePageFlip={handlePageFlip}
          />
        )}
        {pageCount && pageCount === 2 && (
          <InitialForm
            pageCount="2"
            formKey="broaderMarket"
            uiSchema={BROADER_MARKET_UI}
            schema={BROADER_MARKET}
            handlePageFlip={handlePageFlip}
          />
        )}
        {pageCount && pageCount === 3 && (
          <InitialForm
            pageCount="3"
            formKey="sectoralAnalysis"
            uiSchema={SECTORAL_ANALYSIS_UI}
            schema={SECTORAL_ANALYSIS}
            handlePageFlip={handlePageFlip}
          />
        )}
        {pageCount && pageCount === 4 && (
          <InitialForm
            pageCount="4"
            formKey="timeFrame"
            uiSchema={TIME_FRAME_UI}
            schema={TIME_FRAME}
            handlePageFlip={handlePageFlip}
          />
        )}
        {pageCount && pageCount === 5 && isLongTerm && (
          <InitialForm
            pageCount="5"
            formKey="corePortfolio"
            uiSchema={CORE_PORTFOLIO_UI}
            schema={CORE_PORTFOLIO}
            handlePageFlip={handlePageFlip}
          />
        )}
        {pageCount && pageCount === 5 && !isLongTerm && (
          <InitialForm
            pageCount="5"
            formKey="shortTerm"
            uiSchema={SHORT_TERM_UI}
            schema={SHORT_TERM}
            handlePageFlip={handlePageFlip}
          />
        )}
        {pageCount && pageCount === 6 && !isLargeCap && (
          <InitialForm
            pageCount="6"
            formKey="smallCapAnalysis"
            uiSchema={SMALL_CAP_UI}
            schema={SMALL_CAP}
            handlePageFlip={handlePageFlip}
          />
        )}
      </div>
    </>
  );
};

export default App;
