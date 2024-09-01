import React from 'react'
import { FINAL_PAGE } from '../formconfig/stockName';

function Header(props) {
  return (
    <div className="row fixed-top header">
      <div className="col-10">
        {props.stockName}
      </div>
      <div className="col-2">
        {`${props.pageCount}/${FINAL_PAGE}`}
      </div>
    </div>
  )
}

export default Header
