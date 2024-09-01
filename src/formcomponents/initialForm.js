import React from 'react'
import Form from '@rjsf/core';
import validator from '@rjsf/validator-ajv8';

function InitialForm(props) {
  const [formData, setFormData] = React.useState(null);

  const handleSubmit = () => {
    let stockPurchase = window.localStorage.getItem("stockPurchase") === null ? {} : JSON.parse(window.localStorage.getItem("stockPurchase"));
    stockPurchase[props.formKey] = formData
    window.localStorage.setItem("stockPurchase", JSON.stringify(stockPurchase));
    let nxt = props.nextPage
    props.handlePageFlip(++nxt);
  }

  const handlePrevClick = () => {
    let prev = props.nextPage
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
          <button
            className='submit col-3 btn'
            type="submit"
            onClick={handlePrevClick}
            disabled={props.nextPage === 1}
          >Prev</button>
          <button
            className='submit col-3 btn'
            type="submit"
            onClick={handleSubmit}
          >Next</button>
        </div>
      </Form>
    </>
  )
}

export default InitialForm;
