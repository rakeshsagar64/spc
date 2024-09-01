import React from 'react'
import Form from '@rjsf/core';
import validator from '@rjsf/validator-ajv8';

function InitialForm(props) {
  const FINAL_PAGE = "3";
  const [formData, setFormData] = React.useState(null);

  const handleSubmit = () => {
    let stockPurchase = window.localStorage.getItem("stockPurchase") === null ? {} : JSON.parse(window.localStorage.getItem("stockPurchase"));
    stockPurchase[props.formKey] = formData
    window.localStorage.setItem("stockPurchase", JSON.stringify(stockPurchase));
    let nxt = props.pageCount
    props.handlePageFlip(++nxt);
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
        onChange={(e) => setFormData(e.formData)}
        validator={validator}
      >
        <div className='row justify-content-end'>
          {props.pageCount && props.pageCount !== "1" && (<button
            className='submit col-3 btn'
            type="button"
            onClick={handlePrevClick}
          >Prev</button>)}
          {props.pageCount && props.pageCount === FINAL_PAGE ? (
            <button
              className='submit col-3 btn'
              type="submit"
              onClick={handleSubmit}
            >Submit</button>
          ) : (
            <button
              className='submit col-3 btn'
              type="submit"
              onClick={handleSubmit}
            >Next</button>
          )}
        </div>
      </Form>
    </>
  )
}

export default InitialForm;
