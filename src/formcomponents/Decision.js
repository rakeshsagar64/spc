import React, { useEffect } from 'react'

function Decision(props) {
  const [formData, setFormData] = React.useState(null);

  useEffect(() => {
    let stockPurchase = window.localStorage.getItem("stockPurchase") === null ? {} : JSON.parse(window.localStorage.getItem("stockPurchase"));
    setFormData(stockPurchase);
  }, []);

  const handleClear = () => {
    window.localStorage.clear("stockPurchase");
    props.handlePageFlip(1);
  }
  const renderReport = () => {
    const elements = [];
    for (const key in formData) {
      elements.push(<h3 className="dataHeading">{convertCamelToUpperCase(key)}</h3>)
      for (const keyTwo in formData[key]) {
        elements.push(<div className="row">
          <div className='col-6'>
            {convertCamelToUpperCase(keyTwo)}
          </div>
          <div className='col-6'>
            {formData[key][keyTwo]}
          </div>
        </div>)
      }
    }
    return elements;
  }

  const convertCamelToUpperCase = (text) => {
    const result = text.replace(/([A-Z])/g, " $1");
    const finalResult = result.charAt(0).toUpperCase() + result.slice(1);
    return finalResult;
  }

  return (
    <div>
      {renderReport()}
      <div className='row'>
        <textarea className="finalBox" placeholder="Final decision here" />
        <button
          className='final btn'
          type="button"
          onClick={handleClear}
        >You Have Made Your Choice!!! There is no turning back now</button>
      </div>
    </div>
  )
}

export default Decision
