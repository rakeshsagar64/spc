import React, { useState } from 'react'
import './App.css';
import {INITIAL_FORM_UI, INITIAL_FORM} from "./formconfig/formdata.js"
import InitialForm from "./formcomponents/initialForm.js";

const App = () => {
  const [formConfig, setFormConfig] = useState({});

  const handlePageFlip = (pageCount) => {

  }

  return (
    <div className='container'>
      <InitialForm
        formKey="initialForm"
        uiSchema={INITIAL_FORM_UI}
        schema={INITIAL_FORM}
        handlePageFlip={handlePageFlip}
      />
    </div>
  );
};

export default App;
