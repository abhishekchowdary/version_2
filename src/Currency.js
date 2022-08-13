import React from 'react'

const CurrencyList = ({currencyList , handleChange}) => {
  return (
    <>
    <input type="text" list = "list" onChange={handleChange} placeholder="Select currency"/>
    <datalist id='list'>
    {
      Object.keys(currencyList).map(type=><option value={type}>{type}</option>)
    }
    </datalist>
    </>
  )
}
export default CurrencyList