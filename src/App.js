import React from 'react'
import './App.css';
import Form from '@rjsf/core';
import { INITIAL_FORM, INITIAL_FORM_UI } from './formconfig/formdata';
import validator from '@rjsf/validator-ajv8';

const App = () => {
  const [formData, setFormData] = React.useState(null);
  return (
    <div className='container'>
      <Form
        uiSchema={INITIAL_FORM_UI}
        schema={INITIAL_FORM}
        formData={formData}
        onChange={(e) => setFormData(e.formData)}
        validator={validator}
      >
        <div className='row justify-content-end'>
            <button className='submit col-3 btn' type="submit">Submit</button>
        </div>
      </Form>
    </div>
  );
};

export default App;
