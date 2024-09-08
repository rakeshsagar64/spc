import React, { useEffect } from 'react'
import Form from '@rjsf/core';
import validator from '@rjsf/validator-ajv8';

function InitialForm(props) {

  const [formData, setFormData] = React.useState(null);

  useEffect(() => {
    let stockPurchase = window.localStorage.getItem("stockPurchase") === null ? {} : JSON.parse(window.localStorage.getItem("stockPurchase"));
    setFormData(stockPurchase[props.formKey]);
  }, []);

  const handleNext = () => {
    let stockPurchase = window.localStorage.getItem("stockPurchase") === null ? {} : JSON.parse(window.localStorage.getItem("stockPurchase"));
    stockPurchase[props.formKey] = formData
    window.localStorage.setItem("stockPurchase", JSON.stringify(stockPurchase));
    let nxt = props.pageCount
    props.handlePageFlip(++nxt);
  }

  const handleSubmit = () => {
    props.handlePageFlip(42);
  }

  const handlePrevClick = () => {
    let prev = props.pageCount
    props.handlePageFlip(--prev);
  }
  
  return (
    <>
      <Form
        {...props}
        formData={formData}
        validator={validator}
        onChange={(e) => setFormData(e.formData)}
      >
        <div className='row justify-content-end'>
          {props.pageCount && props.pageCount !== "1" && (
            <button
              type="button"
              onClick={handlePrevClick}
              className='submit col-3 btn btn-cancel'
            >Prev</button>)}
          {props.isLastPage ? (
            <button
              type="button"
              onClick={handleSubmit}
              className='submit col-3 btn'
            >Submit</button>
          ) : (
            <button
              type="button"
              onClick={handleNext}
              className='submit col-3 btn'
            >Next</button>
          )}
        </div>
      </Form>
    </>
  )
}

export default InitialForm;
