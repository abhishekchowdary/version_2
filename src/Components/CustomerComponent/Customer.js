import React from 'react'

const Customer = () => {
  return (
    <div className="home_container_2">
    <form className="form1">
      <h2 className="dataLine">Customer Details</h2>
      <label> Name </label>
      <input type="text" name="name" disabled></input>
      <label> Account Number </label>
      <input type="number" name="C_ID" disabled></input>
      <label> CLR Balance </label>
      <input type="number" name="Amount" disabled></input>
      <label> Currency </label>
      <input type="text" name="Currency" disabled></input>
    </form>
  </div>
  )
}

export default Customer