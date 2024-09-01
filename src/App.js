import React, { useState } from 'react'
import './App.css';
import { STOCK_NAME_UI, STOCK_NAME } from "./formconfig/stockName.js"
import { SECTORAL_ANALYSIS, SECTORAL_ANALYSIS_UI } from "./formconfig/sectoralAnalysis.js"
import { BROADER_MARKET, BROADER_MARKET_UI } from "./formconfig/broaderMarketAnalysis.js"

import InitialForm from "./formcomponents/initialForm.js";

const App = () => {
  const [pageCount, setPageCount] = useState(1);

  const handlePageFlip = (pageCount) => {
    setPageCount(pageCount);
  }

  return (
    <div className='container'>
      {pageCount && pageCount === 1 && (
        <InitialForm
          nextPage="1"
          formKey="initialForm"
          uiSchema={STOCK_NAME_UI}
          schema={STOCK_NAME}
          handlePageFlip={handlePageFlip}
        />
      )}
      {pageCount && pageCount === 2 && (
        <InitialForm
          nextPage="2"
          formKey="broaderMarket"
          uiSchema={BROADER_MARKET_UI}
          schema={BROADER_MARKET}
          handlePageFlip={handlePageFlip}
        />
      )}
      {pageCount && pageCount === 3 && (
        <InitialForm
          nextPage="3"
          formKey="sectoralAnalysis"
          uiSchema={SECTORAL_ANALYSIS_UI}
          schema={SECTORAL_ANALYSIS}
          handlePageFlip={handlePageFlip}
        />
      )}
    </div>
  );
};

export default App;
