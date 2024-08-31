import React from 'react'
import './App.css';
import Form from '@rjsf/core';
import { STOCK_FORM, STOCK_FORM_UI } from './formconfig/formdata';
import validator from '@rjsf/validator-ajv8';

const App = () => {
  const [formData, setFormData] = React.useState(null);
  return (
    <div className='container'>
    <Form
      uiSchema={STOCK_FORM_UI}
      schema={STOCK_FORM}
      formData={formData}
      onChange={(e) => setFormData(e.formData)}
      validator={validator}
    />
    </div>
  );
};

export default App;
