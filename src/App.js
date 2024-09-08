import React, { useState } from 'react'
import './App.css';
import { SMALL_CAP, SMALL_CAP_UI } from "./formconfig/smallCap.js"
import { STOCK_NAME_UI, STOCK_NAME } from "./formconfig/stockName.js"
import { TIME_FRAME, TIME_FRAME_UI } from "./formconfig/timeFrame.js"
import { SHORT_TERM, SHORT_TERM_UI } from "./formconfig/shortTerm.js"
import { CORE_PORTFOLIO, CORE_PORTFOLIO_UI } from "./formconfig/corePortfolio.js"
import { BROADER_MARKET, BROADER_MARKET_UI } from "./formconfig/broaderMarketAnalysis.js"
import { SECTORAL_ANALYSIS, SECTORAL_ANALYSIS_UI } from "./formconfig/sectoralAnalysis.js"
import Header from './formcomponents/Header.js';
import Decision from './formcomponents/Decision.js';
import InitialForm from "./formcomponents/InitialForm.js";

const App = () => {
  const [pageCount, setPageCount] = useState(1);
  const [isLongTerm, setIsLongTerm] = useState();
  const [isLargeCap, setIsLargeCap] = useState();
  const [stockName, setStockName] = useState("SPC");

  const handlePageFlip = (pageCount) => {
    let stockPurchase = window.localStorage.getItem("stockPurchase") === null ? {} : JSON.parse(window.localStorage.getItem("stockPurchase"));
    setPageCount(pageCount);
    if (pageCount === 2 && stockPurchase.initialForm && stockPurchase.initialForm.stockName) {
      setStockName(stockPurchase.initialForm.stockName);
    }
    if (pageCount === 5) {
      if (stockPurchase && stockPurchase.timeFrame && stockPurchase.timeFrame.isLongTerm === "Yes") {
        setIsLongTerm(true);
      } else {
        setIsLongTerm(false);
      }
    }
    if (pageCount === 4) {
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
        {JSON.stringify(pageCount)}
        Large Cap: {JSON.stringify(isLargeCap)}
        Long Term: {JSON.stringify(isLongTerm)}

        {pageCount && pageCount === 1 && (
          <InitialForm
            pageCount="1"
            schema={STOCK_NAME}
            formKey="initialForm"
            uiSchema={STOCK_NAME_UI}
            handlePageFlip={handlePageFlip}
          />
        )}
        {pageCount && pageCount === 2 && (
          <InitialForm
            pageCount="2"
            formKey="broaderMarket"
            schema={BROADER_MARKET}
            uiSchema={BROADER_MARKET_UI}
            handlePageFlip={handlePageFlip}
          />
        )}
        {pageCount && pageCount === 3 && (
          <InitialForm
            pageCount="3"
            formKey="sectoralAnalysis"
            schema={SECTORAL_ANALYSIS}
            uiSchema={SECTORAL_ANALYSIS_UI}
            handlePageFlip={handlePageFlip}
          />
        )}
        {pageCount && pageCount === 4 && (
          <InitialForm
            pageCount="4"
            formKey="timeFrame"
            schema={TIME_FRAME}
            uiSchema={TIME_FRAME_UI}
            handlePageFlip={handlePageFlip}
          />
        )}
        {pageCount && pageCount === 5 && isLongTerm && (
          <InitialForm
            pageCount="5"
            formKey="corePortfolio"
            schema={CORE_PORTFOLIO}
            isLastPage={isLargeCap}
            uiSchema={CORE_PORTFOLIO_UI}
            handlePageFlip={handlePageFlip}
          />
        )}
        {pageCount && pageCount === 5 && !isLongTerm && (
          <InitialForm
            pageCount="5"
            formKey="shortTerm"
            schema={SHORT_TERM}
            isLastPage={isLargeCap}
            uiSchema={SHORT_TERM_UI}
            handlePageFlip={handlePageFlip}
          />
        )}
        {pageCount && pageCount === 6 && !isLargeCap && (
          <InitialForm
            pageCount="6"
            isLastPage={true}
            schema={SMALL_CAP}
            uiSchema={SMALL_CAP_UI}
            formKey="smallCapAnalysis"
            handlePageFlip={handlePageFlip}
          />
        )}
        {pageCount && pageCount === 42 && (
          <Decision
            handlePageFlip={handlePageFlip}
          />
        )}
      </div>
    </>
  );
};

export default App;
