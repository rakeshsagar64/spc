import React from 'react'
import Form from '@rjsf/core';
import validator from '@rjsf/validator-ajv8';

function InitialForm(props) {
    const [formData, setFormData] = React.useState(null);

    const handleSubmit = () => {
        let stockPurchase = window.localStorage.getItem("stockPurchase") === null ? {} : JSON.parse(window.localStorage.getItem("stockPurchase"));
        console.log(props);
        stockPurchase[props.formKey] = formData
        window.localStorage.setItem("stockPurchase", JSON.stringify(stockPurchase));
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
            onClick={handleSubmit}
            >Submit</button>
        </div>
      </Form>
    </>
  )
}

export default InitialForm;
